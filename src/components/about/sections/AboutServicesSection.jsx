import React from "react";
import { Reveal } from "../../ui/animations/Reveal.jsx";
import { Eyebrow } from "../../ui/primitives/typography/EyeBrow.jsx";
import { H3 } from "../../ui/primitives/typography/H3.jsx";
import { Muted } from "../../ui/primitives/typography/Muted.jsx";
import { ServiceCard } from "../../ui/cards/ServiceCard.jsx";
import { Divider } from "../../ui/primitives/Divider.jsx";

export default function AboutServicesSection({ services }) {
    const items = services?.items ?? [];

    return (
        <>
            <Reveal y={6} duration={0.35}>
                <Divider className="opacity-70" />
            </Reveal>

            <Reveal as="section" className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                    <div>
                        <Eyebrow>{services?.eyebrow || "Lo que ofrezco"}</Eyebrow>
                        <H3>{services?.title || "Qué hago"}</H3>
                        {services?.description && (
                            <Muted className="mt-2">{services.description}</Muted>
                        )}
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {items.map((s, i) => (
                        <Reveal key={s.id} delay={0.04 * i}>
                            <ServiceCard
                                title={s.title}
                                description={s.description}
                                icon={s.icon}
                            />
                        </Reveal>
                    ))}
                </div>
            </Reveal>
        </>
    );
}
