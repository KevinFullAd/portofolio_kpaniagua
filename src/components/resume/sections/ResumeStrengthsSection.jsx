import { Reveal } from "../../ui/animations/Reveal.jsx";
import { H3 } from "../../ui/primitives/typography/H3";
import { Muted } from "../../ui/primitives/typography/Muted";
import { SoftCard } from "../../ui/cards/SoftCard";
import { AccentCard } from "../../ui/cards/AccentCard";
import { Divider } from "../../ui/primitives/Divider";

export default function ResumeStrengthsSection({ strengths }) {
    return (
        <>
            <Reveal as="section" className="space-y-6">
                <div className="space-y-2">
                    <H3>{strengths.title}</H3>
                    <Muted>
                        Mi forma de trabajar hoy se apoya en experiencia real,
                        criterio técnico y una visión integral del producto.
                    </Muted>
                </div>

                <Reveal>
                    <AccentCard title="Pienso en sistemas, no solo en código">
                        Haber pasado por soporte, redes, servidores y desarrollo me
                        permite diseñar soluciones completas, entendiendo el impacto
                        real de cada decisión.
                    </AccentCard>
                </Reveal>

                <div className="grid gap-4 md:grid-cols-2">
                    {strengths.items.map((s, i) => (
                        <Reveal key={s.id} delay={0.04 * i}>
                            <SoftCard className="p-5">
                                <div className="text-(--text) font-semibold">
                                    {s.title}
                                </div>
                                <p className="mt-1 text-(--text-muted) leading-relaxed">
                                    {s.desc}
                                </p>
                            </SoftCard>
                        </Reveal>
                    ))}
                </div>
            </Reveal>

            <Reveal y={6} duration={0.35}>
                <Divider className="opacity-70" />
            </Reveal>
        </>
    );
}
