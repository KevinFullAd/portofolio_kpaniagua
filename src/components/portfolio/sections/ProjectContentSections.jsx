import { Reveal } from "../../ui/animations/Reveal";
import { H3 } from "../../ui/primitives/typography/H3";
import { Muted } from "../../ui/primitives/typography/Muted";

function Section({ title, paragraphs = [], bullets = [] }) {
    return (
        <section className="space-y-3">
            <H3>{title}</H3>

            {paragraphs.length > 0 && (
                <div className="space-y-2">
                    {paragraphs.map((p, i) => (
                        <Muted key={i}>{p}</Muted>
                    ))}
                </div>
            )}

            {bullets.length > 0 && (
                <ul className="space-y-2 list-disc pl-5">
                    {bullets.map((b, i) => (
                        <li key={i} className="text-(--text-muted)">
                            {b}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default function ProjectContentSections({ sections = [] }) {
    return (
        <div className="grid gap-6 p-5 lg:px-6 md:gap-8">
            {sections.map((s, i) => (
                <Reveal key={s.id} delay={0.04 * i}>
                    <Section
                        title={s.title}
                        paragraphs={s.paragraphs}
                        bullets={s.bullets}
                    />
                </Reveal>
            ))}
        </div>
    );
}
