// src/components/portfolio/WorkCard.jsx
import React from "react";
import { Link } from "react-router-dom";

import { AbstractBackground } from "../ui/graphics/AbstractBackground";
import { Chip } from "../ui/primitives/Chip";
import { H3 } from "../ui/primitives/typography/H3";
import { Muted } from "../ui/primitives/typography/Muted";
import { Divider } from "../ui/primitives/Divider";

export function WorkCard({
    id,
    tag,
    title,
    description,
    stack,
    cta = "Ver proyecto",
    coverVariant = "layers",
    className = "",
}) {
    return (
        <article
            className={`
                h-auto w-full overflow-hidden
                rounded-xl relative
                border border-(--border)
                flex flex-col gap-4
                p-4
                ${className}
            `}
            style={{ boxShadow: "var(--shadow)" }}
        >
            {/* Fondo abstracto (no realista) */}
            <AbstractBackground
                variant={coverVariant}
                animated={false}
                base="transparent"
                className="absolute inset-0 -z-20"
            />

            {/* Overlay */}
            <div
                className="
                absolute inset-0 rounded-xl
                -z-10 opacity-10
                bg-linear-to-t
                from-black/80 via-black/40 to-black/10
                "
            />

            {/* Tag */}
            <div className="w-fit">
                <Chip>{tag}</Chip>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-end gap-2">
                <H3>{title}</H3>

                <div className="w-[70%] max-w-130">
                    <Muted className="text-(--text)">{description}</Muted>
                    <Divider className="w-[80%] my-2 opacity-60" />
                </div>

                <div className="min-h-4 flex justify-between items-center">
                    <span className="text-(--text-muted)">{stack}</span>

                    <Link
                        to={`/portfolio/${id}`}
                        className="
                            inline-flex items-center justify-center
                            w-35 h-8 rounded-full
                            font-semibold
                            hover:brightness-110 transition
                            px-4 py-1
                            "
                        style={{
                            background: "var(--accent-solid)",
                            color: "var(--bg-main)",
                            boxShadow: "var(--accent-glow)",
                        }}
                    >
                        {cta}
                    </Link>
                </div>
            </div>
        </article>
    );
}
