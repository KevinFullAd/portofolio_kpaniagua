export function Muted({ children, className = "" }) {
    return (
        <p className={`text-(--text-muted) leading-relaxed max-w-120 ${className}`}>
            {children}
        </p>
    );
}