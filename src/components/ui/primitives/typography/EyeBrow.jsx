export function Eyebrow({ children, className="", color="--text-muted" }) {
    return (
        <div className={`text-xs uppercase tracking-[0.18em] text-(${color}) ${className}`}>
            {children}
        </div>
    );
}