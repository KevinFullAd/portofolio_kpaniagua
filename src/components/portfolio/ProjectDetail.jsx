// src/components/portfolio/ProjectDetail.jsx
import { Link } from "react-router-dom";
import { AbstractBackground } from "../ui/AbstractBackground";

function Section({ title, paragraphs = [], bullets = [] }) {
    return (
        <section className="space-y-2">
            <h3 className="text-xl font-semibold text-(--text)">{title}</h3>

            {paragraphs.length > 0 && (
                <div className="space-y-2 text-(--text-muted)">
                    {paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
            )}

            {bullets.length > 0 && (
                <ul className="space-y-2 text-(--text-muted) list-disc pl-5">
                    {bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export function ProjectDetail({ work }) {
    const d = work.detail;

    return (
        <article className="flex flex-col gap-6">
            {/* Hero (mobile-first, escala a desktop con grid) */}
            <header
                className="
                relative overflow-hidden rounded-2xl
                border border-(--border)
                p-5 md:p-6
                "
                style={{ boxShadow: "var(--shadow)" }}
            >
                <AbstractBackground variant={work.coverVariant || "layers"} animated={false} className="-z-10" />

                <div
                    className="
                absolute inset-0 rounded-2xl
                bg-linear-to-t
                from-black/85 via-black/45 to-black/10
                "
                />

                <div className="relative z-10 grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-start">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 uppercase px-4 py-1 text-(--text-muted) text-[.7rem] rounded-full w-fit backdrop-blur-md">
                                {work.tag}
                            </div>

                            <Link
                                to="/portfolio"
                                className="text-(--text-muted) hover:text-(--text) transition text-sm"
                            >
                                ← Volver
                            </Link>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-(--text)">{work.title}</h1>
                        <p className="text-(--text-muted) max-w-prose">{d.hero?.summary}</p>

                        {Array.isArray(d.hero?.links) && d.hero.links.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                                {d.hero.links.map((l) => (
                                    <a
                                        key={l.href}
                                        href={l.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-3 py-1 rounded-full border border-(--border) text-(--text) hover:brightness-110 transition"
                                        style={{ backdropFilter: "blur(10px)", background: "rgb(255 255 255 / 0.06)" }}
                                    >
                                        {l.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
                        {d.highlights?.map((h) => (
                            <div
                                key={h.label}
                                className="rounded-xl border border-(--border) px-3 py-2"
                                style={{ background: "rgb(255 255 255 / 0.04)", backdropFilter: "blur(10px)" }}
                            >
                                <div className="text-[.75rem] text-(--text-muted)">{h.label}</div>
                                <div className="text-sm text-(--text) font-medium">{h.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* Contenido */}
            <div className="grid gap-6 md:gap-8">
                {d.sections?.map((s) => (
                    <Section key={s.id} title={s.title} paragraphs={s.paragraphs} bullets={s.bullets} />
                ))}

                {d.flow && (
                    <section className="space-y-3">
                        <h3 className="text-xl font-semibold text-(--text)">{d.flow.title}</h3>

                        <div className="grid gap-3 md:grid-cols-3">
                            {d.flow.steps.map((st, idx) => (
                                <div
                                    key={st.title}
                                    className="rounded-2xl border border-(--border) p-4"
                                    style={{ boxShadow: "var(--shadow)" }}
                                >
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold"
                                            style={{ background: "var(--accent-soft)", color: "var(--accent-solid)" }}
                                        >
                                            {idx + 1}
                                        </span>
                                        <h4 className="font-semibold text-(--text)">{st.title}</h4>
                                    </div>
                                    <p className="mt-2 text-(--text-muted)">{st.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {d.decisions && (
                    <section className="space-y-3">
                        <h3 className="text-xl font-semibold text-(--text)">{d.decisions.title}</h3>

                        <div className="grid gap-3 md:grid-cols-2">
                            {d.decisions.items.map((it) => (
                                <div
                                    key={it.decision}
                                    className="rounded-2xl border border-(--border) p-4"
                                    style={{ background: "rgb(255 255 255 / 0.03)" }}
                                >
                                    <div className="text-(--text) font-semibold">{it.decision}</div>
                                    <div className="text-(--text-muted) mt-1">{it.reason}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {d.visual && (
                    <Section title={d.visual.title} bullets={d.visual.bullets} />
                )}
            </div>

            {/* Footer nav dentro de la rama portfolio */}
            <footer className="pt-2">
                <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-(--text-muted) hover:text-(--text) transition"
                >
                    ← Volver a Mis trabajos
                </Link>
            </footer>
        </article>
    );
}
