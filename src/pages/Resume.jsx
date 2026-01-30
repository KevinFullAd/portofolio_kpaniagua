// src/pages/Resume.jsx 

import { PageContainer } from "../components/ui/primitives/PageContainer";

import { Eyebrow } from "../components/about/Eyebrow";
import { H2 } from "../components/ui/primitives/typography/H2";
import { H3 } from "../components/ui/primitives/typography/H3";
import { Muted } from "../components/ui/primitives/typography/Muted";
import { Lead } from "../components/ui/primitives/typography/Lead";
import { Chip } from "../components/ui/primitives/Chip";
import { Divider } from "../components/ui/primitives/Divider";
import { SoftCard } from "../components/ui/cards/SoftCard";
import { AccentCard } from "../components/ui/cards/AccentCard";
import { AbstractBackground } from "../components/ui/graphics/AbstractBackground";
import { TimelineItem } from "../components/resume/TimelineItem";
import { CertificationCard } from "../components/resume/CertificationCard";
import { resumeData } from "../data/resume.data";


export default function Resume({ className = "" }) {
    const { hero, timeline, strengths, certifications, closing } = resumeData;

    return (
        <PageContainer className={`flex flex-col gap-10 md:gap-12 ${className}`}>
            {/* HERO */}
            <header className="space-y-4">
                <Eyebrow>{hero.eyebrow}</Eyebrow>

                <div className="space-y-2">
                    <H2>{hero.title}</H2>
                    <Lead>{hero.lead}</Lead>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {hero.chips.map((c) => (
                            <Chip key={c}>{c}</Chip>
                        ))}
                    </div>
                </div>
            </header>

            {/* TIMELINE */}
            <section className="space-y-5">
                <div className="space-y-2">
                    <H3>{timeline.title}</H3>
                    <Muted>{timeline.description}</Muted>
                </div>

                <div className="space-y-6">
                    {timeline.items.map((it) => (
                        <TimelineItem
                            key={it.id}
                            type={it.type}
                            title={it.title}
                            period={it.period}
                            note={it.note}
                            bullets={it.bullets || []}
                        />
                    ))}
                </div>
            </section>

            <Divider className="opacity-70" />

            {/* HOW I WORK TODAY */}
            <section className="space-y-6">
                <div className="space-y-2">
                    <H3>{strengths.title}</H3>
                    <Muted>
                        Mi forma de trabajar hoy se apoya en experiencia real,
                        criterio técnico y una visión integral del producto.
                    </Muted>
                </div>

                {/* anchor card */}
                <AccentCard title="Pienso en sistemas, no solo en código">
                    Haber pasado por soporte, redes, servidores y desarrollo me
                    permite diseñar soluciones completas, entendiendo el impacto
                    real de cada decisión.
                </AccentCard>

                <div className="grid gap-4 md:grid-cols-2">
                    {strengths.items.map((s) => (
                        <SoftCard key={s.id} className="p-5">
                            <div className="text-(--text) font-semibold">
                                {s.title}
                            </div>
                            <p className="mt-1 text-(--text-muted) leading-relaxed">
                                {s.desc}
                            </p>
                        </SoftCard>
                    ))}
                </div>
            </section>

            <Divider className="opacity-70" />

            {/* CERTIFICATIONS */}
            <section className="space-y-5">
                <H3>{certifications.title}</H3>

                <div className="grid gap-4 md:grid-cols-2">
                    {certifications.items.map((c) => (
                        <CertificationCard
                            key={c.id}
                            title={c.title}
                            org={c.org}
                            year={c.year}
                            description={c.description}
                            href={c.link}
                        />
                    ))}
                </div>
            </section>


            {closing && (
                <>
                    <Divider className="opacity-70" />

                    <section className="space-y-5">
                        <div className="space-y-2">
                            <Eyebrow>{closing.eyebrow}</Eyebrow>
                            <H3>{closing.title}</H3>
                            <Muted>{closing.description}</Muted>
                        </div>

                        {/* Cierre con card + abstract bg */}
                        <div
                            className="relative overflow-hidden rounded-2xl border border-(--border)"
                            style={{ boxShadow: "var(--shadow)" }}
                        >
                            {/* background abstract (sutil) */}
                            <AbstractBackground
                                variant="mixed"
                                animated={false}
                                className="absolute inset-0"
                            />

                            {/* capa de “velo” para que el texto mande */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, rgb(0 0 0 / 0.10) 0%, var(--bg-sec) 62%)",
                                    opacity: 0.95,
                                }}
                                aria-hidden="true"
                            />

                            {/* contenido */}
                            <div className="relative z-10 p-6 md:p-8">
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                                    {/* texto principal */}
                                    <div className="flex-1 space-y-3">
                                        <div className="text-(--text) text-xl md:text-2xl font-semibold leading-snug">
                                            Hoy estoy construyendo mi perfil como{" "}
                                            <span style={{ color: "var(--accent-solid)" }}>
                                                desarrollador integral
                                            </span>
                                            : frontend sólido + backend en evolución + visión de sistemas.
                                        </div>

                                        <p className="text-(--text-muted) leading-relaxed max-w-prose">
                                            Me interesa profundizar en Node.js y NestJS sin perder la mirada
                                            de producto. Busco trabajar en soluciones que no solo funcionen,
                                            sino que sean claras, mantenibles y fáciles de escalar.
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {["Node.js", "NestJS", "Arquitectura", "Producto"].map((t) => (
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

                                    {/* mini resumen a la derecha */}
                                    <div className="w-full lg:w-[360px]">
                                        <SoftCard className="p-5">
                                            <Eyebrow>En lo inmediato</Eyebrow>

                                            <div className="mt-3 space-y-3">
                                                <div className="flex gap-3">
                                                    <span
                                                        className="mt-2 h-2 w-2 rounded-full"
                                                        style={{ background: "var(--accent-solid)" }}
                                                    />
                                                    <div>
                                                        <div className="text-(--text) font-semibold">
                                                            Profundizar backend
                                                        </div>
                                                        <div className="text-(--text-muted)">
                                                            APIs, arquitectura y lógica de negocio.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex gap-3">
                                                    <span
                                                        className="mt-2 h-2 w-2 rounded-full"
                                                        style={{ background: "rgb(var(--accent-rgb) / 0.55)" }}
                                                    />
                                                    <div>
                                                        <div className="text-(--text) font-semibold">
                                                            Mantener mirada de producto
                                                        </div>
                                                        <div className="text-(--text-muted)">
                                                            Claridad, ritmo visual y consistencia.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex gap-3">
                                                    <span
                                                        className="mt-2 h-2 w-2 rounded-full"
                                                        style={{ background: "rgb(var(--accent-rgb) / 0.35)" }}
                                                    />
                                                    <div>
                                                        <div className="text-(--text) font-semibold">
                                                            Pensar en sistemas completos
                                                        </div>
                                                        <div className="text-(--text-muted)">
                                                            Infra, entorno real y escalabilidad.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SoftCard>
                                    </div>
                                </div>

                                {/* cierre final (una sola línea, fuerte) */}
                                <div className="mt-6 pt-5 border-t border-(--border)">
                                    <p className="text-(--text-muted) leading-relaxed">
                                        Si te interesa ver esto aplicado, en el portfolio muestro proyectos
                                        con decisiones concretas de UI/UX y ejecución técnica.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </PageContainer>
    );
}
