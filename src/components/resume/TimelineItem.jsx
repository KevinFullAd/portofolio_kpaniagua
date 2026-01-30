import { Muted } from "../ui/primitives/typography/Muted";
export function TimelineItem({ type, title, period, note, bullets = [] }) {
    const dot =
        type === "work"
            ? "var(--accent-solid)"
            : "rgb(var(--accent-rgb) / 0.45)";

    return (
        <div className="relative pl-7">
            {/* vertical line */}
            <span
                className="absolute left-[10px] top-0 bottom-0 w-px"
                style={{ background: "var(--border)" }}
                aria-hidden
            />
            {/* dot */}
            <span
                className="absolute left-[5px] top-2 w-[10px] h-[10px] rounded-full"
                style={{ background: dot }}
                aria-hidden
            />

            <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="text-(--text) font-semibold">{title}</div>
                    {period && (
                        <div className="text-sm text-(--text-muted)">{period}</div>
                    )}
                </div>

                {note && <Muted>{note}</Muted>}

                {bullets.length > 0 && (
                    <ul className="mt-2 space-y-1 list-disc pl-5">
                        {bullets.map((b, i) => (
                            <li key={i} className="text-(--text-muted) leading-relaxed">
                                {b}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}