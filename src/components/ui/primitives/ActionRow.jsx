// src/components/ActionRow.jsx (o donde lo tengas)
import { getLinkBehavior } from "../../../lib/linking";
import { useState } from "react";

export default function ActionRow({ action }) {
    const { title, subtitle, href, icon } = action;
    const { target, rel, external } = getLinkBehavior(href);

    const [isHovered, setIsHovered] = useState(false);

    return (
        <a  href={href} 
            onMouseEnter={() => setIsHovered(true)}     
            onMouseLeave={() => setIsHovered(false)} 
            target={target} 
            rel={rel} 
            className="block">
            <div
                className={"flex items-center gap-3 rounded-xl border border-(--border) px-4 py-3 transition hover:brightness-110 " + 
                    (isHovered ? "bg-(--accent-soft)" : "bg-transparent")
                } 
            >
                <span
                    className={"material-icons-outlined  transition-colors duration-200 " + (isHovered ? "text-(--accent-solid)" : "text-(--text-muted)")}
                    aria-hidden="true"
                >
                    {icon}
                </span>

                <div className="min-w-0">
                    <div className="text-(--text) font-semibold leading-snug">{title}</div>
                    {subtitle ? <div className="text-(--text-muted) text-xs">{subtitle}</div> : null}
                </div>

                <span
                    className={"material-icons-outlined ml-auto text-sm " + (isHovered ? "text-(--accent-solid)" : "text-(--text-muted)")} 
                    aria-hidden="true"
                >
                    {external ? "open_in_new" : "arrow_forward"}
                </span>
            </div>
        </a>
    );
}
