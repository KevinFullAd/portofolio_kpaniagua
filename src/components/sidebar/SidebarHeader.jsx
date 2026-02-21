import { ChevronDown } from "lucide-react";

export default function SidebarHeader({name, role, open, onToggleOpen }) {
    return (
        <div className="relative flex items-center gap-4 p-5"> 

            {/* Info */}
            <div className="flex-1 min-w-0">
                <h1 className="text-xl font-semibold text-(--text) leading-tight truncate">
                    {name}
                </h1>

                <span className="inline-block mt-1 px-3 py-1 text-xs rounded-sm bg-[color:var(--bg-card)] border border-[color:var(--border)] text-(--text-muted)">
                    {role}
                </span>
            </div>

            {/* Toggle (mobile) */}
            <button
                onClick={onToggleOpen}
                aria-label="Toggle contacts"
                className="
                lg:hidden
                ml-auto absolute right-0 top-0
                p-2 rounded-bl-2xl rounded-tr-xl w-10 h-10 overflow-hidden
                focus:outline-none focus-visible:outline-none
                "
                style={{
                    backgroundImage:
                        "linear-gradient(135deg, var(--accent-soft) 0%, transparent 90%)",
                }}
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-bl-2xl"
                    style={{
                        background: `
                    linear-gradient(to bottom right, rgb(var(--accent-rgb) / 0.95), rgb(var(--accent-rgb) / 0) 65%) top / 100% 1px no-repeat,
                    linear-gradient(to bottom right, rgb(var(--accent-rgb) / 0.95), rgb(var(--accent-rgb) / 0) 65%) left / 1px 100% no-repeat
                    `,
                    }}
                />
                <ChevronDown
                    style={{ color: "var(--accent-solid)" }}
                    className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                        }`}
                />
            </button>
        </div>
    );
}
