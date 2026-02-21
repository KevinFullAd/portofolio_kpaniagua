// src/components/ui/ContactPill.jsx
import { Link } from "react-router-dom";
export function ContactPill({ href, label, className = "" }) {
    return (
        <Link
            to={href}
            className={`
                inline-flex items-center justify-center
                rounded-full px-4 py-2 text-(--text)
                border border-(--border)
                transition hover:brightness-110
                ${className}
            `}
        >   
            <span>{label}</span>
        </Link>
    );
}
