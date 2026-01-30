// src/data/resume.data.js
export const resumeData = {
    hero: {
        eyebrow: "Resume",
        title: "Cómo llegué hasta acá",
        lead:
            "Mi recorrido en tecnología no fue lineal, pero sí constante. Aprendí probando, equivocándome y haciéndome cargo de sistemas reales.",
        chips: ["Full Stack", "Frontend", "Backend en evolución", "Sistemas"],
    },

    timeline: {
        title: "Evolución",
        description:
            "No se trata solo de fechas, sino de qué aprendí en cada etapa y cómo eso influyó en lo que hago hoy.",
        items: [
            {
                id: "unq",
                type: "education",
                title: "UNQ — Primer contacto serio con IT",
                period: "2023 — 2024",
                note:
                    "Iniciar la carrera en la UNQ me abrió los ojos. Empecé a entender cómo funciona el mundo IT y descubrí una pasión real por la tecnología. No fue un buen cierre académico, pero sí un punto de inflexión personal.",
            },
            {
                id: "utn",
                type: "education",
                title: "UTN — Consolidación y foco",
                period: "2024 — Actualidad",
                note:
                    "Retomé la formación con otra mentalidad: constancia, práctica y objetivos claros. Hoy estoy terminando de formarme como técnico en programación, con una base mucho más sólida.",
            },
            {
                id: "react-course",
                type: "education",
                title: "React — El punto de quiebre",
                period: "2024",
                note:
                    "Un curso de React marcó un antes y un después. Desde entonces me dedico principalmente al frontend, con foco en interfaces claras, escalables y bien pensadas.",
            },
            {
                id: "xg-support",
                type: "work",
                title: "XG Networks — Soporte técnico",
                period: "2024",
                bullets: [
                    "Ingreso como soporte técnico.",
                    "Trabajo con redes y equipos (Cambium, TP-Link, entre otros).",
                    "Resolución de incidencias reales en entornos productivos.",
                ],
            },
            {
                id: "xg-systems",
                type: "work",
                title: "XG Networks — Área de Sistemas",
                period: "2025 — Actualidad",
                note:
                    "Después de un año de compromiso constante, fui promovido como asistente del área de sistemas. Desde entonces pasé por prácticamente todas las áreas técnicas.",
                bullets: [
                    "Desarrollo frontend y backend.",
                    "Diseño y mantenimiento de bases de datos.",
                    "Administración de servidores (Windows Server y Ubuntu Server).",
                    "Trabajo intensivo con Linux.",
                    "Redes, infraestructura y mantenimiento de hardware.",
                ],
            },
        ],
    },

    strengths: {
        title: "Cómo trabajo hoy",
        items: [
            {
                id: "frontend",
                title: "Frontend con criterio",
                desc:
                    "Trabajo con React y Tailwind buscando claridad visual, reutilización de componentes y una buena experiencia de usuario.",
            },
            {
                id: "backend",
                title: "Backend en crecimiento",
                desc:
                    "Estoy profundizando en Node.js y NestJS, explorando arquitectura, APIs y lógica de negocio más robusta.",
            },
            {
                id: "systems",
                title: "Visión integral de sistemas",
                desc:
                    "Haber pasado por soporte, redes, servidores y hardware me permite pensar soluciones completas, no solo código.",
            },
            {
                id: "learning",
                title: "Aprendizaje constante",
                desc:
                    "Me interesa entender el porqué de las cosas. Investigo, pruebo y documento para poder escalar y mejorar.",
            },
        ],
    },
    
    certifications: {
        title: "Formación complementaria",
        items: [
            {
                id: "azure",
                title: "Azure — Fundamentos de Cloud",
                org: "Junior Achievement Argentina",
                description:
                    "Me dio una base sólida sobre cómo funciona la nube, la infraestructura y los servicios, conceptos que hoy aplico al pensar sistemas reales.",
                link: "https://drive.google.com/file/d/1JLVyM44kJRO7krF4QDS-UZ4-kxNgj5fh/view",
            },
            {
                id: "react",
                title: "React — Desarrollo Frontend",
                org: "Codo a Codo",
                description:
                    "Fue el punto de quiebre que definió mi camino profesional y mi enfoque actual en frontend.",
                link: "https://drive.google.com/file/d/1EttY8wnIhQ5nWKsM7sjRC-jjcoBcmkPH/view",
            },
        ],
    },


    closing: {
        eyebrow: "Hoy",
        title: "Hacia dónde voy",
        description:
            "Actualmente apunto a profundizarme en desarrollo backend, sin perder la mirada de producto y sistema completo.",
        paragraphs: [
            "Sigo trabajando y aprendiendo en entornos reales, combinando frontend, backend y sistemas.",
            "Mi objetivo es crecer como desarrollador integral, con foco en Node.js, NestJS y arquitectura de software.",
        ],
    },
};
