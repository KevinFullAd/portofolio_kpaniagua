export default function Navbar({ activePage, setActivePage, className }) {
    const items = [
        { id: 'about', label: 'About' },
        { id: 'resume', label: 'Resume' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'blog', label: 'Blog' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <nav className={`w-full bg-slate-900/80 backdrop-blur border-b border-white/10 sticky bottom-0 z-30 ${className}`}>
            <ul className="flex gap-2 px-6 py-4 justify-center md:justify-start">
                {items.map(item => {
                    const active = activePage === item.id

                    return (
                        <li key={item.id}>
                            <button
                                onClick={() => setActivePage(item.id)}
                                className={`
                                        px-4 py-2 rounded-full text-sm font-medium transition
                                        ${active
                                        ? 'bg-cyan-400 text-slate-900'
                                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                                    }
                `}
                            >
                                {item.label}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
