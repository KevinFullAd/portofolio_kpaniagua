// BlogSidebar.jsx (archivo completo)
import { Reveal } from "../../ui/animations/Reveal";
import { SoftCard } from "../../ui/cards/SoftCard";
import { Divider } from "../../ui/primitives/Divider";
import HeadlineItem from "../HeadlineItem";

function HeadlinesSkeleton({ count = 4 }) {
    return (
        <SoftCard className="p-5">
            <div className="font-semibold">Titulares</div>
            <Divider className="my-4 opacity-60" />
            <div className="space-y-3">
                {Array.from({ length: count }).map((_, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2">
                        <div className="h-3 w-3 rounded-full bg-[rgb(255_255_255/0.06)] animate-pulse" />
                        <div className="h-3 w-4/5 rounded bg-[rgb(255_255_255/0.05)] animate-pulse" />
                    </div>
                ))}
            </div>
        </SoftCard>
    );
}

export default function BlogSidebar({ blog }) {
    const {
        isLoading = false,
        headlines = [],
        openFromHeadline,
        resetKey = "",
    } = blog ?? {};

    return (
        <Reveal className="space-y-4">
            {isLoading ? (
                <HeadlinesSkeleton count={4} />
            ) : (
                <SoftCard className="p-5">
                    <div className="font-semibold">Titulares</div>

                    <Divider className="my-4 opacity-60" />

                    <div className="divide-y divide-[rgb(255_255_255/0.08)]">
                        {headlines.length === 0 ? (
                            <div className="py-3 text-sm" style={{ color: "var(--text-muted)" }}>
                                Todavía no hay titulares.
                            </div>
                        ) : (
                            headlines.map((i, idx) => (
                                // ✅ key incluye resetKey para que no se “claven” invisibles al reordenar/filtrar
                                <Reveal key={`${i.id}-${resetKey}`} delay={0.04 * idx} once={true} amount={0.15}>
                                    <HeadlineItem item={i} onOpen={() => openFromHeadline?.(i.id)} />
                                </Reveal>
                            ))
                        )}
                    </div>
                </SoftCard>
            )}
        </Reveal>
    );
}
