import { Link } from "react-router-dom";
import { Reveal } from "../../ui/animations/Reveal";
import { AbstractBackground } from "../../ui/graphics/AbstractBackground";
import { Chip } from "../../ui/primitives/Chip";
import { H2 } from "../../ui/primitives/typography/H2";
import { Muted } from "../../ui/primitives/typography/Muted";
import { SoftCard } from "../../ui/cards/SoftCard";
import { ContactPill } from "../../ui/ContactPill";

export default function ProjectHeroSection({ work }) {
    const d = work.detail;

    return (
        <Reveal as="header" amount={0.3} once>
            <div
                className="overflow-hidden rounded-2xl p-5 md:p-6 relative"
                style={{ boxShadow: "var(--shadow)" }}
            >
                <AbstractBackground
                    variant={work.coverVariant || "layers"}
                    animated={false}
                    base="transparent"
                    className="absolute inset-0 -z-1"
                />

                <div className="relative z-10 space-y-4">
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

                    {d?.hero?.summary && (
                        <Muted className="max-w-prose">{d.hero.summary}</Muted>
                    )}

                    {d?.hero?.links?.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                            {d.hero.links.map((l) => (
                                <ContactPill key={l.href} href={l.href} label={l.label} />
                            ))}
                        </div>
                    )}

                    {d?.highlights?.length > 0 && (
                        <div className="flex flex-wrap gap-4 mt-2">
                            {d.highlights.map((h, i) => (
                                <Reveal key={h.label} delay={0.04 * i}>
                                    <SoftCard className="min-w-60 p-4 relative overflow-hidden">
                                        <div className="text-[.75rem] text-(--text-muted)">
                                            {h.label}
                                        </div>
                                        <div className="text-sm text-(--text) font-medium">
                                            {h.value}
                                        </div>
                                    </SoftCard>
                                </Reveal>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Reveal>
    );
}
