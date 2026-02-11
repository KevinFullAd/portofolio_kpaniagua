import React from "react";
import { Reveal } from "../../ui/animations/Reveal.jsx";
import { Eyebrow } from "../../ui/primitives/typography/EyeBrow.jsx";
import { H3 } from "../../ui/primitives/typography/H3.jsx";
import { Muted } from "../../ui/primitives/typography/Muted.jsx";
import { Lead } from "../../ui/primitives/typography/Lead.jsx";
import { SoftCard } from "../../ui/cards/SoftCard.jsx";
import { Divider } from "../../ui/primitives/Divider.jsx";

export default function AboutStorySection({ story }) {
    const focusItems = story?.focus?.items ?? [];

    return (
        <>
            <Reveal y={6} duration={0.35}>
                <Divider className="opacity-70" />
            </Reveal>

            <Reveal as="section" className="flex flex-col gap-6">
                <div className="flex flex-col  md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                        <Eyebrow>{story?.eyebrow || "Un poco más personal"}</Eyebrow>
                        <H3>{story?.title}</H3>
                        {story?.description && (
                            <Muted className="mt-2">{story.description}</Muted>
                        )}
                    </div>

                    {story?.highlightPill && (
                        <div
                            className="rounded-full bg-(--accent-soft) px-4 py-2 border border-(--border) w-fit"
                        >
                            <span
                                className="text-sm"
                                style={{ color: "var(--accent-solid)" }}
                            >
                                {story.highlightPill}
                            </span>
                        </div>
                    )}
                </div>

                <div className="flex flex-col xl:flex-row gap-6 md:gap-10">
                    <div className="flex-1 space-y-3">
                        <Lead>{story?.paragraphs?.[0] || ""}</Lead>
                        <Muted>{story?.paragraphs?.[1] || ""}</Muted>
                    </div>

                    <div className="w-full xl:w-115  rounded-2xl" >
                        <SoftCard>
                            <Eyebrow color="--accent-solid"> 
                                {story?.focus?.eyebrow || "En lo que más me fijo"}
                            </Eyebrow>

                            <div className="mt-4 flex flex-col gap-3">
                                {focusItems.map((x) => (
                                    <div key={x.t} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-(--accent-solid)" />
                                        <div>
                                            <div className="text-(--text) font-semibold">
                                                {x.t}
                                            </div>
                                            <div className="text-(--text-muted) leading-relaxed">
                                                {x.d}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SoftCard>
                    </div>
                </div>
            </Reveal>
        </>
    );
}
