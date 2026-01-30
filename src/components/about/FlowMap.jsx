export function FlowMap({ items = [] }) {
    return (
        <div className="flex flex-col gap-3">
            {items.map((it, idx) => (
                <div key={`${it.title}-${idx}`} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                        <span
                            className="grid place-items-center w-8 h-8 rounded-full text-sm font-semibold"
                            style={{
                                background: "var(--accent-soft)",
                                color: "var(--accent-solid)",
                            }}
                        >
                            {idx + 1}
                        </span>
                        {idx !== items.length - 1 ? (
                            <span
                                className="mt-2 w-px flex-1"
                                style={{ background: "var(--border)" }}
                            />
                        ) : null}
                    </div>

                    <div className="flex-1">
                        <div className="text-(--text) font-semibold">{it.title}</div>
                        <div className="text-(--text-muted) leading-relaxed">{it.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}