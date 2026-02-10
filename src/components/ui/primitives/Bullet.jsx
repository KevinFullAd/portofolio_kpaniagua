export default function Bullet({ title, desc }) {
    return (
        <div className="flex gap-3">
            <span
                className="mt-2 h-2 w-2 rounded-full"
                style={{ background: "rgb(var(--accent-rgb) / 0.65)" }}
                aria-hidden="true"
            />
            <div>
                <div className="text-(--text) font-semibold">{title}</div>
                <div className="text-(--text-muted) leading-relaxed">{desc}</div>
            </div>
        </div>
    );
}
