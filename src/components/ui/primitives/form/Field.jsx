export default function Field({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    required = false,
}) {
    return (
        <label className="block space-y-2">
            <div className="text-sm font-semibold text-(--text)">{label}</div>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="
                w-full rounded-xl px-4 py-3
                border border-(--border)
                bg-white/5 text-(--text) placeholder:text-(--text-muted)
                outline-none transition
                focus-visible:border-[rgb(var(--accent-rgb)/0.35)]
                focus-visible:ring-4 focus-visible:ring-[rgb(var(--accent-rgb)/0.10)]
                "
            />
        </label>
    );
}
