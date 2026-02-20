import { Reveal } from "../../ui/animations/Reveal.jsx";
import { Eyebrow } from "../../about/Eyebrow";
import { H3 } from "../../ui/primitives/typography/H3";
import { Muted } from "../../ui/primitives/typography/Muted";
import { SoftCard } from "../../ui/cards/SoftCard";
import { AbstractBackground } from "../../ui/graphics/AbstractBackground";

export default function ResumeClosingSection({ closing }) {

    const cv = closing?.cv;
    const hasCv = Boolean(cv?.href);

    const isExternal = (href) => /^https?:\/\//i.test(href || "");
    const isFile = (href) =>
        /\.(pdf|doc|docx)$/i.test(href || "") || (href || "").includes("/assets/");


    return (
        <Reveal as="section" className="space-y-5">
            <div className="space-y-2">
                <Eyebrow>{closing.eyebrow}</Eyebrow>
                <H3>{closing.title}</H3>
                <Muted>{closing.description}</Muted>
                {/* CTA CV (primero) */}
                {hasCv && (
                    <SoftCard className="relative !bg-red-500 overflow-hidden">
                        {/* halo sutil */}
                        <span
                            className="pointer-events-none absolute -top-8 -right-10 h-32 w-32 rounded-full blur-2xl"
                            style={{
                                background: "rgb(var(--accent-rgb) / 0.18)",
                            }}
                        />

                        <div className="relative">
                            <Eyebrow>{cv?.label || "CV"}</Eyebrow>

                            <div className="mt-2 flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <div className="text-(--text) font-semibold text-base">
                                        {cv?.title || "Descargar CV"}
                                    </div>
                                    <div className="text-(--text-muted) text-sm leading-relaxed">
                                        {cv?.desc || "PDF actualizado para revisar experiencia y proyectos."}
                                    </div>
                                </div>

                                <span
                                    className="material-icons-outlined"
                                    style={{ color: "var(--accent-solid)" }}
                                    aria-hidden="true"
                                >
                                    download
                                </span>
                            </div>

                            <div className="mt-4">
                                <a
                                    href={cv.href}
                                    // download solo si parece archivo y no es externo (evita problemas CORS)
                                    download={!isExternal(cv.href) && isFile(cv.href) ? (cv?.fileName || true) : undefined}
                                    target={isExternal(cv.href) ? "_blank" : undefined}
                                    rel={isExternal(cv.href) ? "noreferrer" : undefined}
                                    className="
                          group inline-flex w-full items-center justify-between
                          rounded-xl border border-(--border)
                          px-4 py-3 transition
                          hover:brightness-110
                        "
                                    style={{
                                        background: "rgb(var(--accent-rgb) / 0.10)",
                                        boxShadow: "0 0 18px rgb(var(--accent-rgb) / 0.14)",
                                    }}
                                >
                                    <span
                                        className="text-sm font-semibold"
                                        style={{ color: "var(--accent-solid)" }}
                                    >
                                        {cv?.buttonText || "Descargar CV"}
                                    </span>

                                    <span
                                        className="material-icons-outlined text-sm transition-transform duration-200 group-hover:translate-x-0.5"
                                        style={{ color: "var(--accent-solid)" }}
                                        aria-hidden="true"
                                    >
                                        arrow_forward
                                    </span>
                                </a>

                                <div className="mt-2 text-xs text-(--text-muted)">
                                    {isExternal(cv.href)
                                        ? "Se abre en una pestaña nueva."
                                        : "Descarga directa en PDF."}
                                </div>
                            </div>
                        </div>
                    </SoftCard>
                )}
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
