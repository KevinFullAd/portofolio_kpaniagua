// src/components/contact/sections/ContactHeroSection.jsx
import { Reveal } from "../../ui/animations/Reveal.jsx";
import { Eyebrow } from "../../about/Eyebrow";
import { H2 } from "../../ui/primitives/typography/H2";
import { Lead } from "../../ui/primitives/typography/Lead";
import { Chip } from "../../ui/primitives/Chip";

export default function ContactHeroSection({ hero }) {
    return (
        <Reveal as="header" amount={0.35} once className="relative overflow-hidden space-y-4">
            <Eyebrow>{hero.eyebrow}</Eyebrow>

            <div className="relative z-10 space-y-3">
                <H2>{hero.title}</H2>
                <Lead className="max-w-2xl">{hero.lead}</Lead>

                <div className="flex flex-wrap gap-2 pt-1">
                    {hero.chips.map((c) => (
                        <Chip key={c}>{c}</Chip>
                    ))}
                </div>
            </div>
        </Reveal>
    );
}
