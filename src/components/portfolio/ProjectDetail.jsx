// src/components/portfolio/ProjectDetail.jsx
import React from "react";
import { Link } from "react-router-dom";

import { AbstractBackground } from "../ui/graphics/AbstractBackground";
import { Chip } from "../ui/primitives/Chip";
import { H2 } from "../ui/primitives/typography/H2";
import { H3 } from "../ui/primitives/typography/H3";
import { Muted } from "../ui/primitives/typography/Muted";
import { Divider } from "../ui/primitives/Divider";
import { SoftCard } from "../ui/cards/SoftCard";
import { ContactPill } from "../ui/ContactPill";

function Section({ title, paragraphs = [], bullets = [] }) {
    return (
        <section className="space-y-3">
            <H3>{title}</H3>

            {paragraphs.length > 0 ? (
                <div className="space-y-2">
                    {paragraphs.map((p, i) => (
                        <Muted key={i}>{p}</Muted>
                    ))}
                </div>
            ) : null}

            {bullets.length > 0 ? (
                <ul className="space-y-2 list-disc pl-5">
                    {bullets.map((b, i) => (
                        <li key={i} className="text-(--text-muted) leading-relaxed">
                            {b}
                        </li>
                    ))}
                </ul>
            ) : null}
        </section>
    );
}

export function ProjectDetail({ work }) {
    const d = work.detail;

    return (
        <article className="flex flex-col gap-6">
            {/* HERO */}
            <header
                className="
                relative overflow-hidden rounded-2xl
                border border-(--border)
                p-5 md:p-6
                "
                style={{ boxShadow: "var(--shadow)" }}
            >
                <AbstractBackground
                    variant={work.coverVariant || "layers"}
                    animated={false}
                    base="transparent"
                    className="absolute inset-0 -z-1"
                />

                <div
                    className="
                        absolute inset-0 rounded-2xl
                        bg-linear-to-t opacity-10 -z-10
                        from-black/85 via-black/45 to-black/10
                    "
                />

                <div className="relative z-10 flex flex-col gap-4 md:items-start">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 flex-wrap">
                            <Chip>{work.tag}</Chip>

                            <Link
                                to="/portfolio"
                                className="text-(--text-muted) hover:text-(--text) transition text-sm"
                            >
                                ← Volver
                            </Link>
                        </div>

                        <H2>{work.title}</H2>
                        {d?.hero?.summary ? <Muted className="max-w-prose">{d.hero.summary}</Muted> : null}

                        {Array.isArray(d?.hero?.links) && d.hero.links.length > 0 ? (
                            <div className="flex flex-wrap  gap-2 pt-2">
                                {d.hero.links.map((l) => (
                                    <ContactPill key={l.href} href={l.href} label={l.label} />
                                ))}
                            </div>
                        ) : null}
                    </div>

                    {/* Highlights */}
                    {Array.isArray(d?.highlights) && d.highlights.length > 0 ? (
                        <div className="flex flex-wrap gap-4 mt-2 justify-between w-full">
                            {d.highlights.map((h) => (
                                <SoftCard key={h.label} className="overflow-hidden min-w-60 relative p-4">
                                    <span className="
                                    absolute top-0 right-0 
                                    w-full h-full
                                    -z-1  
                                    bg-linear-to-t
                                    from-(--accent-solid)
                                    to-white/10
                                    blur-2xl" />
                                    <div className="text-[.75rem] text-(--text-muted)">{h.label}</div>
                                    <div className="text-sm text-(--text) font-medium">{h.value}</div>
                                </SoftCard>
                            ))}
                        </div>
                    ) : null}
                </div>
            </header>

            <Divider className="opacity-70" />

            {/* CONTENIDO */}
            <div className="grid gap-6  lg:px-10 md:gap-8">
                {d?.sections?.map((s) => (
                    <Section
                        key={s.id}
                        title={s.title}
                        paragraphs={s.paragraphs}
                        bullets={s.bullets}
                    />
                ))}

                {d?.flow ? (
                    <section className="space-y-3">
                        <H3>{d.flow.title}</H3>

                        <div className="grid gap-3 md:grid-cols-3">
                            {d.flow.steps.map((st, idx) => (
                                <SoftCard key={st.title} className="p-4" style={{ boxShadow: "var(--shadow)" }}>
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold"
                                            style={{ background: "var(--accent-soft)", color: "var(--accent-solid)" }}
                                        >
                                            {idx + 1}
                                        </span>
                                        <div className="font-semibold text-(--text)">{st.title}</div>
                                    </div>
                                    <Muted className="mt-2">{st.description}</Muted>
                                </SoftCard>
                            ))}
                        </div>
                    </section>
                ) : null}

                {d?.decisions ? (
                    <section className="space-y-3">
                        <H3>{d.decisions.title}</H3>

                        <div className="grid gap-3 md:grid-cols-2">
                            {d.decisions.items.map((it) => (
                                <SoftCard key={it.decision} className="p-4">
                                    <div className="text-(--text) font-semibold">{it.decision}</div>
                                    <Muted className="mt-1">{it.reason}</Muted>
                                </SoftCard>
                            ))}
                        </div>
                    </section>
                ) : null}

                {d?.visual ? <Section title={d.visual.title} bullets={d.visual.bullets} /> : null}
            </div>

            <Divider className="opacity-70" />

            {/* Footer nav dentro de la rama portfolio */}
            <footer className="pt-1 relative flex justify-end">
                <Link
                    to={`/portfolio`}
                    className="
                        inline-flex items-center justify-center
                        w-35 h-8 rounded-full
                        font-semibold
                        hover:brightness-110 transition
                        px-4 py-1
                        "
                    style={{
                        background: "var(--accent-solid)",
                        color: "var(--bg-main)",
                        boxShadow: "var(--accent-glow)",
                    }}
                >
                    Volver
                </Link>
            </footer>
        </article>
    );
}
