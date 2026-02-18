// src/components/blog/FilterBar.jsx
import React, { useMemo, useState, useEffect } from "react";
import { format } from "date-fns";

import { SoftCard } from "../ui/cards/SoftCard";
import { Input } from "../ui/shadcn/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/shadcn/popover";
import { Calendar } from "../ui/shadcn/calendar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/shadcn/select";

function toISODate(d) {
    if (!d) return "";
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
}

function fromISODate(s) {
    if (!s) return undefined;
    const d = new Date(s);
    return Number.isNaN(d.getTime()) ? undefined : d;
}

export default function FilterBar({
    q,
    setQ,
    cat,
    setCat,
    proj,
    setProj,
    typ,
    setTyp,
    order,
    setOrder,
    from,
    setFrom,
    categories,
    projects,
    types,
}) {
    const [open, setOpen] = useState(false);

    const selectedDate = fromISODate(from);

    const resetDefaults = useMemo(() => {
        const firstCat = categories?.[0] ?? "";
        const firstProj = projects?.[0] ?? "Todos";
        const firstTyp = types?.[0] ?? "Todos";
        return { firstCat, firstProj, firstTyp };
    }, [categories, projects, types]);

    const hasActive =
        (q?.trim?.() ?? "") !== "" ||
        (from ?? "") !== "" ||
        cat !== resetDefaults.firstCat ||
        proj !== resetDefaults.firstProj ||
        typ !== resetDefaults.firstTyp ||
        order !== "desc";

    const resetAll = () => {
        setQ("");
        setCat(resetDefaults.firstCat);
        setProj(resetDefaults.firstProj);
        setTyp(resetDefaults.firstTyp);
        setOrder("desc");
        setFrom("");
    };

    useEffect(() => {
        if (categories?.length && !categories.includes(cat)) {
            setCat(categories[0]);
        }
    }, [categories]);


    return (
        <SoftCard className="p-4 md:p-5">
            {/* Root */}
            <div className="flex flex-col w-full gap-3 min-w-0">
                {/* Row */}
                <div className="flex items-center flex-wrap gap-3 w-full min-w-0">
                    {/* Search */}
                    <div className="flex-1 min-w-0">
                        <Input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Buscar…"
                            className="h-11 w-full min-w-0"
                        />
                    </div>

                    {/* Mobile/Tablet: toggle */}
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="
                        xl:hidden
                        h-11 shrink-0 rounded-full px-4 text-sm font-semibold
                        border border-(--border)
                        transition hover:brightness-110 active:brightness-105
                        "
                        style={{
                            background: hasActive
                                ? "rgb(var(--accent-rgb) / 0.12)"
                                : "rgb(255 255 255 / 0.04)",
                            color: hasActive ? "var(--accent-solid)" : "var(--text)",
                        }}
                    >
                        <span className="inline-flex items-center gap-2">
                            <span className="material-icons-outlined text-[18px]">tune</span>
                            Filtros
                            <span className="text-(--text-muted)">{open ? "▴" : "▾"}</span>
                        </span>
                    </button>

                    {/* Desktop XL+: show filters inline (wrap-safe) */}
                    <div className="hidden xl:flex flex-wrap items-center gap-3 min-w-0">
                        <div className="w-[190px] max-w-full">
                            <Select value={cat} onValueChange={setCat}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Categoría" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((c) => (
                                        <SelectItem key={c} value={c}>
                                            {c}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-[190px] max-w-full">
                            <Select value={proj} onValueChange={setProj}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Proyecto" />
                                </SelectTrigger>
                                <SelectContent>
                                    {projects.map((p) => (
                                        <SelectItem key={p} value={p}>
                                            {p}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-[160px] max-w-full">
                            <Select value={typ} onValueChange={setTyp}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Tipo" />
                                </SelectTrigger>
                                <SelectContent>
                                    {types.map((t) => (
                                        <SelectItem key={t} value={t}>
                                            {t}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-[150px] max-w-full">
                            <Select value={order} onValueChange={setOrder}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Orden" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="desc">Más nuevo</SelectItem>
                                    <SelectItem value="asc">Más viejo</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-[190px] max-w-full">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button
                                        type="button"
                                        className="
                                        h-11 w-full rounded-full px-4 text-left text-sm
                                        border border-(--border) bg-white/5 text-(--text)
                                        outline-none transition
                                        focus-visible:border-[rgb(var(--accent-rgb)/0.35)]
                                        focus-visible:ring-4 focus-visible:ring-[rgb(var(--accent-rgb)/0.10)]
                                        "
                                    >
                                        {selectedDate
                                            ? format(selectedDate, "dd/MM/yyyy")
                                            : "Desde (fecha)"}
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent className="p-2">
                                    <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={(d) => setFrom(d ? toISODate(d) : "")}
                                        initialFocus
                                    />
                                    <div className="mt-2 flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => setFrom("")}
                                            className="rounded-full px-3 py-1 text-sm border border-(--border) bg-white/5 text-(--text-muted) hover:brightness-110"
                                        >
                                            Limpiar fecha
                                        </button>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>

                        <button
                            type="button"
                            onClick={resetAll}
                            className="
                h-11 rounded-full px-4 text-sm font-semibold
                border border-(--border)
                transition hover:brightness-110 active:brightness-105
              "
                            style={{
                                background: "rgb(var(--accent-rgb) / 0.10)",
                                color: "var(--accent-solid)",
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Mobile/Tablet: collapsible panel */}
                <div
                    className={`xl:hidden transition-all ${open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden min-w-0`}
                >
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0">
                        <Select value={cat} onValueChange={setCat}>
                            <SelectTrigger>
                                <SelectValue placeholder="Categoría" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((c) => (
                                    <SelectItem key={c} value={c}>
                                        {c}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={proj} onValueChange={setProj}>
                            <SelectTrigger>
                                <SelectValue placeholder="Proyecto" />
                            </SelectTrigger>
                            <SelectContent>
                                {projects.map((p) => (
                                    <SelectItem key={p} value={p}>
                                        {p}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={typ} onValueChange={setTyp}>
                            <SelectTrigger>
                                <SelectValue placeholder="Tipo" />
                            </SelectTrigger>
                            <SelectContent>
                                {types.map((t) => (
                                    <SelectItem key={t} value={t}>
                                        {t}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={order} onValueChange={setOrder}>
                            <SelectTrigger>
                                <SelectValue placeholder="Orden" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="desc">Más nuevo</SelectItem>
                                <SelectItem value="asc">Más viejo</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="sm:col-span-2 min-w-0">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button
                                        type="button"
                                        className="
                      h-11 w-full rounded-full px-4 text-left text-sm
                      border border-(--border) bg-white/5 text-(--text)
                      outline-none transition
                      focus-visible:border-[rgb(var(--accent-rgb)/0.35)]
                      focus-visible:ring-4 focus-visible:ring-[rgb(var(--accent-rgb)/0.10)]
                    "
                                    >
                                        {selectedDate
                                            ? format(selectedDate, "dd/MM/yyyy")
                                            : "Desde (fecha)"}
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent className="p-2">
                                    <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={(d) => setFrom(d ? toISODate(d) : "")}
                                        initialFocus
                                    />
                                    <div className="mt-2 flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => setFrom("")}
                                            className="rounded-full px-3 py-1 text-sm border border-(--border) bg-white/5 text-(--text-muted) hover:brightness-110"
                                        >
                                            Limpiar fecha
                                        </button>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="sm:col-span-2 flex gap-3 min-w-0">
                            <button
                                type="button"
                                onClick={resetAll}
                                className="
                  h-11 flex-1 min-w-0 rounded-full px-4 text-sm font-semibold
                  border border-(--border)
                  transition hover:brightness-110 active:brightness-105
                "
                                style={{
                                    background: "rgb(var(--accent-rgb) / 0.10)",
                                    color: "var(--accent-solid)",
                                }}
                            >
                                Reset
                            </button>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="
                  h-11 flex-1 min-w-0 rounded-full px-4 text-sm font-semibold
                  border border-(--border) bg-white/5 text-(--text)
                  transition hover:brightness-110 active:brightness-105
                "
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </SoftCard>
    );
}
