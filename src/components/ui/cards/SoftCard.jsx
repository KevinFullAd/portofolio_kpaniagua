export function SoftCard({ children, className = "" }) {
    return (
        <div
            className={`rounded-2xl border border-(--border) p-5 md:p-6 ${className}`}
            style={{ background: "rgb(255 255 255 / 0.02)" }}
        >
            {children}
        </div>
    );
}