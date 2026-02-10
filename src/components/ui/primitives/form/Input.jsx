export default function Input({ value, onChange, label, placeholder, className = "" }) {
    return (
        <label className={`flex flex-col gap-1 ${className}`}>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {label}
            </span>
            <div className="flex items-center gap-2 rounded-full border border-(--border) px-4 py-2 w-full">
                <span
                    className="material-icons-outlined text-sm"
                    aria-hidden="true"
                    style={{ color: "var(--text-muted)" }}
                >
                    search
                </span>
                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none text-sm"
                    style={{ color: "var(--text)" }}
                />
            </div>
        </label>
    );
}