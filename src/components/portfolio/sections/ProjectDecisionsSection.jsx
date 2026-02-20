import { Reveal } from "../../ui/animations/Reveal";
import { H3 } from "../../ui/primitives/typography/H3";
import { Muted } from "../../ui/primitives/typography/Muted";
import { SoftCard } from "../../ui/cards/SoftCard";

export default function ProjectDecisionsSection({ decisions }) {
    return (
        <Reveal as="section" className="space-y-3 px-5 lg:px-6">
            <H3>{decisions.title}</H3>

            <div className="grid gap-3 md:grid-cols-2">
                {decisions.items.map((it, idx) => (
                    <Reveal key={it.decision} delay={0.05 * idx}>
                        <SoftCard className="p-4 h-full">
                            <div className="text-(--text) font-semibold">
                                {it.decision}
                            </div>

                            <Muted className="mt-1">
                                {it.reason}
                            </Muted>
                        </SoftCard>
                    </Reveal>
                ))}
            </div>
        </Reveal>
    );
}
