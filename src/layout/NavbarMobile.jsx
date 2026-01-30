
export default function MobileNavbar({ activePage, setActivePage, className = "" }) { 

    const items = [
        { id: "about", icon: "business" },
        { id: "resume", icon: "description" },
        { id: "portfolio", icon: "work" },
        { id: "blog", icon: "article" },
        { id: "contact", icon: "help_outline" },
    ];

    const activeIndex = items.findIndex((i) => i.id === activePage);

    return (
        <nav className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden ${className}`}>
            <div className="relative h-32 px-4"> 

                {/* Base nav con notch */}
                <div
                    className="
                        absolute bottom-0 left-4 right-4
                        h-16 rounded-tl-md rounded-tr-md
                        bg-(--bg-main)
                        border border-[color:var(--border)]
                        shadow-xl z-10 transition-all duration-300
                    "
                    style={{
                        WebkitMaskImage: `
                        radial-gradient(
                            circle 34px at calc(${((activeIndex + 0.5) * 100) / items.length}% ) -10px,
                            transparent 98%,
                            black 100%
                        )
                        `,
                        maskImage: `
                        radial-gradient(
                            circle 38px at calc(${((activeIndex + 0.5) * 100) / items.length}% ) 5px,
                            transparent 98%,
                            black 100%
                        )
                        `,
                    }}
                />

                {/* Blurred active background */}
                <div className="absolute bottom-0 left-4 right-4 h-16 pointer-events-none z-0">
                    <ul className="flex justify-around items-end h-full">
                        {items.map((item) => {
                            const active = activePage === item.id;
                            return (
                                <li key={item.id} className="relative flex-1 flex justify-center">
                                    <span
                                        className={`
                                        absolute w-20 h-10 rounded-full
                                        bg-[color:var(--accent-solid)]
                                        blur-xl transition-all duration-500 ease-out
                                        ${active ? "opacity-80 scale-100 -top-2" : "opacity-0 scale-75 top-0"}
                                        `}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Icons + floating buttons */}
                <div className="absolute bottom-0 left-4 right-4 h-16 z-20">
                    <ul className="flex justify-around items-center h-full">
                        {items.map((item) => {
                            const active = activePage === item.id;

                            return (
                                <li key={item.id} className="relative flex-1 flex justify-center">
                                    <button
                                        onClick={() => setActivePage(item.id)}
                                        className="relative w-full h-full flex justify-center items-center"
                                        aria-label={item.id}
                                    >
                                        {/* Floating circle */}
                                        <span
                                            className={`
                                            absolute left-1/2 -translate-x-1/2
                                            w-14 h-14 rounded-full
                                            bg-[color:var(--accent-solid)]
                                            shadow-[var(--accent-glow)]
                                            transition-all duration-300 ease-out
                                            ${active ? "-top-11 opacity-100 scale-100" : "top-0 opacity-0 scale-75"}
                                        `}
                                        />

                                        {/* Icon */}
                                        <span
                                            className={`
                                                relative z-10 material-icons-outlined
                                                transition-all duration-300 ease-out
                                                ${active ? "-translate-y-7 text-(--text) text-2xl" : "text-xl text-(--text-muted)"}
                                            `}
                                        >
                                            {item.icon}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
 
            </div>
        </nav>
    );
}
