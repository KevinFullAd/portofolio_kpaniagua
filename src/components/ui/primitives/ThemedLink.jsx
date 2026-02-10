// src/components/ui/ThemedLink.jsx
import { getLinkBehavior } from "../../../lib/linking";

export function ThemedLink({ href, children, className = "", external = false }) {
    const behavior = getLinkBehavior(href);
    const openExternal = external || behavior.external;

    return (
        <a
            href={href}
            target={openExternal ? "_blank" : undefined}
            rel={openExternal ? "noopener noreferrer" : undefined}
            className={`
                inline-flex items-center gap-1
                font-medium
                transition-colors duration-200 
                ${className}
            `}
            style={{ color: "var(--text)" }}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent-solid)";
            }}
        >
            {children}

            {openExternal && (
                <span className="material-icons-outlined text-sm" aria-hidden="true">
                    open_in_new
                </span>
            )}
        </a>
    );
}
