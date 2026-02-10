
export default function TextArea({ label, name, value, onChange, placeholder, rows = 6, required = false }) {
    return (
        <label className="block space-y-2">
            <div className="text-sm font-semibold text-(--text)">{label}</div>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                required={required}
                className="w-full rounded-xl px-4 py-3 outline-none transition border border-(--border) resize-none"
                style={{ background: "rgb(255 255 255 / 0.03)", color: "var(--text)" }}
                onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgb(var(--accent-rgb) / 0.35)";
                    e.currentTarget.style.boxShadow = "0 0 0 4px rgb(var(--accent-rgb) / 0.10)";
                }}
                onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                }}
            />
        </label>
    );
}