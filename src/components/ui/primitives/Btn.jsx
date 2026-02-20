export default function Btn({ children, active, disabled, onClick }) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className="rounded-full px-4 py-2 text-sm border border-(--border) transition disabled:opacity-50"
            style={{
                background: active ? "rgb(var(--accent-rgb) / 0.10)" : "rgb(255 255 255 / 0.02)",
                color: active ? "var(--accent-solid)" : "var(--text)",
            }}
        >
            {children}
        </button>
    );
}