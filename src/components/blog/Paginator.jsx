export default function Paginator({ page, pageCount, onPage }) {
    if (pageCount <= 1) return null;

    const clamp = (n) => Math.max(1, Math.min(pageCount, n));

    // Ventana simple: 1 ... p-1 p p+1 ... last (con límites)
    const numbers = [];
    const start = Math.max(1, page - 1);
    const end = Math.min(pageCount, page + 1);

    numbers.push(1);
    if (start > 2) numbers.push("…");
    for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== pageCount) numbers.push(i);
    }
    if (end < pageCount - 1) numbers.push("…");
    if (pageCount !== 1) numbers.push(pageCount);

    const Btn = ({ children, active, disabled, onClick }) => (
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

    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between pt-2">
            <Muted className="text-sm">
                Página <span className="text-(--text) font-semibold">{page}</span> /{" "}
                <span className="text-(--text) font-semibold">{pageCount}</span>
            </Muted>

            <div className="flex flex-wrap gap-2">
                <Btn disabled={page === 1} onClick={() => onPage(clamp(page - 1))}>
                    ←
                </Btn>

                {numbers.map((n, idx) =>
                    n === "…" ? (
                        <span
                            key={`dots-${idx}`}
                            className="px-2 py-2 text-sm"
                            style={{ color: "var(--text-muted)" }}
                        >
                            …
                        </span>
                    ) : (
                        <Btn key={n} active={n === page} onClick={() => onPage(n)}>
                            {n}
                        </Btn>
                    )
                )}

                <Btn disabled={page === pageCount} onClick={() => onPage(clamp(page + 1))}>
                    →
                </Btn>
            </div>
        </div>
    );
}