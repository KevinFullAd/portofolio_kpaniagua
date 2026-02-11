import React from "react";
import { Reveal } from "../../ui/animations/Reveal.jsx";
import { Eyebrow } from "../../ui/primitives/typography/EyeBrow.jsx";
import { H3 } from "../../ui/primitives/typography/H3.jsx";
import { Muted } from "../../ui/primitives/typography/Muted.jsx";
import { SoftCard } from "../../ui/cards/SoftCard.jsx";
import { FlowMap } from "../FlowMap.jsx";
import { Lead } from "../../ui/primitives/typography/Lead.jsx";

export default function AboutMapSection({ map, shortcuts, oneLiner, closing }) {
    const mapItems = map?.items ?? [];

    return (
        <>
            <Reveal delay={0.02}>
                <div className="flex flex-col xl:flex-row gap-6 md:gap-8 items-start">
                    <div className="flex-1">
                        <Eyebrow>{map?.eyebrow || "Mapa de lectura"}</Eyebrow>
                        <H3>{map?.title || "¿Qué vas a encontrar acá?"}</H3>
                        {map?.description && (
                            <Muted className="mt-2">{map.description}</Muted>
                        )}

                        <div className="mt-5">
                            <FlowMap items={mapItems} />
                        </div>
                    </div>

                    <div className="w-full xl:w-90 flex flex-col gap-4">
                        <SoftCard>
                            <Eyebrow>{shortcuts?.cardTitle || "Si querés ir directo"}</Eyebrow>

                            <div className="mt-2 flex flex-col gap-2">
                                {shortcuts?.portfolio?.href && (
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
                                )}

                                {closing?.links?.[0]?.href && (
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
                                )}
                            </div>
                        </SoftCard>

                        <SoftCard>
                            <Eyebrow>{oneLiner?.eyebrow || "En una línea"}</Eyebrow>
                            <Lead>{oneLiner?.text || ""}</Lead>
                        </SoftCard>
                    </div>
                </div>
            </Reveal>
        </>
    );
}
