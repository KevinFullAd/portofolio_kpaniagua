export function AccentCard({ title, children }) {
    return (
        <div
            className="rounded-2xl border border-(--border) bg-(--accent-solid)/10 shadow-md shadow-(--shadow) p-5 md:p-6"
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