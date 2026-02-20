// src/data/resume.data.js
export const resumeData = {
    hero: {
        eyebrow: "Resume",
        title: "Cómo llegué hasta acá",
        lead:
            "Mi recorrido en tecnología no fue lineal, pero sí constante. Aprendí haciendo: probando, equivocándome y resolviendo cosas reales en producción.",
        chips: ["Full Stack", "Frontend", "Backend en evolución", "Sistemas"],
    },

    timeline: {
        title: "Evolución",
        description:
            "Más que fechas, son etapas: qué hice, qué entendí y qué cambió en mi forma de trabajar.",
        items: [
            {
                id: "unq",
                type: "education",
                title: "UNQ — Primer contacto serio con IT",
                period: "2023 — 2024",
                note:
                    "Arranqué en la UNQ y fue el primer choque con el mundo IT de verdad. Entendí conceptos, empecé a conectar piezas y confirmé que esto me gustaba en serio. No fue un buen cierre académico, pero sí el punto donde me acomodé mentalmente para tomármelo en serio.",
            },
            {
                id: "utn",
                type: "education",
                title: "UTN — Consolidación y foco",
                period: "2024 — Actualidad",
                note:
                    "Retomé la formación con otra cabeza: constancia, práctica y objetivos claros. Hoy estoy terminando de formarme como técnico en programación, con una base mucho más sólida y aplicable al trabajo real.",
            },
            {
                id: "react-course",
                type: "education",
                title: "React — El punto de quiebre",
                period: "2024",
                note:
                    "Un curso de React me destrabó todo. Desde ahí mi foco pasó a ser frontend: componentes reutilizables, UI consistente, y pantallas que se entienden sin explicación.",
            },
            {
                id: "xg-support",
                type: "work",
                title: "XG Networks — Soporte técnico",
                period: "2024",
                bullets: [
                    "Ingreso como soporte técnico y empiezo a operar en escenarios reales.",
                    "Trabajo con redes y equipos (Cambium, TP-Link, entre otros).",
                    "Resolución de incidencias reales con impacto directo en el servicio.",
                ],
            },
            {
                id: "xg-systems",
                type: "work",
                title: "XG Networks — Área de Sistemas",
                period: "2025 — Actualidad",
                note:
                    "Después de un año de laburo constante, pasé al área de sistemas. Ahí empecé a tocar de todo: desarrollo, servidores, bases, redes e infraestructura. Esa mezcla me dio una visión más completa: no pensar solo en código, sino en el sistema entero.",
                bullets: [
                    "Desarrollo frontend y backend según necesidad del negocio.",
                    "Diseño y mantenimiento de bases de datos.",
                    "Administración de servidores (Windows Server y Ubuntu Server).",
                    "Trabajo intensivo con Linux (deploy, servicios, troubleshooting).",
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
                    "Trabajo con React y Tailwind con foco en claridad visual, componentes reutilizables y UX simple. Si algo confunde, se rediseña.",
            },
            {
                id: "backend",
                title: "Backend en crecimiento",
                desc:
                    "Estoy profundizando Node.js y NestJS: APIs, arquitectura, validaciones, flujos y lógica de negocio más seria.",
            },
            {
                id: "systems",
                title: "Visión integral de sistemas",
                desc:
                    "Haber pasado por soporte, redes, servidores y hardware me obliga a pensar extremo a extremo: qué falla, por qué, y cómo se sostiene en el tiempo.",
            },
            {
                id: "learning",
                title: "Aprendizaje constante",
                desc:
                    "Me interesa entender el porqué. Investigo, pruebo y documento para que lo que hago sea replicable y mantenible.",
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
                    "Me dio una base sólida de nube e infraestructura: servicios, conceptos y criterio para pensar despliegues y arquitectura con más claridad.",
                link: "https://drive.google.com/file/d/1JLVyM44kJRO7krF4QDS-UZ4-kxNgj5fh/view",
            },
            {
                id: "react",
                title: "React — Desarrollo Frontend",
                org: "Codo a Codo",
                description:
                    "Fue el quiebre que ordenó mi perfil: me dio base real de React y me llevó a enfocarme en frontend y diseño de interfaces.",
                link: "https://drive.google.com/file/d/1EttY8wnIhQ5nWKsM7sjRC-jjcoBcmkPH/view",
            },
        ],
    },

    closing: {
        eyebrow: "Hoy",
        title: "Hacia dónde voy",
        description:
            "Apunto a profundizarme en backend sin perder la mirada de producto y de sistema completo.",
        paragraphs: [
            "Sigo trabajando y aprendiendo en entornos reales, combinando frontend, backend y sistemas según el contexto.",
            "Mi objetivo es crecer como desarrollador integral, con foco en Node.js, NestJS y arquitectura de software.",
        ],
        cv: {
            href: "/assets/cv/kevin_paniagua_cv.pdf",
            title: "Descargar CV",
            desc: "PDF actualizado",
            fileName: "Kevin_Paniagua_cv.pdf",
            buttonText: "Descargar CV",
        },
    },
};