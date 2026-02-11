import { Reveal } from "../../ui/animations/Reveal";
import { AbstractBackground } from "../../ui/graphics/AbstractBackground";
import { H2 } from "../../ui/primitives/typography/H2";
import { Chip } from "../../ui/primitives/Chip";
import { AccentCard } from "../../ui/cards/AccentCard";



export default function AboutHeroSection({ intro }) {
    const chips = intro?.chips ?? [];
    const paragraphs = intro?.paragraphs ?? [];

    return (
        <Reveal amount={0.35} once>
            <div
                className="relative overflow-hidden rounded-2xl border border-(--border)"
                style={{ boxShadow: "var(--shadow)" }}
            >
                <div className="relative h-auto min-h-30">
                    <AbstractBackground variant="mixed" animated={false} className="absolute inset-0" />
                    <div className="absolute inset-0 bg-black/10 -z-1 opacity-10" />
                    <div
                        className="absolute inset-x-0 bottom-0 h-[58%]"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgb(0 0 0 / 0) 0%, var(--bg-sec) 86%)",
                        }}
                    />

                    <div className="relative z-10 p-6 md:p-8 space-y-5">
                        <div className="flex flex-wrap gap-2">
                            {chips.map((c) => (
                                <Chip key={c}>{c}</Chip>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <H2>{intro?.title || "Sobre mí"}</H2>

                            <div className="space-y-2">
                                {paragraphs.map((p, i) => (
                                    <p
                                        key={i}
                                        className={
                                            i === 0
                                                ? "text-(--text) text-base md:text-lg leading-relaxed max-w-prose"
                                                : "text-(--text-muted) leading-relaxed max-w-prose"
                                        }
                                    >
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {intro?.intent?.text && (
                            <AccentCard title={intro?.intent?.title || "Mi intención"}>
                                {intro.intent.text}
                            </AccentCard>
                        )}
                    </div>
                </div>
            </div>
        </Reveal>
    );
}