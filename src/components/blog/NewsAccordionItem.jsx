import { Muted } from "../ui/primitives/typography/Muted";
import { Divider } from "../ui/primitives/Divider";
import TagPill from "./TagPill";
import { formatISODate } from "../../lib/date";


export default function NewsAccordionItem({ item, open, onToggle }) {
    const accentShadow = "0 0 0 1px rgb(var(--accent-rgb) / 0.35), 0 0 30px rgb(var(--accent-rgb) / 0.18)";
    const baseShadow = "0 0 0 1px rgb(255 255 255 / 0.06)";
    const bg = open ? "rgb(var(--accent-rgb) / 0.06)" : "rgb(255 255 255 / 0.02)";

    return (
        <div
            className="rounded-2xl border border-(--border) transition"
            style={{
                background: bg,
                boxShadow: open ? accentShadow : baseShadow,
            }}
        >
            <button
                type="button"
                onClick={onToggle}
                className="w-full text-left p-4 transition hover:brightness-110"
                aria-expanded={open}
            >
                <div className="flex items-start gap-3">
                    <div className="min-w-0 flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <TagPill>{item.category}</TagPill>
                            <TagPill>{item.type}</TagPill>
                            <TagPill>{item.project}</TagPill>
                            <span className="text-xs whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                                · {formatISODate(item.date)}
                            </span>
                        </div>

                        <div className={` font-semibold leading-snug" + ${open ? "text-(--text-accent)" : "text(--text)"}`}>
                            {item.title}
                        </div>

                        <Muted className="text-sm max-w-prose">{item.summary}</Muted>
                    </div>

                    <span
                        className="material-icons-outlined ml-auto text-sm mt-1 transition-transform"
                        aria-hidden="true"
                        style={{
                            color: "var(--text-muted)",
                            transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                    >
                        expand_more
                    </span>
                </div>
            </button>

            {/* Animación de apertura: maxHeight + fade */}
            <div
                className="overflow-hidden transition-all duration-200"
                style={{
                    maxHeight: open ? 420 : 0,
                    opacity: open ? 1 : 0,
                }}
                aria-hidden={!open}
            >
                <div className="px-4 pb-4">
                    <Divider className="opacity-60" />

                    <div className="pt-3 space-y-3">
                        <div className="flex flex-wrap gap-2">
                            {item.tags.slice(0, 8).map((t) => (
                                <span key={t} className="text-xs" style={{ color: "var(--text-muted)" }}>
                                    #{t}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-2">
                            <div className="text-sm font-semibold text-(--text)">Qué cambió</div>
                            <Muted className="text-sm">{item.details.what}</Muted>

                            <div className="text-sm font-semibold text-(--text)">Por qué</div>
                            <Muted className="text-sm">{item.details.why}</Muted>

                            <div className="text-sm font-semibold text-(--text)">Próximo</div>
                            <Muted className="text-sm">{item.details.next}</Muted>
                        </div>

                        {item.links?.length ? (
                            <div className="flex flex-wrap gap-2 pt-1">
                                {item.links.map((l) => {
                                    const isExternal = /^https?:\/\//i.test(l.href);
                                    return (
                                        <a
                                            key={l.href}
                                            href={l.href}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noopener noreferrer" : undefined}
                                            className="rounded-full px-4 py-2 text-sm border border-(--border) transition hover:brightness-110"
                                            style={{
                                                background: "rgb(var(--accent-rgb) / 0.10)",
                                                color: "var(--accent-solid)",
                                            }}
                                        >
                                            {l.label}
                                        </a>
                                    );
                                })}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}