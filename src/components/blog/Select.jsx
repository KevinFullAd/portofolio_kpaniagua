// src/components/blog/Select.jsx
export default function Select({ value, onChange, label, children, className = "" }) {
    return (
        <label className={`flex flex-col gap-1 ${className}`}>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {label}
            </span>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="rounded-full px-4 py-2 text-sm border border-(--border) outline-none w-full"
                style={{
                    background: "rgb(255 255 255 / 0.02)",
                    color: "var(--text)",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                }}
            >
                {children}
            </select>
        </label>
    );
}