import { useMemo, useState, useEffect } from "react";

export function useBlogFilters(items) {
    const categories = useMemo(
        () => ["Todas", ...Array.from(new Set(items.map((i) => i.category)))],
        [items]
    );

    const projects = useMemo(
        () => ["Todos", ...Array.from(new Set(items.map((i) => i.project)))],
        [items]
    );

    const types = useMemo(
        () => ["Todos", ...Array.from(new Set(items.map((i) => i.type)))],
        [items]
    );

    const [q, setQ] = useState("");
    const [cat, setCat] = useState("Todas");
    const [proj, setProj] = useState("Todos");
    const [typ, setTyp] = useState("Todos");
    const [order, setOrder] = useState("desc");
    const [from, setFrom] = useState("");

    const [openId, setOpenId] = useState(null);
    const [page, setPage] = useState(1);
    const pageSize = 6;

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();

        return items
            .filter((i) => (cat === "Todas" ? true : i.category === cat))
            .filter((i) => (proj === "Todos" ? true : i.project === proj))
            .filter((i) => (typ === "Todos" ? true : i.type === typ))
            .filter((i) => (from ? i.date >= from : true))
            .filter((i) => {
                if (!query) return true;
                const hay = `${i.title} ${i.summary} ${i.tags.join(" ")}`.toLowerCase();
                return hay.includes(query);
            })
            .sort((a, b) =>
                order === "desc"
                    ? b.date.localeCompare(a.date)
                    : a.date.localeCompare(b.date)
            );
    }, [items, q, cat, proj, typ, order, from]);

    const pageCount = useMemo(
        () => Math.max(1, Math.ceil(filtered.length / pageSize)),
        [filtered.length]
    );

    useEffect(() => {
        setPage(1);
        setOpenId(null);
    }, [q, cat, proj, typ, order, from]);

    const paged = useMemo(() => {
        const start = (page - 1) * pageSize;
        return filtered.slice(start, start + pageSize);
    }, [filtered, page]);

    const headlines = useMemo(() => filtered.slice(0, 6), [filtered]);

    const openFromHeadline = (id) => {
        const idx = filtered.findIndex((x) => x.id === id);
        if (idx < 0) return;

        const targetPage = Math.floor(idx / pageSize) + 1;
        setPage(targetPage);
        setOpenId(id);

        setTimeout(() => {
            const el = document.getElementById("news-feed");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    const activeFilterCount = [
        q.trim(),
        cat !== "Todas",
        proj !== "Todos",
        typ !== "Todos",
        from,
        order !== "desc",
    ].filter(Boolean).length;

    const clearFilters = () => {
        setQ("");
        setCat("Todas");
        setProj("Todos");
        setTyp("Todos");
        setOrder("desc");
        setFrom("");
        setOpenId(null);
        setPage(1);
    };

    return {
        q, setQ,
        cat, setCat,
        proj, setProj,
        typ, setTyp,
        order, setOrder,
        from, setFrom,
        openId, setOpenId,
        page, setPage,
        pageCount,
        paged,
        headlines,
        categories,
        projects,
        types,
        activeFilterCount,
        clearFilters,
        openFromHeadline,
    };
}
