import { Reveal } from "../../ui/animations/Reveal";
import { H3 } from "../../ui/primitives/typography/H3";
import { Muted } from "../../ui/primitives/typography/Muted";
import { SoftCard } from "../../ui/cards/SoftCard";

export default function ProjectFlowSection({ flow }) {
    return (
        <Reveal as="section" className="space-y-3 px-5 lg:px-6">
            <H3>{flow.title}</H3>

            <div className="grid gap-3 md:grid-cols-3">
                {flow.steps.map((st, idx) => (
                    <Reveal key={st.title} delay={0.05 * idx}>
                        <SoftCard
                            className="p-4"
                            style={{ boxShadow: "var(--shadow)" }}
                        >
                            <div className="flex items-center gap-2">
                                <span
                                    className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold"
                                    style={{
                                        background: "var(--accent-soft)",
                                        color: "var(--accent-solid)",
                                    }}
                                >
                                    {idx + 1}
                                </span>

                                <div className="font-semibold text-(--text)">
                                    {st.title}
                                </div>
                            </div>

                            <Muted className="mt-2">
                                {st.description}
                            </Muted>
                        </SoftCard>
                    </Reveal>
                ))}
            </div>
        </Reveal>
    );
}
