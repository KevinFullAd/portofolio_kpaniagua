// src/components/ui/AbstractBackground.jsx
// Usa tus CSS vars: --accent-rgb / --accent-solid / etc.
// Si cambiás :root[data-accent="..."], el BG cambia solo.

const VARIANTS = {
    circles: (
        <>
            <circle cx="80%" cy="20%" r="180" fill="currentColor" opacity="0.08" />
            <circle cx="90%" cy="80%" r="140" fill="currentColor" opacity="0.12" />
            <circle cx="10%" cy="60%" r="100" fill="currentColor" opacity="0.10" />
            <circle cx="30%" cy="15%" r="60" fill="currentColor" opacity="0.15" />
        </>
    ),
    waves: (
        <>
            <path
                d="M0,150 Q150,100 300,150 T600,150 L600,0 L0,0 Z"
                fill="currentColor"
                opacity="0.06"
            />
            <path
                d="M0,250 Q200,200 400,250 T800,250 L800,400 L0,400 Z"
                fill="currentColor"
                opacity="0.10"
            />
            <ellipse cx="85%" cy="70%" rx="120" ry="80" fill="currentColor" opacity="0.08" />
        </>
    ),
    geometric: (
        <>
            <rect x="60%" y="-10%" width="200" height="200" fill="currentColor" opacity="0.08" rx="20" />
            <rect x="75%" y="60%" width="150" height="150" fill="currentColor" opacity="0.12" rx="15" />
            <rect x="-5%" y="40%" width="120" height="120" fill="currentColor" opacity="0.10" rx="12" />
            <circle cx="20%" cy="20%" r="70" fill="currentColor" opacity="0.09" />
        </>
    ),
    dots: (
        <>
            <circle cx="15%" cy="25%" r="50" fill="currentColor" opacity="0.10" />
            <circle cx="80%" cy="15%" r="70" fill="currentColor" opacity="0.08" />
            <circle cx="85%" cy="75%" r="90" fill="currentColor" opacity="0.12" />
            <circle cx="25%" cy="70%" r="40" fill="currentColor" opacity="0.15" />
            <circle cx="50%" cy="50%" r="30" fill="currentColor" opacity="0.07" />
            <circle cx="60%" cy="85%" r="50" fill="currentColor" opacity="0.10" />
        </>
    ),
    layers: (
        <>
            <ellipse cx="75%" cy="30%" rx="180" ry="120" fill="currentColor" opacity="0.06" />
            <ellipse cx="80%" cy="35%" rx="150" ry="100" fill="currentColor" opacity="0.08" />
            <ellipse cx="20%" cy="70%" rx="130" ry="90" fill="currentColor" opacity="0.10" />
            <circle cx="15%" cy="20%" r="80" fill="currentColor" opacity="0.12" />
        </>
    ),
    mixed: (
        <>
            <rect x="70%" y="10%" width="180" height="180" fill="currentColor" opacity="0.07" rx="90" />
            <circle cx="15%" cy="65%" r="110" fill="currentColor" opacity="0.10" />
            <path
                d="M-50,200 Q100,150 250,200 T550,200"
                stroke="currentColor"
                strokeWidth="80"
                fill="none"
                opacity="0.06"
            />
            <ellipse cx="80%" cy="80%" rx="100" ry="60" fill="currentColor" opacity="0.12" />
        </>
    ),
};

// src/components/ui/AbstractBackground.jsx

