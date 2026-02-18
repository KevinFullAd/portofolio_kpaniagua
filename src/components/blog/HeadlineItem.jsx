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
                        className="material-icons-outlined text-sm mt-0.5"
                        aria-hidden="true"
                        style={{ color: "var(--text-accent)" }}
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
                        <div className="flex flex-wrap text-xs text-(--text-muted) items-center gap-2 pt-1">
                            <span>
                                {formatISODate(item.date)}
                            </span>
                            <span>
                                · {item.project}
                            </span>
                            <span>
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