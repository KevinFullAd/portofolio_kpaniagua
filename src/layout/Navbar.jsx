
export default function Navbar({ activePage, setActivePage, className = "" }) {
    const items = [
        { id: "about", icon: "business" },
        { id: "resume", icon: "description" },
        { id: "portfolio", icon: "work" },
        { id: "blog", icon: "article" },
        { id: "contact", icon: "help_outline" },
    ];

    const activeIndex = Math.max(0, items.findIndex((i) => i.id === activePage));
    const n = items.length;

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
                rounded-bl-xl
                border-b border-l border-(--border)
                bg-(--bg-card)
                " 
            >
                {/* ACTIVE BG (panel inclinado corregido) */}
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div
                        className="absolute inset-y-0"
                        style={{
                            left: activeIndex === 0
                            ? `calc(${activeIndex} * (100% / ${n}) - 12px)`
                            : `calc(${activeIndex} * (100% / ${n}) `,
                            width: activeIndex===0
                            ? `calc(100% / ${n} + 12px)`
                            : `calc(100% / ${n} )`,
                            transform: "skewX(-18deg)",
                            transformOrigin: "center",
                            background: "rgb(var(--accent-rgb) / 0.14)",
                        }}
                    />
                    <div
                        className="absolute inset-y-0"
                        style={{
                            left: `calc(${activeIndex} * (100% / ${n}) - 12px)`,
                            width: `calc(100% / ${n} + 24px)`,
                            transform: "skewX(-18deg)",
                            transformOrigin: "center", 
                            opacity: 0.95,
                        }}
                    />
                </div>


                {/* BLURRED ACTIVE BACKGROUND (tipo mobile) */}
                <div className="pointer-events-none absolute inset-0 z-1">
                    <div
                        className="absolute top-1/2 -translate-y-1/2 h-10 w-24 rounded-full blur-2xl transition-all duration-500 ease-out"
                        style={{
                            left: `calc(${activeIndex} * (100% / ${n}) + (100% / ${n}) / 2)`,
                            transform: "translate(-50%, -50%)",
                            background: "var(--accent-solid)",
                            opacity: 0.22,
                        }}
                    />
                </div>

                {/* SLATS */}
                <ul className="relative z-10 flex h-full">
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
                                >
                                    {/* Hover panel (inclinado) */}
                                    <span
                                        className={`
                                        pointer-events-none absolute inset-y-0 
                                        
                                        left-0 right-0
                                        skew-x-18deg
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity duration-200
                                        `}
                                        style={{ background: "rgb(var(--accent-rgb) / 0.08)" }}
                                    />

                                    {/* Divisor diagonal */}
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

                                    {/* Icono (activo en accent) */}
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

                                    {/* Indicador sutil abajo */}
                                    <span
                                        className={`
                                        pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1
                                        h-0.5 w-8 rounded-full
                                        transition-all duration-300
                                        ${active ? "opacity-100" : "opacity-0 group-hover:opacity-60"}
                                        `}
                                        style={{
                                            background: "var(--accent-solid)",
                                            
                                        }}
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
