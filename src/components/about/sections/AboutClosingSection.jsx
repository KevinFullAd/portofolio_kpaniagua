import React from "react";
import { Reveal } from "../../ui/animations/Reveal.jsx";
import { Eyebrow } from "../../ui/primitives/typography/EyeBrow.jsx";
import { H3 } from "../../ui/primitives/typography/H3.jsx";
import { Muted } from "../../ui/primitives/typography/Muted.jsx";
import { SoftCard } from "../../ui/cards/SoftCard.jsx";
import { ContactPill } from "../../ui/ContactPill.jsx";
import { Divider } from "../../ui/primitives/Divider.jsx";

export default function AboutClosingSection({ closing }) {
    const paragraphs = closing?.paragraphs ?? [];
    const links = closing?.links ?? [];

    return (
        <>
            <Reveal y={6} duration={0.35}>
                <Divider className="opacity-70" />
            </Reveal>

            <Reveal as="section" className="space-y-5">
                <div>
                    <Eyebrow>{closing?.eyebrow || "Contacto"}</Eyebrow>
                    <H3>{closing?.title}</H3>
                    {closing?.description && (
                        <Muted className="mt-2">{closing.description}</Muted>
                    )}
                </div>

                <div className="flex flex-col md:flex-row items-center align-middle gap-6 md:gap-10">
                    <div className="flex-1 space-y-2">
                        {paragraphs.map((p, i) => (
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

                    {links.length > 0 && (
                        <div className="w-full md:w-[320px]">
                            <SoftCard>
                                <Eyebrow>{closing?.linksTitle || "Links"}</Eyebrow>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {links.map((l) => (
                                        <ContactPill
                                            key={l.href}
                                            href={l.href}
                                            label={`${l.label}: ${l.value}`}
                                        />
                                    ))}
                                </div>
                            </SoftCard>
                        </div>
                    )}
                </div>
            </Reveal>
        </>
    );
}
