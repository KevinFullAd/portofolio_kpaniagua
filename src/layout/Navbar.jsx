export default function Navbar({ activePage, setActivePage, className = "" }) {

    const items = [
        { id: "about", icon: "business" },
        { id: "resume", icon: "description" },
        { id: "portfolio", icon: "work" },
        { id: "blog", icon: "article" },
        { id: "contact", icon: "help_outline" },
    ];

    const activeIndex = items.findIndex((i) => i.id === activePage);

    return (
        <nav className={`
        min-w-100  max-w-[40%] 
        absolute right-0
        bg-(--bg-card) rounded-bl-xl 
        border-b border-l border-(--border) 
        min-h-14
        hidden lg:block
        ${className}`}>
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
        </nav>
    )
}
