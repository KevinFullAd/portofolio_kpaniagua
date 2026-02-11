import React from "react";
import { Reveal } from "../../ui/animations/Reveal.jsx";
import { Eyebrow } from "../../ui/primitives/typography/EyeBrow.jsx";
import { H3 } from "../../ui/primitives/typography/H3.jsx";
import { Muted } from "../../ui/primitives/typography/Muted.jsx";
import { SoftCard } from "../../ui/cards/SoftCard.jsx";
import { Divider } from "../../ui/primitives/Divider.jsx";

export default function AboutApproachSection({ approach }) {
    const tags = approach?.tags ?? [];
    const bullets = approach?.bullets?.slice(0, 4) ?? [];
    const notes = approach?.bulletNotes ?? [];

    return (
        <>
            <Reveal y={6} duration={0.35}>
                <Divider className="opacity-70" />
            </Reveal>

            <Reveal as="section" className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                    <div>
                        <Eyebrow>{approach?.eyebrow || "Mi forma de trabajar"}</Eyebrow>
                        <H3>{approach?.title}</H3>
                        {approach?.description && (
                            <Muted className="mt-2">{approach.description}</Muted>
                        )}
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        {tags.map((t) => (
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
                    {bullets.map((b, i) => (
                        <Reveal key={i}>
                            <SoftCard className="h-full">
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
                                            {notes[i] || ""}
                                        </div>
                                    </div>
                                </div>
                            </SoftCard>
                        </Reveal>
                    ))}
                </div>
            </Reveal>
        </>
    );
}
