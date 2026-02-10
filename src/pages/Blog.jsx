// src/pages/Blog.jsx 

import React, { useMemo, useState, useEffect } from "react";
import { PageContainer } from "../components/ui/primitives/PageContainer";
import { Eyebrow } from "../components/about/Eyebrow";
import { H2 } from "../components/ui/primitives/typography/H2";
import { Lead } from "../components/ui/primitives/typography/Lead";
import { Muted } from "../components/ui/primitives/typography/Muted";
import { Chip } from "../components/ui/primitives/Chip";
import { SoftCard } from "../components/ui/cards/SoftCard";
import { Divider } from "../components/ui/primitives/Divider";
import NewsAccordionItem from "../components/blog/NewsAccordionItem";
import Paginator from "../components/blog/Paginator";
import Select from "../components/blog/Select";
import Input from "../components/ui/primitives/form/Input";
import HeadlineItem from "../components/blog/HeadlineItem";

export default function Blog() {
    const items = useMemo(
        () => [
            {
                id: "n-001",
                date: "2026-02-10",
                category: "Release",
                project: "Open Source (Nest)",
                type: "Backend",
                title: "Repo público: base Nest + config + validation lista",
                summary:
                    "Arranqué el repo open source: envs validadas, estructura de módulos y scripts dev/build. Próximo: logging + errores.",
                tags: ["nest", "config", "validation", "dx"],
                details: {
                    what: "Inicialicé el repo con estructura modular, env loader, validation centralizada y scripts de ejecución.",
                    why: "Baseline estable para que contributors entren sin fricción y con reglas claras desde el día 1.",
                    next: "Agregar logging estructurado, manejo de errores consistente y un ejemplo de módulo (users).",
                },
                links: [{ label: "Repo", href: "https://github.com/KevinFullAd" }],
            },
            {
                id: "n-002",
                date: "2026-02-08",
                category: "Changelog",
                project: "Open Source (Nest)",
                type: "Backend",
                title: "DB layer: decisión tomada y esquema inicial",
                summary: "Definí persistencia y dejé listo el flujo de migraciones para no romper entornos.",
                tags: ["db", "migrations", "schema"],
                details: {
                    what: "Agregué el layer de persistencia y un esquema mínimo con migraciones versionadas.",
                    why: "Sin migraciones controladas, el proyecto se vuelve frágil y difícil de colaborar.",
                    next: "Endpoints CRUD básicos con validación + tests e2e mínimos.",
                },
                links: [],
            },
            {
                id: "n-003",
                date: "2026-02-06",
                category: "Nota corta",
                project: "Infra",
                type: "DevOps",
                title: "CI mínimo: lint + tests + build en cada PR",
                summary: "Workflow liviano para feedback rápido y evitar merges que rompan el build.",
                tags: ["ci", "github-actions", "quality"],
                details: {
                    what: "Agregué un workflow que corre lint, tests y build en cada PR.",
                    why: "Ahorra tiempo en revisión y baja el riesgo de regresiones.",
                    next: "Cache de dependencias + matrix por Node version si aplica.",
                },
                links: [],
            },
            {
                id: "n-004",
                date: "2026-02-03",
                category: "Decisión",
                project: "Open Source (Nest)",
                type: "Backend",
                title: "Auth MVP: enfoque definido con límites claros",
                summary: "Alcance mínimo para v0.1 con camino de evolución sin reescribir todo.",
                tags: ["auth", "mvp", "roadmap"],
                details: {
                    what: "Definí el approach de auth para el MVP y documenté restricciones.",
                    why: "Evita scope creep y permite iterar sin bloquear features core.",
                    next: "Implementar users + roles + guards con tests de flujo.",
                },
                links: [],
            },
            {
                id: "n-005",
                date: "2026-01-29",
                category: "Bugfix",
                project: "Frontend",
                type: "UI",
                title: "Links externos vs mailto: comportamiento unificado",
                summary: "http/https abre en nueva pestaña; mailto/tel se mantiene nativo.",
                tags: ["react", "ux", "components"],
                details: {
                    what: "Centralicé la lógica de enlace (externo/mail/tel) para ActionRow y ThemedLink.",
                    why: "Reduce bugs de navegación y evita repetir reglas en cada componente.",
                    next: "Aplicar la utilidad a cualquier otro componente con href.",
                },
                links: [],
            },
            {
                id: "n-006",
                date: "2026-01-22",
                category: "Nota corta",
                project: "Open Source (Nest)",
                type: "Backend",
                title: "Estructura del repo: módulos por dominio y límites",
                summary: "Capas claras, dependencias controladas y naming consistente para escalar sin deuda.",
                tags: ["architecture", "modules", "boundaries"],
                details: {
                    what: "Definí límites entre módulos y convenciones de imports/exports.",
                    why: "Cuando crece el repo, la deuda aparece primero en la estructura.",
                    next: "Guidelines para contributors + ejemplos.",
                },
                links: [],
            },
        ],
        []
    );

    const categories = useMemo(() => ["Todas", ...Array.from(new Set(items.map((i) => i.category)))], [items]);
    const projects = useMemo(() => ["Todos", ...Array.from(new Set(items.map((i) => i.project)))], [items]);
    const types = useMemo(() => ["Todos", ...Array.from(new Set(items.map((i) => i.type)))], [items]);

    const [q, setQ] = useState("");
    const [cat, setCat] = useState("Todas");
    const [proj, setProj] = useState("Todos");
    const [typ, setTyp] = useState("Todos");
    const [order, setOrder] = useState("desc");
    const [from, setFrom] = useState("");

    const [openId, setOpenId] = useState(null);
    const [page, setPage] = useState(1);
    const pageSize = 6;

    // filtros colapsables < xl
    const [filtersOpen, setFiltersOpen] = useState(false);

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
            .sort((a, b) => (order === "desc" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));
    }, [items, q, cat, proj, typ, order, from]);

    const pageCount = useMemo(() => Math.max(1, Math.ceil(filtered.length / pageSize)), [filtered.length]);

    useEffect(() => {
        setPage(1);
        setOpenId(null);
    }, [q, cat, proj, typ, order, from]);

    // cerrar panel en <xl cuando cambia filtros
    useEffect(() => {
        setFiltersOpen(false);
    }, [cat, proj, typ, order, from]);

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

        window.setTimeout(() => {
            const el = document.getElementById("news-feed");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    const activeFilterCount = useMemo(() => {
        let n = 0;
        if (q.trim()) n += 1;
        if (cat !== "Todas") n += 1;
        if (proj !== "Todos") n += 1;
        if (typ !== "Todos") n += 1;
        if (from) n += 1;
        if (order !== "desc") n += 1;
        return n;
    }, [q, cat, proj, typ, from, order]);

    const clearFilters = () => {
        setQ("");
        setCat("Todas");
        setProj("Todos");
        setTyp("Todos");
        setOrder("desc");
        setFrom("");
        setOpenId(null);
        setPage(1);
        setFiltersOpen(false);
    };

    return (
        <PageContainer className="flex flex-col gap-6">
            <header className="space-y-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2">
                        <Eyebrow>Blog</Eyebrow>
                        <H2>Noticias cortas</H2>
                        <Lead className="max-w-2xl">
                            Cambios, decisiones y avances de proyectos. Formato breve, filtrable y con paginación.
                        </Lead>
                    </div>

                    <div className="flex flex-wrap items-end gap-2">
                        <Chip>Release</Chip>
                        <Chip>Bugfix</Chip>
                        <Chip>Decisión</Chip>
                        <Chip>Changelog</Chip>
                    </div>
                </div>

                {/* Toggle filtros (<xl) */}
                <div className="flex items-center justify-between xl:hidden">
                    <div className="text-xs font-semibold tracking-wide text-(--text-muted)">
                        FILTROS
                        {activeFilterCount > 0 ? (
                            <span className="ml-2 text-xs" style={{ color: "var(--accent-solid)" }}>
                                · {activeFilterCount} activos
                            </span>
                        ) : null}
                    </div>

                    <div className="flex items-center gap-2">
                        {activeFilterCount > 0 ? (
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="rounded-full px-4 py-2 text-sm border border-(--border) transition hover:brightness-110"
                                style={{
                                    background: "rgb(255 255 255 / 0.02)",
                                    color: "var(--text)",
                                }}
                            >
                                Limpiar
                            </button>
                        ) : null}

                        <button
                            type="button"
                            onClick={() => setFiltersOpen((v) => !v)}
                            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm border border-(--border) transition hover:brightness-110"
                            style={{
                                background: filtersOpen
                                    ? "rgb(var(--accent-rgb) / 0.10)"
                                    : "rgb(255 255 255 / 0.02)",
                                color: filtersOpen ? "var(--accent-solid)" : "var(--text)",
                            }}
                            aria-expanded={filtersOpen}
                            aria-controls="blog-filters"
                        >
                            <span className="material-icons-outlined text-sm" aria-hidden="true">
                                tune
                            </span>
                            Filtros
                        </button>
                    </div>
                </div>

                {/* Filtros (>=xl siempre visibles, <xl colapsables) */}
                <div id="blog-filters" className={`${filtersOpen ? "block" : "hidden"} xl:block`}>
                    <SoftCard className="p-4">
                        {/* Layout: flex wrap con anchos fijos => sin truncar ni “mini inputs” */}
                        <div className="flex flex-wrap gap-3 items-end">
                            <Input
                                label="Buscar"
                                value={q}
                                onChange={setQ}
                                placeholder="Título, tags, resumen…"
                                className="w-full sm:w-[360px] lg:w-[420px]"
                            />

                            <Select
                                label="Categoría"
                                value={cat}
                                onChange={setCat}
                                className="w-[180px]"
                            >
                                {categories.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </Select>

                            <Select
                                label="Proyecto"
                                value={proj}
                                onChange={setProj}
                                className="w-[220px]"
                            >
                                {projects.map((p) => (
                                    <option key={p} value={p}>
                                        {p}
                                    </option>
                                ))}
                            </Select>

                            <Select
                                label="Tipo"
                                value={typ}
                                onChange={setTyp}
                                className="w-[160px]"
                            >
                                {types.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </Select>

                            <label className="flex flex-col gap-1 w-[180px]">
                                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                                    Desde
                                </span>
                                <input
                                    type="date"
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                    className="rounded-full px-4 py-2 text-sm border border-(--border) outline-none w-full"
                                    style={{
                                        background: "rgb(255 255 255 / 0.02)",
                                        color: "var(--text)",
                                    }}
                                />
                            </label>

                            <Select
                                label="Orden"
                                value={order}
                                onChange={setOrder}
                                className="w-[160px]"
                            >
                                <option value="desc">Más nuevo</option>
                                <option value="asc">Más viejo</option>
                            </Select>

                            {/* Acciones (solo cuando está abierto en <xl) */}
                            <div className="w-full xl:hidden">
                                <Divider className="my-3 opacity-60" />
                                <div className="flex flex-wrap gap-2 justify-end">
                                    {activeFilterCount > 0 ? (
                                        <button
                                            type="button"
                                            onClick={clearFilters}
                                            className="rounded-full px-4 py-2 text-sm border border-(--border) transition hover:brightness-110"
                                            style={{
                                                background: "rgb(255 255 255 / 0.02)",
                                                color: "var(--text)",
                                            }}
                                        >
                                            Limpiar
                                        </button>
                                    ) : null}

                                    <button
                                        type="button"
                                        onClick={() => setFiltersOpen(false)}
                                        className="rounded-full px-4 py-2 text-sm border border-(--border) transition hover:brightness-110"
                                        style={{
                                            background: "rgb(var(--accent-rgb) / 0.10)",
                                            color: "var(--accent-solid)",
                                        }}
                                    >
                                        Aplicar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SoftCard>
                </div>
            </header>

            <div className="grid gap-6 xl:grid-cols-[2fr_1fr] items-start">
                {/* Feed */}
                <div className="space-y-4" id="news-feed">
                    <div className="flex items-center gap-3">
                        <div className="text-xs font-semibold tracking-wide" style={{ color: "var(--text-muted)" }}>
                            FEED
                        </div>
                        <div className="h-px flex-1" style={{ background: "rgb(255 255 255 / 0.08)" }} />
                    </div>

                    <div className="grid gap-3">
                        {paged.length === 0 ? (
                            <SoftCard className="p-4">
                                <Muted>No hay resultados con esos filtros.</Muted>
                            </SoftCard>
                        ) : (
                            paged.map((i) => (
                                <NewsAccordionItem
                                    key={i.id}
                                    item={i}
                                    open={openId === i.id}
                                    onToggle={() => setOpenId((cur) => (cur === i.id ? null : i.id))}
                                />
                            ))
                        )}
                    </div>

                    <SoftCard className="p-4">
                        <Paginator page={page} pageCount={pageCount} onPage={setPage} />
                    </SoftCard>
                </div>

                {/* Titulares */}
                <div className="space-y-4 order-2 xl:order-none">
                    <SoftCard className="p-5">
                        <div className="flex items-center justify-between">
                            <div className="text-(--text) font-semibold">Titulares</div>
                            <span
                                className="material-icons-outlined text-sm"
                                aria-hidden="true"
                                style={{ color: "var(--text-muted)" }}
                            >
                                bolt
                            </span>
                        </div>

                        <Muted className="mt-1 text-sm">Tocá un titular para abrirlo en el feed.</Muted>

                        <Divider className="my-4 opacity-60" />

                        <div className="divide-y divide-[rgb(255_255_255_/_0.08)]">
                            {headlines.map((i) => (
                                <HeadlineItem key={i.id} item={i} onOpen={() => openFromHeadline(i.id)} />
                            ))}
                        </div>
                    </SoftCard>

                    <SoftCard className="p-5">
                        <div className="text-(--text) font-semibold">Formato</div>
                        <Muted className="mt-1 text-sm">
                            1 noticia = 1 cambio. Pensado para auto-generación futura (IA) desde commits/PRs.
                        </Muted>

                        <Divider className="my-4 opacity-60" />

                        <div className="space-y-2">
                            <Muted className="text-sm">• Qué cambió</Muted>
                            <Muted className="text-sm">• Por qué</Muted>
                            <Muted className="text-sm">• Próximo</Muted>
                        </div>
                    </SoftCard>
                </div>
            </div>
        </PageContainer>
    );
}