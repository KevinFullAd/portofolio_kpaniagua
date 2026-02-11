import { Reveal } from "../../ui/animations/Reveal.jsx";
import { Eyebrow } from "../../about/Eyebrow";
import { H2 } from "../../ui/primitives/typography/H2";
import { Lead } from "../../ui/primitives/typography/Lead";
import { Chip } from "../../ui/primitives/Chip";

export default function ResumeHeroSection({ hero }) {
    return (
        <Reveal as="header" amount={0.35} once className="space-y-4">
            <Eyebrow>{hero.eyebrow}</Eyebrow>

            <div className="space-y-2">
                <H2>{hero.title}</H2>
                <Lead>{hero.lead}</Lead>

                <div className="flex flex-wrap gap-2 pt-1">
                    {hero.chips.map((c) => (
                        <Chip key={c}>{c}</Chip>
                    ))}
                </div>
            </div>
        </Reveal>
    );
}
