import { Reveal } from "../../ui/animations/Reveal";
import { H3 } from "../../ui/primitives/typography/H3";
import { Muted } from "../../ui/primitives/typography/Muted";

export default function ProjectVisualSection({ visual }) {
    return (
        <Reveal as="section" className="space-y-3 px-5 lg:px-6">
            <H3>{visual.title}</H3>

            {visual.bullets?.length > 0 && (
                <ul className="space-y-2 list-disc pl-5">
                    {visual.bullets.map((b, i) => (
                        <Reveal key={i} delay={0.04 * i}>
                            <li className="text-(--text-muted) leading-relaxed">
                                {b}
                            </li>
                        </Reveal>
                    ))}
                </ul>
            )}
        </Reveal>
    );
}
