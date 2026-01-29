// src/components/ui/ServiceCard.jsx
import React from "react";

export function ServiceCard({ title, description, icon, className = "" }) {
    const isMaterialIcon =
        typeof icon === "string" && !icon.includes("/") && !icon.includes(".");

    const isImg = typeof icon === "string" && (icon.includes("/") || icon.includes("."));
    const [hovered, setHovered] = React.useState(false);
    
    return (
        <div
            className={`
        rounded-2xl border border-(--border)
        p-5 md:p-6 transition hover:brightness-110
        ${className}
        `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ background: "rgb(255 255 255 / 0.02)" }}
        >
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 shadow shadow-amber-200/10 flex h-12 w-12 items-center justify-center rounded-xl border border-(--border) bg-(--background-elevated)">
                    {isMaterialIcon ? (
                        <span
                            className={`material-icons-outlined text-[28px] transition-colors  ease-in   
                                ${hovered ? "text-(--accent-solid)" : "text-(--text-muted)"}`} 
                            aria-hidden="true"
                        >
                            {icon}
                        </span>
                    ) : isImg ? (
                        <img src={icon} alt="" className="h-10 w-10 opacity-90" />
                    ) : (
                        <div
                            className="h-10 w-10 rounded-xl border border-(--border)"
                            style={{ background: "rgb(var(--accent-rgb) / 0.10)" }}
                        />
                    )}
                </div>

                {/* Text */}
                <div className="flex-1">
                    <div className={`transition-colors duration-200 text-lg font-semibold leading-snug ${hovered ? "text-black" : "text-(--text-muted)"}`}>
                        {title}
                    </div>
                    <div className="mt-1 text-(--text-muted) leading-relaxed">
                        {description}
                    </div>
 
                </div>
            </div>
        </div>
    );
}
