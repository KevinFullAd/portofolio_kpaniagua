import { useMemo, useState, useCallback } from "react";

/**
 * Hook reutilizable para “slats” con panel inclinado (skew) y soporte de bordes.
 * - Reutiliza la misma lógica para ACTIVE y HOVER.
 * - Devuelve rects (left/width) listos para usar en overlays.
 */
function useSkewSlats({ items, activeId, edge = 12, skewDeg = -18 }) {
    const n = items.length;

    const activeIndex = useMemo(() => {
        const idx = items.findIndex((i) => i.id === activeId);
        return Math.max(0, idx);
    }, [items, activeId]);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const base = useMemo(() => `calc(100% / ${n})`, [n]);

    const getRect = useCallback(
        (index) => {
            const isFirst = index === 0;
            const isLast = index === n - 1;

            // Strings útiles
            const idxBase = `calc(${index} * ${base})`;

            // FIRST
            if (isFirst) {
                return {
                    left: `calc(${idxBase} - 12px)`,                       // 0
                    width: `calc(${base} + ${edge}px)`,  // base + edge (solo hacia la derecha)
                    transform: `skewX(${skewDeg}deg)`,
                    transformOrigin: "left",
                };
            }

            // LAST
            if (isLast) {
                return {
                    left: `calc(${idxBase}  )`, // idx*base - edge (solo hacia la izquierda)
                    width: `calc(${base} + ${edge}px)`,   // base + edge
                    transform: `skewX(${skewDeg}deg)`,
                    transformOrigin: "right",
                };
            }

            // MIDDLE (retorno común)
            return {
                left: `calc(${idxBase} )`,      // idx*base - edge (bleed izq)
                width: `calc(${base} )`,    // base + 2*edge (bleed izq + der)
                transform: `skewX(${skewDeg}deg)`,
                transformOrigin: "center",
            };
        },
        [n, base, edge, skewDeg]
    );

    const activeRect = useMemo(() => getRect(activeIndex, { mode: "active" }), [getRect, activeIndex]);

    const hoverRect = useMemo(() => {
        if (hoveredIndex == null) return null;
        return getRect(hoveredIndex, { mode: "hover" });
    }, [getRect, hoveredIndex]);

    const hoverBind = useMemo(
        () => ({
            onMouseLeave: () => setHoveredIndex(null),
            getItemProps: (idx) => ({
                onMouseEnter: () => setHoveredIndex(idx),
            }),
            setHoveredIndex,
            hoveredIndex,
        }),
        [hoveredIndex]
    );

    return { n, activeIndex, activeRect, hoverRect, hoverBind, getRect };
}

/**
 * Capa reutilizable: Overlay inclinado (sirve para active y hover)
 */
function SkewOverlay({ rect, visible, opacity = 1, z = 0, background }) {
    return (
        <div className="pointer-events-none absolute inset-0" style={{ zIndex: z }}>
            <div
                className="absolute inset-y-0 transition-opacity duration-200"
                style={{
                    left: rect?.left ?? 0,
                    width: rect?.width ?? 0,
                    opacity: visible ? opacity : 0,
                    transform: rect?.skew ?? "skewX(-18deg)",
                    transformOrigin: "center",
                    background,
                }}
            />
        </div>
    );
}

/**
 * (Opcional) Capa reutilizable: “Glow” blur centrado en el ítem activo/hover
 */
function GlowBlur({ index, n, visible = true, z = 1, background = "var(--accent-solid)", opacity = 0.22 }) {
    return (
        <div className="pointer-events-none absolute inset-0" style={{ zIndex: z }}>
            <div
                className="absolute top-1/2 -translate-y-1/2 h-10 w-24 rounded-full blur-2xl transition-all duration-500 ease-out"
                style={{
                    left: `calc(${index} * (100% / ${n}) + (100% / ${n}) / 2)`,
                    transform: "translate(-50%, -50%)",
                    background,
                    opacity: visible ? opacity : 0,
                }}
            />
        </div>
    );
}

export default function Navbar({ activePage, setActivePage, className = "" }) {
    const items = [
        { id: "about", icon: "business" },
        { id: "resume", icon: "description" },
        { id: "portfolio", icon: "work" },
        { id: "blog", icon: "article" },
        { id: "contact", icon: "help_outline" },
    ];

    const { n, activeIndex, activeRect, hoverRect, hoverBind } = useSkewSlats({
        items,
        activeId: activePage,
        edge: 12,
        skewDeg: -18,
    });

    const hoveredIndex = hoverBind.hoveredIndex;
    const effectiveIndexForGlow = hoveredIndex ?? activeIndex;

    return (
        <nav
            className={`
        min-w-100 max-w-[40%] z-20
        absolute right-0 top-0
        hidden lg:block
        ${className}
      `}
        >
            <div
                className="
          relative h-14
          overflow-hidden
          rounded-bl-xl rounded-tr-2xl
          border-b border-l border-(--border)
          bg-(--bg-card)
        "
            >
                {/* ACTIVE overlay (capa) */}
                <SkewOverlay
                    rect={activeRect}
                    visible={true}
                    z={0}
                    opacity={1}
                    background={"rgb(var(--accent-rgb) / 0.14)"}
                />

                {/* HOVER overlay (capa) */}
                <SkewOverlay
                    rect={hoverRect}
                    visible={hoveredIndex != null}
                    z={2}
                    opacity={1}
                    background={"rgb(var(--accent-rgb) / 0.08)"}
                />

                {/* Glow blur (puede reaccionar a hover o quedarse en active) */}
                <GlowBlur index={effectiveIndexForGlow} n={n} z={1} opacity={0.22} />

                {/* SLATS */}
                <ul className="relative z-10 flex h-full" onMouseLeave={hoverBind.onMouseLeave}>
                    {items.map((item, idx) => {
                        const active = item.id === activePage;
                        const isLast = idx === n - 1;

                        return (
                            <li key={item.id} className="relative flex-1">
                                <button
                                    type="button"
                                    onClick={() => setActivePage(item.id)}
                                    className="group relative w-full h-full outline-none"
                                    aria-label={item.id}
                                    {...hoverBind.getItemProps(idx)}
                                >
                                    {!isLast && (
                                        <span
                                            className="pointer-events-none absolute top-[-35%] right-0 h-[170%] w-px"
                                            style={{
                                                background: "var(--border)",
                                                transform: "skewX(-18deg)",
                                                opacity: 0.85,
                                            }}
                                        />
                                    )}

                                    <span className="relative flex h-full items-center justify-center">
                                        <span
                                            className={`
                        relative z-10 material-icons-outlined
                        transition-all duration-300 ease-out 
                        ${active ? "translate-y-0 text-2xl" : "translate-y-1 text-xl"}
                      `}
                                            style={{
                                                color: active ? "var(--accent-solid)" : "var(--text-muted)",
                                            }}
                                        >
                                            {item.icon}
                                        </span>
                                    </span>

                                    <span
                                        className={`
                      pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1
                      h-0.5 w-8 rounded-full
                      transition-all duration-300
                      ${active ? "opacity-100" : "opacity-0 group-hover:opacity-60"}
                    `}
                                        style={{ background: "var(--accent-solid)" }}
                                    />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
