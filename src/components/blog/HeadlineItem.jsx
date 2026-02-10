import { formatISODate } from "../../lib/date";

export default function HeadlineItem({ item, onOpen }) {
    return (
        <button
            type="button"
            onClick={onOpen}
            className="w-full text-left"
        >
            <div className="group py-2">
                <div className="flex items-start gap-2">
                    <span
                        className="material-icons-outlined text-sm mt-[2px]"
                        aria-hidden="true"
                        style={{ color: "var(--text-muted)" }}
                    >
                        fiber_manual_record
                    </span>
                    <div className="min-w-0">
                        <div
                            className="text-(--text) text-sm font-semibold leading-snug group-hover:underline"
                            style={{ textUnderlineOffset: "3px" }}
                        >
                            {item.title}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                                {formatISODate(item.date)}
                            </span>
                            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                                · {item.project}
                            </span>
                            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                                · {item.category}
                            </span>
                        </div>
                    </div>

                    <span
                        className="material-icons-outlined ml-auto text-sm opacity-70 group-hover:opacity-100"
                        aria-hidden="true"
                        style={{ color: "var(--text-muted)" }}
                    >
                        arrow_forward
                    </span>
                </div>
            </div>
        </button>
    );
}