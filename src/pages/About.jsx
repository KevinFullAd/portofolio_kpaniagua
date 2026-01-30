// src/pages/About.jsx
// Consumidor 100% desde about.data.js (intro, map, shortcuts, oneLiner, story, approach, services, closing)

import React from "react";
import { PageContainer } from "../components/ui/primitives/PageContainer";
import { AbstractBackground } from "../components/ui/graphics/AbstractBackground"; 
import { H2 } from "../components/ui/primitives/typography/H2.jsx";
import { H3 } from "../components/ui/primitives/typography/H3.jsx";
import { Lead } from "../components/ui/primitives/typography/Lead.jsx";
import { Muted } from "../components/ui/primitives/typography/Muted.jsx";
import { Divider } from "../components/ui/primitives/Divider.jsx";
import { Chip } from "../components/ui/primitives/Chip.jsx";
import {AccentCard} from "../components/ui/cards/AccentCard.jsx";
import { SoftCard } from "../components/ui/cards/SoftCard.jsx";
import { ServiceCard } from "../components/ui/cards/ServiceCard.jsx";
import { FlowMap } from "../components/about/FlowMap.jsx";
import { ContactPill } from "../components/ui/ContactPill.jsx";
import { Eyebrow } from "../components/ui/primitives/typography/EyeBrow.jsx";