export function AbstractBackground({
    variant = "layers",
    animated = false,
    base = "transparent", // "transparent" | "black" | "white"
    className = "",
}) {
    const baseClass =
        base === "black"
            ? "bg-black"
            : base === "white"
                ? "bg-white"
                : "bg-transparent";

    const svgAnimation = animated
        ? { animation: "ab-float 28s ease-in-out infinite" }
        : undefined;

    const layerA = animated
        ? { animation: "ab-drift 40s ease-in-out infinite" }
        : undefined;

    const layerB = animated
        ? {
            animation: "ab-drift 55s ease-in-out infinite",
            animationDelay: "-18s",
        }
        : undefined;

    return (
        <div
            className={`absolute inset-0 ${baseClass} ${className}`}
            style={{ color: "rgb(var(--accent-rgb) / 1)" }}
            aria-hidden="true"
        >
            <svg
                className={`w-full h-full ${animated ? "ab-animate" : ""}`}
                style={svgAnimation}
                viewBox="0 0 400 400"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                {variant === "circles" && (
                    <>
                        <g style={layerA}>
                            <circle cx="80%" cy="20%" r="180" fill="currentColor" opacity="0.08" />
                            <circle cx="10%" cy="60%" r="100" fill="currentColor" opacity="0.10" />
                        </g>
                        <g style={layerB}>
                            <circle cx="90%" cy="80%" r="140" fill="currentColor" opacity="0.12" />
                            <circle cx="30%" cy="15%" r="60" fill="currentColor" opacity="0.15" />
                        </g>
                    </>
                )}

                {variant === "waves" && (
                    <>
                        <g style={layerA}>
                            <path
                                d="M0,140 Q160,100 320,140 T640,140 L640,0 L0,0 Z"
                                fill="currentColor"
                                opacity="0.06"
                            />
                        </g>
                        <g style={layerB}>
                            <path
                                d="M0,260 Q200,220 400,260 T800,260 L800,400 L0,400 Z"
                                fill="currentColor"
                                opacity="0.10"
                            />
                            <ellipse cx="85%" cy="70%" rx="120" ry="80" fill="currentColor" opacity="0.08" />
                        </g>
                    </>
                )}

                {variant === "geometric" && (
                    <>
                        <g style={layerA}>
                            <rect x="60%" y="-10%" width="200" height="200" rx="24" fill="currentColor" opacity="0.08" />
                            <circle cx="20%" cy="20%" r="70" fill="currentColor" opacity="0.09" />
                        </g>
                        <g style={layerB}>
                            <rect x="75%" y="60%" width="150" height="150" rx="18" fill="currentColor" opacity="0.12" />
                            <rect x="-5%" y="40%" width="120" height="120" rx="14" fill="currentColor" opacity="0.10" />
                        </g>
                    </>
                )}

                {variant === "dots" && (
                    <>
                        <g style={layerA}>
                            <circle cx="15%" cy="25%" r="50" fill="currentColor" opacity="0.10" />
                            <circle cx="80%" cy="15%" r="70" fill="currentColor" opacity="0.08" />
                            <circle cx="50%" cy="50%" r="30" fill="currentColor" opacity="0.07" />
                        </g>
                        <g style={layerB}>
                            <circle cx="85%" cy="75%" r="90" fill="currentColor" opacity="0.12" />
                            <circle cx="25%" cy="70%" r="40" fill="currentColor" opacity="0.15" />
                            <circle cx="60%" cy="85%" r="50" fill="currentColor" opacity="0.10" />
                        </g>
                    </>
                )}

                {variant === "layers" && (
                    <>
                        <g style={layerA}>
                            <ellipse cx="75%" cy="30%" rx="180" ry="120" fill="currentColor" opacity="0.06" />
                            <circle cx="15%" cy="20%" r="80" fill="currentColor" opacity="0.12" />
                        </g>
                        <g style={layerB}>
                            <ellipse cx="80%" cy="35%" rx="150" ry="100" fill="currentColor" opacity="0.08" />
                            <ellipse cx="20%" cy="70%" rx="130" ry="90" fill="currentColor" opacity="0.10" />
                        </g>
                    </>
                )}

                {variant === "mixed" && (
                    <>
                        <g style={layerA}>
                            <rect x="70%" y="10%" width="180" height="180" rx="90" fill="currentColor" opacity="0.07" />
                            <path
                                d="M-50,200 Q100,150 250,200 T550,200"
                                stroke="currentColor"
                                strokeWidth="80"
                                fill="none"
                                opacity="0.06"
                            />
                        </g>
                        <g style={layerB}>
                            <circle cx="15%" cy="65%" r="110" fill="currentColor" opacity="0.10" />
                            <ellipse cx="80%" cy="80%" rx="100" ry="60" fill="currentColor" opacity="0.12" />
                        </g>
                    </>
                )}
            </svg>
        </div>
    );
}
