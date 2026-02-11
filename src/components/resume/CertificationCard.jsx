import { SoftCard } from "../ui/cards/SoftCard";
import { ThemedLink } from "../ui/primitives/ThemedLink";

export function CertificationCard({ title, org, year, description, href }) {
    return (
        <SoftCard className="relative p-4 h-full flex flex-col justify-between z-1">
            {/* acento institucional */}
            <span
                className="absolute left-0 top-0 h-full w-3 rounded-l-xl -z-1"
                style={{ background: "var(--accent-solid)" }}
                aria-hidden
            />

            <div className="pl-3 space-y-2">
                <div className="flex items-start justify-between gap-4">
                    <div className="text-(--text) font-semibold text-lg">
                        {title}
                    </div>
                    {year && (
                        <span className="text-sm text-(--text-muted)">
                            {year}
                        </span>
                    )}
                </div>

                {org && (
                    <div className="text-xs uppercase tracking-wide text-(--text-muted)">
                        {org}
                    </div>
                )}

                <p className="text-(--text-muted) leading-relaxed">
                    {description}
                </p>

            </div>
                {href && (
                    <div className="mt-2 pt-2  border-t border-(--border) flex justify-end ">
                        <ThemedLink href={href} external>
                            Ver certificado
                        </ThemedLink>
                    </div>
                )}
        </SoftCard>
    );
}
