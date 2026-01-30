// src/components/ui/ContactPill.jsx

export function ContactPill({ href, label, className = "" }) {
    return (
        <a
            href={href}
            className={`
                inline-flex items-center justify-center
                rounded-full px-4 py-2 text-(--text)
                border border-(--border)
                transition hover:brightness-110
                ${className}
            `}
        >   
            <span className="text-sm">{label}</span>
        </a>
    );
}
