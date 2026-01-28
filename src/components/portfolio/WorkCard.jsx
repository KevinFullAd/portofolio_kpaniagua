// src/components/portfolio/WorkCard.jsx
import { Link } from "react-router-dom";
import { AbstractBackground } from "../ui/AbstractBackground";

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
        <div
            className={`
        h-50 w-full overflow-hidden
        rounded-xl relative
        border border-(--border)
        gap-4 flex flex-col
        p-4
        ${className}
      `}
            style={{ boxShadow: "var(--shadow)" }}
        >
            <AbstractBackground variant={coverVariant} animated={false} base="transparent" className="-z-10" />

            <div
                className="
                absolute inset-0
                rounded-xl
                -z-10 opacity-15
                bg-linear-to-t
                from-black/80
                via-black/40
                to-black/10
                "
            />

            <div className="bg-gray-200 uppercase px-6 py-1 text-(--text-muted) text-[.7rem] rounded-full w-fit backdrop-blur-md">
                {tag}
            </div>

            <div>
                <h3 className="text-2xl text-(--text) font-bold">{title}</h3>

                <div className="w-[65%]">
                    <p className="text-(--text)">{description}</p>
                    <div className="h-px bg-(--border) w-[80%] my-1" />
                </div>

                <div className="min-h-4 flex justify-between items-center">
                    <span className="text-(--text-muted)">{stack}</span>

                    {/* Sin loading: navegación instantánea (SPA) */}
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
        </div>
    );
}
