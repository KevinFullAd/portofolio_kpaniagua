// src/pages/Portfolio.jsx
// Entrada editorial + jerarquía como About, sin romper tu estructura.
// Mantiene PageContainer + WorkCard, solo suma “capa narrativa”.

import React from "react";
import { PageContainer } from "../components/ui/primitives/PageContainer";
import { WorkCard } from "../components/portfolio/WorkCard";
import { portfolioData } from "../data/portfolio.data";

import { Eyebrow } from "../components/about/Eyebrow";
import { H2 } from "../components/ui/primitives/typography/H2";
import { Muted } from "../components/ui/primitives/typography/Muted";
import { Lead } from "../components/ui/primitives/typography/Lead";
import { Chip } from "../components/ui/primitives/Chip";
import { Divider } from "../components/ui/primitives/Divider";
import { SoftCard } from "../components/ui/cards/SoftCard";

export default function Portfolio({ className = "" }) {
    const { page, works } = portfolioData;
 
    const hero = page?.hero || {};
    const chips = hero?.chips || ["UI/UX", "Frontend", "Producto"];

    return (
        <PageContainer className={`flex flex-col gap-8 !p-0 ${className}`}> 
            <header className="space-y-4">
                <Eyebrow>{hero.eyebrow || "Portfolio"}</Eyebrow>

                <div className="space-y-2">
                    <H2>{page?.title || "Mis trabajos"}</H2>
                    {hero?.lead ? (
                        <Lead>{hero.lead}</Lead>
                    ) : (
                        <Lead>
                            Proyectos donde diseño y desarrollo interfaces claras, escalables y
                            pensadas para usarse en el mundo real.
                        </Lead>
                    )}

                    {hero?.description ? (
                        <Muted className="max-w-prose">{hero.description}</Muted>
                    ) : (
                        <Muted className="max-w-prose">
                            Cada caso tiene contexto, decisiones y foco en calidad visual:
                            jerarquía, consistencia y detalles.
                        </Muted>
                    )}
                </div>

                {/* chips conceptuales (orientan lectura) */}
                <div className="flex flex-wrap gap-2 pt-1">
                    {chips.map((c) => (
                        <Chip key={c}>{c}</Chip>
                    ))}
                </div>
            </header>

            {/* “mini guía” para elevar la entrada sin ruido */}
            <SoftCard className="p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                    <div className="flex-1">
                        <div className="text-(--text) font-semibold">
                            Cómo leer esta sección
                        </div>
                        <Muted className="mt-1">
                            Entrá a un proyecto para ver objetivo, decisiones y alcance. No hay
                            pantallas de carga: navegación directa dentro de la rama portfolio.
                        </Muted>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <span
                            className="rounded-full px-4 py-2 border border-(--border) text-sm"
                            style={{ background: "rgb(255 255 255 / 0.02)" }}
                        >
                            Objetivo
                        </span>
                        <span
                            className="rounded-full px-4 py-2 border border-(--border) text-sm"
                            style={{ background: "rgb(255 255 255 / 0.02)" }}
                        >
                            Decisiones
                        </span>
                        <span
                            className="rounded-full px-4 py-2 border border-(--border) text-sm"
                            style={{ background: "rgb(255 255 255 / 0.02)" }}
                        >
                            Resultado
                        </span>
                    </div>
                </div>
            </SoftCard>

            <Divider className="opacity-70" />

            {/* Listado */}
            <section className="flex flex-col gap-4">
                {works.map((w) => (
                    <WorkCard
                        key={w.id}
                        id={w.id}
                        tag={w.tag}
                        title={w.title}
                        description={w.description}
                        stack={w.stack}
                        cta={w.cta}
                        href={w.href}
                        variant={w.variant}
                        animated={w.animated}
                    />
                ))}
            </section>
        </PageContainer>
    );
}
