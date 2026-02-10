// src/components/blog/TagPill.jsx
export default function TagPill({ children }) {
    return (
        <span
            className="rounded-full px-3 py-1 text-xs border border-(--border)"
            style={{
                background: "rgb(255 255 255 / 0.02)",
                color: "var(--text-muted)",
            }}
        >
            {children}
        </span>
    );
}
