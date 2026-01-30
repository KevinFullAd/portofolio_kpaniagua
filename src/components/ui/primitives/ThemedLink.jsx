// src/components/ui/ThemedLink.jsx

export function ThemedLink({
    href,
    children,
    className = "",
    external = false,
}) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`
        inline-flex items-center gap-1
        font-medium
        transition-colors duration-200
        ${className}
      `}
            style={{
                color: "var(--accent-solid)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgb(var(--accent-rgb) / 0.85)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--accent-solid)";
            }}
        >
            {children}

            {external && (
                <span
                    className="material-icons-outlined text-sm"
                    aria-hidden="true"
                >
                    open_in_new
                </span>
            )}
        </a>
    );
}
