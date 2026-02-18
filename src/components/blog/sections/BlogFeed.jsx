// BlogFeed.jsx (archivo completo)
import { useEffect, useMemo } from "react";
import { Reveal } from "../../ui/animations/Reveal";
import { SoftCard } from "../../ui/cards/SoftCard";
import NewsAccordionItem from "../NewsAccordionItem";
import Paginator from "../Paginator";

// ✅ skeleton local para evitar inconsistencias
function FeedSkeleton({ count = 4 }) {
    return (
        <div className="grid gap-3">
            {Array.from({ length: count }).map((_, idx) => (
                <SoftCard key={idx} className="p-5">
                    <div className="space-y-3">
                        <div className="flex gap-2">
                            <div className="h-5 w-16 rounded-full bg-[rgb(255_255_255/0.06)] animate-pulse" />
                            <div className="h-5 w-20 rounded-full bg-[rgb(255_255_255/0.06)] animate-pulse" />
                            <div className="h-5 w-28 rounded-full bg-[rgb(255_255_255/0.06)] animate-pulse" />
                        </div>
                        <div className="h-4 w-2/3 rounded bg-[rgb(255_255_255/0.07)] animate-pulse" />
                        <div className="h-3 w-full rounded bg-[rgb(255_255_255/0.05)] animate-pulse" />
                        <div className="h-3 w-5/6 rounded bg-[rgb(255_255_255/0.05)] animate-pulse" />
                    </div>
                </SoftCard>
            ))}
        </div>
    );
}

/**
 * StickyReveal (solo para blog):
 * una vez que entra al viewport, queda visible.
 * Se resetea si cambia resetKey (filtros/orden).
 */
function StickyReveal({
    children,
    className,
    y = 10,
    duration = 0.5,
    delay = 0,
    amount = 0.15,
    margin = "0px 0px -10% 0px",
    resetKey,
}) {
    // Import dinámico del motion del Reveal global (así no tocás tu Reveal base)
    // Si preferís, movelo a un archivo propio.
    const { motion, useReducedMotion } = require("framer-motion");
    const reduce = useReducedMotion();

    const [hasShown, setHasShown] = useMemo(() => {
        // hack: useMemo para inicializar sin otro import de React state aquí
        // pero preferible state real; mantenemos simple sin modificar tu base.
        return [false, () => { }];
    }, []);

    // Para no complicar: si querés sticky “real”, crealo como archivo.
    // Acá, para consistencia y evitar que quede invisible, usamos once=true del Reveal base vía key reset.
    // ✅ En blog, el fix más robusto es re-mount forzado con resetKey:
    return (
        <Reveal className={className} delay={delay} once={true} amount={amount}>
            {children}
        </Reveal>
    );
}

export default function BlogFeed({ blog }) {
    const {
        isLoading = false,
        paged = [],
        openId,
        setOpenId,
        page = 1,
        pageCount = 0,
        setPage,
        resetKey = "",
    } = blog ?? {};

    const visibleIds = useMemo(
        () => new Set(paged.map((x) => x?.id).filter(Boolean)),
        [paged]
    );

    // si el openId ya no existe en la página actual, cerrarlo
    useEffect(() => {
        if (!setOpenId) return;
        if (openId == null) return;
        if (!visibleIds.has(openId)) setOpenId(null);
    }, [openId, visibleIds, setOpenId]);

    return (
        <Reveal as="div" className="space-y-4" id="news-feed">
            <div className="grid gap-3">
                {isLoading ? (
                    <FeedSkeleton count={4} />
                ) : paged.length === 0 ? (
                    <SoftCard className="p-4">Todavía no hay entradas del blog.</SoftCard>
                ) : (
                    paged.map((i, idx) => (
                        // ✅ key incluye resetKey para re-montar Reveal al filtrar/ordenar
                        <Reveal key={`${i.id}-${resetKey}`} delay={0.04 * idx} once={true} amount={0.15}>
                            <NewsAccordionItem
                                item={i}
                                open={openId === i.id}
                                onToggle={() =>
                                    setOpenId?.((cur) => (cur === i.id ? null : i.id))
                                }
                            />
                        </Reveal>
                    ))
                )}
            </div>

            {/* ✅ no renderizar card vacía si no hay paginación o está cargando */}
            {!isLoading && pageCount > 1 && (
                <Reveal>
                    <SoftCard className="p-4">
                        <Paginator page={page} pageCount={pageCount} onPage={setPage} />
                    </SoftCard>
                </Reveal>
            )}
        </Reveal>
    );
}
