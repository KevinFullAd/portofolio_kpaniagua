export function AccentCard({ title, children }) {
    return (
        <div
            className="rounded-2xl border border-(--border) p-5 md:p-6"
            style={{
                background: "rgb(var(--accent-rgb) / 0.08)",
                boxShadow: "var(--shadow)",
            }}
        >
            <div
                className="text-xs uppercase tracking-[0.18em]"
                style={{ color: "var(--accent-solid)" }}
            >
                {title}
            </div>
            <div className="mt-2 text-(--text) leading-relaxed">{children}</div>
        </div>
    );
}