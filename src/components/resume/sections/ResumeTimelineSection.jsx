import { Reveal } from "../../ui/animations/Reveal.jsx";
import { H3 } from "../../ui/primitives/typography/H3";
import { Muted } from "../../ui/primitives/typography/Muted";
import { Divider } from "../../ui/primitives/Divider";
import { TimelineItem } from "../TimelineItem";

export default function ResumeTimelineSection({ timeline }) {
    return (
        <>
            <Reveal as="section" className="space-y-5">
                <div className="space-y-2">
                    <H3>{timeline.title}</H3>
                    <Muted>{timeline.description}</Muted>
                </div>

                <div className="space-y-6">
                    {timeline.items.map((it, i) => (
                        <Reveal key={it.id} delay={0.04 * i}>
                            <TimelineItem
                                type={it.type}
                                title={it.title}
                                period={it.period}
                                note={it.note}
                                bullets={it.bullets || []}
                            />
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
