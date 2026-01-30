export function Chip({ children }) {
    return (
        <span
            className="
        inline-flex items-center gap-2
        rounded-full px-3 py-1
        text-[.72rem] uppercase tracking-wide
        border border-(--border)
      "
            style={{ background: "rgb(255 255 255 / 0.04)" }}
        >
            <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "var(--accent-solid)" }}
            />
            <span className="text-(--text-muted)">{children}</span>
        </span>
    );
}