export default function About({ data }) {
    const intro = data?.intro;
    const map = data?.map;
    const shortcuts = data?.shortcuts;
    const oneLiner = data?.oneLiner;
    const story = data?.story;
    const approach = data?.approach;
    const services = data?.services;
    const closing = data?.closing;

    const serviceItems = services?.items || [];
    const mapItems = map?.items || [];

    return (
        <PageContainer className="relative flex flex-col gap-10 md:gap-12">
            {/* HERO */}
            <div
                className="relative overflow-hidden rounded-2xl border border-(--border)"
                style={{ boxShadow: "var(--shadow)" }}
            >
                <div className="relative h-auto min-h-30 ">
                    <AbstractBackground
                        variant="mixed"
                        animated={false}
                        className="absolute inset-0"
                    />

                    <div className="absolute inset-0 bg-black/10 -z-1 opacity-10" />

                    <div
                        className="absolute inset-x-0 bottom-0 h-[58%]"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgb(0 0 0 / 0) 0%, var(--bg-sec) 86%)",
                        }}
                    />

                    <div className="relative z-10 p-6 md:p-8 space-y-5">
                        <div className="flex flex-wrap gap-2">
                            {(intro?.chips || []).map((c) => (
                                <Chip key={c}>{c}</Chip>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <H2>{intro?.title || "Sobre mí"}</H2>

                            <div className="space-y-2">
                                {(intro?.paragraphs || []).map((p, i) => (
                                    <p
                                        key={i}
                                        className={
                                            i === 0
                                                ? "text-(--text) text-base md:text-lg leading-relaxed max-w-prose"
                                                : "text-(--text-muted) leading-relaxed max-w-prose"
                                        }
                                    >
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {intro?.intent?.text ? (
                            <AccentCard title={intro?.intent?.title || "Mi intención"}>
                                {intro.intent.text}
                            </AccentCard>
                        ) : null}
                    </div>
                </div>
            </div>

            {/* MAPA + ACCESOS */}
            <div className="flex flex-col md:flex-row px-10 gap-6 md:gap-8 items-start">
                <div className="flex-1">
                    <Eyebrow>{map?.eyebrow || "Mapa de lectura"}</Eyebrow>
                    <H3>{map?.title || "¿Qué vas a encontrar acá?"}</H3>
                    {map?.description ? (
                        <Muted className="mt-2">{map.description}</Muted>
                    ) : null}

                    <div className="mt-5">
                        <FlowMap items={mapItems} />
                    </div>
                </div>

                <div className="w-full md:w-[360px] flex flex-col gap-4">
                    <SoftCard>
                        <Eyebrow>{shortcuts?.cardTitle || "Si querés ir directo"}</Eyebrow>
                        <div className="mt-2 flex flex-col gap-2">
                            {shortcuts?.portfolio?.href ? (
                                <a
                                    href={shortcuts.portfolio.href}
                                    className="rounded-xl border border-(--border) px-4 py-3 transition hover:brightness-110"
                                    style={{ background: "rgb(255 255 255 / 0.02)" }}
                                >
                                    <div className="text-(--text) font-semibold">
                                        {shortcuts?.portfolio?.title || "Ver portfolio"}
                                    </div>
                                    <div className="text-(--text-muted) text-sm">
                                        {shortcuts?.portfolio?.desc || "Proyectos y casos"}
                                    </div>
                                </a>
                            ) : null}

                            {closing?.links?.[0]?.href ? (
                                <a
                                    href={closing.links[0].href}
                                    className="rounded-xl border border-(--border) px-4 py-3 transition hover:brightness-110"
                                    style={{ background: "rgb(var(--accent-rgb) / 0.06)" }}
                                >
                                    <div
                                        className="font-semibold"
                                        style={{ color: "var(--accent-solid)" }}
                                    >
                                        {shortcuts?.contactCta?.title || "Escribime"}
                                    </div>
                                    <div className="text-(--text-muted) text-sm">
                                        {closing.links[0].value}
                                    </div>
                                </a>
                            ) : null}
                        </div>
                    </SoftCard>

                    <SoftCard>
                        <Eyebrow>{oneLiner?.eyebrow || "En una línea"}</Eyebrow>
                        <Lead>{oneLiner?.text || ""}</Lead>
                    </SoftCard>
                </div>
            </div>

            <Divider className="opacity-70" />

            {/* STORY */}
            {story ? (
                <section className="flex flex-col px-10 gap-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                        <div>
                            <Eyebrow>{story.eyebrow || "Un poco más personal"}</Eyebrow>
                            <H3>{story.title}</H3>
                            {story.description ? (
                                <Muted className="mt-2">{story.description}</Muted>
                            ) : null}
                        </div>

                        {story.highlightPill ? (
                            <div
                                className="rounded-full px-4 py-2 border border-(--border) w-fit"
                                style={{ background: "rgb(var(--accent-rgb) / 0.05)" }}
                            >
                                <span className="text-sm" style={{ color: "var(--accent-solid)" }}>
                                    {story.highlightPill}
                                </span>
                            </div>
                        ) : null}
                    </div>

                    <div className="flex flex-col xl:flex-row gap-6 md:gap-10">
                        <div className="flex-1 space-y-3">
                            <Lead>{story.paragraphs?.[0] || ""}</Lead>
                            <Muted>{story.paragraphs?.[1] || ""}</Muted>
                        </div>

                        <div className="w-full md:w-[420px]">
                            <SoftCard className="h-auto">
                                <Eyebrow>{story.focus?.eyebrow || "En lo que más me fijo"}</Eyebrow>

                                <div className="mt-4 flex flex-col gap-3">
                                    {(story.focus?.items || []).map((x) => (
                                        <div key={x.t} className="flex gap-3">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-(--text-muted)" />
                                            <div>
                                                <div className="text-(--text) font-semibold">{x.t}</div>
                                                <div className="text-(--text-muted) leading-relaxed">{x.d}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SoftCard>
                        </div>
                    </div>
                </section>
            ) : null}

            <Divider className="opacity-70" />

            {/* APPROACH */}
            {approach ? (
                <section className="space-y-6 px-10">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                        <div>
                            <Eyebrow>{approach.eyebrow || "Mi forma de trabajar"}</Eyebrow>
                            <H3>{approach.title}</H3>
                            {approach.description ? (
                                <Muted className="mt-2">{approach.description}</Muted>
                            ) : null}
                        </div>

                        <div className="flex gap-2 flex-wrap">
                            {(approach.tags || []).map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full px-4 py-2 border border-(--border) text-sm"
                                    style={{ background: "rgb(255 255 255 / 0.02)" }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {(approach.bullets || []).slice(0, 4).map((b, i) => (
                            <SoftCard key={i}>
                                <div className="flex items-start gap-4">
                                    <span
                                        className="grid place-items-center w-9 h-9 rounded-xl text-sm font-semibold"
                                        style={{
                                            background: "var(--accent-soft)",
                                            color: "var(--accent-solid)",
                                        }}
                                    >
                                        {i + 1}
                                    </span>

                                    <div className="flex-1">
                                        <div className="text-(--text) text-lg font-semibold leading-snug">
                                            {b}
                                        </div>
                                        <div className="mt-2 text-(--text-muted) leading-relaxed">
                                            {(approach.bulletNotes || [])[i] || ""}
                                        </div>
                                    </div>
                                </div>
                            </SoftCard>
                        ))}
                    </div>
                </section>
            ) : null}

            <Divider className="opacity-70" />

            {/* SERVICES */}
            {serviceItems.length ? (
                <section className="space-y-6 px-10 ">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                        <div>
                            <Eyebrow>{services.eyebrow || "Lo que ofrezco"}</Eyebrow>
                            <H3>{services.title || "Que hago"}</H3>
                            {services.description ? (
                                <Muted className="mt-2">{services.description}</Muted>
                            ) : null}
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {serviceItems.map((s) => (
                            <ServiceCard
                                key={s.id}
                                title={s.title}
                                description={s.description}
                                icon={s.icon}
                            />
                        ))}
                    </div>
                </section>
            ) : null}

            {/* CLOSING */}
            {closing ? (
                <>
                    <Divider className="opacity-70" />
                    <section className="space-y-5 px-10 ">
                        <div>
                            <Eyebrow>{closing.eyebrow || "Contacto"}</Eyebrow>
                            <H3>{closing.title}</H3>
                            {closing.description ? (
                                <Muted className="mt-2">{closing.description}</Muted>
                            ) : null}
                        </div>

                        <div className="flex flex-col md:flex-row items-center align-middle gap-6 md:gap-10">
                            <div className="flex-1 space-y-2">
                                {(closing.paragraphs || []).map((p, i) => (
                                    <p
                                        key={i}
                                        className={
                                            i === 0
                                                ? "text-(--text) leading-relaxed max-w-prose"
                                                : "text-(--text-muted) leading-relaxed max-w-prose"
                                        }
                                    >
                                        {p}
                                    </p>
                                ))}
                            </div>

                            {closing.links?.length ? (
                                <div className="w-full md:w-[320px]">
                                    <SoftCard>
                                        <Eyebrow>{closing.linksTitle || "Links"}</Eyebrow>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {closing.links.map((l) => (
                                                <ContactPill
                                                    key={l.href}
                                                    href={l.href}
                                                    label={`${l.label}: ${l.value}`}
                                                />
                                            ))}
                                        </div>
                                    </SoftCard>
                                </div>
                            ) : null}
                        </div>
                    </section>
                </>
            ) : null}
        </PageContainer>
    );
}
