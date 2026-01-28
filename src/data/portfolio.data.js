// src/data/portfolioData.js
export const portfolioData = {
    page: { title: "Mis trabajos" },

    works: [
        {
            id: "mil-comidas",
            tag: "App · UX/UI",
            title: "Mil comidas",
            description: "Recetas y sugerencias en base a ingredientes disponibles y preferencias.",
            stack: "React · API · TailwindCSS",
            cta: "Ver proyecto",
            coverVariant: "layers",

            // Detalle (solo textos / estructura escalable)
            detail: {
                hero: {
                    summary:
                        "Generador de recetas personalizadas a partir de lo que ya tenés en casa, con filtros simples y resultados accionables.",
                    links: [
                        // { label: "Demo", href: "https://..." },
                        // { label: "Figma", href: "https://..." },
                        // { label: "GitHub", href: "https://..." },
                    ],
                },

                highlights: [
                    { label: "Rol", value: "UI/UX · Frontend" },
                    { label: "Plataforma", value: "Mobile-first" },
                    { label: "Estado", value: "Concept / MVP" },
                    { label: "Stack", value: "React · API · TailwindCSS" },
                ],

                sections: [
                    {
                        id: "problem",
                        title: "Problema",
                        bullets: [
                            "Decidir qué cocinar con ingredientes limitados suele ser lento y frustrante.",
                            "La mayoría de soluciones obligan a buscar manualmente y filtrar en exceso.",
                            "Los resultados no siempre son accionables (faltan pasos claros o alternativas).",
                        ],
                    },
                    {
                        id: "goal",
                        title: "Objetivo",
                        paragraphs: [
                            "Reducir la fricción de la decisión y convertir ingredientes disponibles en opciones claras en pocos pasos, priorizando una experiencia móvil rápida y legible.",
                        ],
                    },
                    {
                        id: "solution",
                        title: "Solución",
                        bullets: [
                            "Ingreso rápido de ingredientes (mínimo esfuerzo).",
                            "Preferencias simples (dieta, tiempo, gustos).",
                            "Recetas generadas con pasos claros y alternativas posibles.",
                        ],
                    },
                ],

                flow: {
                    title: "Flujo principal",
                    steps: [
                        { title: "Ingredientes", description: "Seleccionás lo que tenés disponible en casa." },
                        { title: "Preferencias", description: "Indicás restricciones, gustos y tiempo." },
                        { title: "Resultados", description: "Recetas viables, claras y listas para ejecutar." },
                    ],
                },

                decisions: {
                    title: "Decisiones de diseño",
                    items: [
                        { decision: "CTA único y visible", reason: "Reduce indecisión y acelera el avance." },
                        { decision: "Jerarquía tipográfica fuerte", reason: "Lectura rápida en mobile." },
                        { decision: "Inputs mínimos", reason: "Aumenta velocidad percibida y reduce abandono." },
                        { decision: "Cards por resultado", reason: "Comparación rápida y escaneable." },
                    ],
                },

                visual: {
                    title: "Sistema visual",
                    bullets: [
                        "Tokens por CSS variables (tema + acento por data-accent).",
                        "Fondos abstractos por variantes (recolorizables).",
                        "Radio amplio y sombras suaves para profundidad sin ruido.",
                    ],
                },
            },
        },
    ],
};
