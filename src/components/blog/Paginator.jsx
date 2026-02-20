import { useEffect } from "react";
import { Muted } from "../ui/primitives/typography/Muted";
import Btn from "../ui/primitives/Btn";
export default function Paginator({ page = 1, pageCount = 0, onPage }) {

    useEffect(() => {
        if (pageCount > 0 && page > pageCount) setPage(pageCount);
        if (pageCount === 0) setPage(1);
    }, [pageCount]);

    // Estado vacío real: no hay páginas porque no hay resultados
    if (pageCount === 0) {
        return (
            <div className="pt-2">
                <Muted className="text-sm">Sin resultados</Muted>
            </div>
        );
    }

    // Con 1 página, opcional: mostrar "Página 1/1" o esconder
    if (pageCount === 1) {
        return (
            <div className="pt-2">
                <Muted className="text-sm">
                    Página <span className="text-(--text) font-semibold">1</span> /{" "}
                    <span className="text-(--text) font-semibold">1</span>
                </Muted>
            </div>
        );
        // si hay que ocultarlo: return null;
    }

    const clamp = (n) => Math.max(1, Math.min(pageCount, n));
    const safePage = clamp(Number(page) || 1);

    const numbers = [];
    const start = Math.max(1, safePage - 1);
    const end = Math.min(pageCount, safePage + 1);

    numbers.push(1);
    if (start > 2) numbers.push("…");
    for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== pageCount) numbers.push(i);
    }
    if (end < pageCount - 1) numbers.push("…");
    numbers.push(pageCount);


    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between pt-2">
            <Muted className="text-sm">
                Página <span className="text-(--text) font-semibold">{safePage}</span> /{" "}
                <span className="text-(--text) font-semibold">{pageCount}</span>
            </Muted>

            <div className="flex flex-wrap gap-2">
                <Btn disabled={safePage === 1} onClick={() => onPage(clamp(safePage - 1))}>←</Btn>

                {numbers.map((n, idx) =>
                    n === "…" ? (
                        <span key={`dots-${idx}`} className="px-2 py-2 text-sm" style={{ color: "var(--text-muted)" }}>
                            …
                        </span>
                    ) : (
                        <Btn key={n} active={n === safePage} onClick={() => onPage(n)}>
                            {n}
                        </Btn>
                    )
                )}

                <Btn disabled={safePage === pageCount} onClick={() => onPage(clamp(safePage + 1))}>→</Btn>
            </div>
        </div>
    );
}
