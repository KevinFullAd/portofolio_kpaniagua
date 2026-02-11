import { Reveal } from "../../ui/animations/Reveal.jsx";
import { Eyebrow } from "../../about/Eyebrow";
import { H3 } from "../../ui/primitives/typography/H3";
import { Muted } from "../../ui/primitives/typography/Muted";
import { SoftCard } from "../../ui/cards/SoftCard";
import { AbstractBackground } from "../../ui/graphics/AbstractBackground";

export default function ResumeClosingSection({ closing }) {
    return (
        <Reveal as="section" className="space-y-5">
            <div className="space-y-2">
                <Eyebrow>{closing.eyebrow}</Eyebrow>
                <H3>{closing.title}</H3>
                <Muted>{closing.description}</Muted>
            </div>

            <Reveal>
                <div
                    className="relative overflow-hidden rounded-2xl border border-(--border)"
                    style={{ boxShadow: "var(--shadow)" }}
                >
                    <AbstractBackground
                        variant="mixed"
                        animated={false}
                        className="absolute inset-0"
                    />

                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgb(0 0 0 / 0.10) 0%, var(--bg-sec) 62%)",
                            opacity: 0.95,
                        }}
                        aria-hidden="true"
                    />

                    <div className="relative z-10 p-6 md:p-8">
                        <div className="text-(--text) text-xl md:text-2xl font-semibold leading-snug">
                            Hoy estoy construyendo mi perfil como{" "}
                            <span style={{ color: "var(--accent-solid)" }}>
                                desarrollador integral
                            </span>
                            : frontend sólido + backend en evolución + visión de sistemas.
                        </div>
                    </div>
                </div>
            </Reveal>
        </Reveal>
    );
}
