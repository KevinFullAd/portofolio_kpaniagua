// src/data/contact.data.js
export const contactData = {
    email: "paniagua.kevin.damian@gmail.com",

    hero: {
        eyebrow: "Contacto",
        title: "Contactame",
        lead:
            "Si estás evaluando iniciar o mejorar un proyecto, escribime. Con contexto claro puedo responder de forma concreta.",
        chips: ["Proyectos", "Freelance", "Colaboraciones"],
    },

    form: {
        title: "Enviar mensaje",
        hint:
            "Si incluís contexto + objetivo + plazo, puedo darte una respuesta más precisa desde el primer intercambio.",
        areas: [
            { key: "frontend", label: "Frontend" },
            { key: "uiux", label: "UI/UX" },
            { key: "backend", label: "Backend" },
            { key: "consulting", label: "Consultoría" },
            { key: "other", label: "Otro" },
        ],
        placeholders: {
            firstName: "Nombre",
            lastName: "Apellido",
            email: "tu@email.com",
            subject: "Ej: Propuesta / Consulta / Proyecto",
            message: "Contexto, objetivo y plazo estimado…",
        },
        ctaText: "Enviar",
        directText: "Si preferís escribir directo:",
        directLinkText: "usar email",
        demoSuccess: "Mensaje preparado (modo demo).",
    },

    sidebar: {
        channelsTitle: "Canales",
        channelsLead: "Elegí el medio que te resulte más práctico.",
        quickActions: [
            {
                title: "Email",
                subtitle: "paniagua.kevin.damian@gmail.com",
                href: "mailto:paniagua.kevin.damian@gmail.com",
                icon: "mail",
                primary: true,
            },
            {
                title: "LinkedIn",
                subtitle: "in/kevinpani",
                href: "https://www.linkedin.com/in/kevinpani",
                icon: "work",
            },
            {
                title: "GitHub",
                subtitle: "KevinFullAd",
                href: "https://github.com/KevinFullAd",
                icon: "code",
            },
        ],

        fastTitle: "Para avanzar rápido",
        fastLead: "Con estos tres puntos ya podemos empezar.",
        bullets: [
            { title: "Contexto", desc: "Qué es el proyecto y a quién está dirigido." },
            { title: "Objetivo", desc: "Resultado esperado o problema a resolver." },
            { title: "Plazo", desc: "Fecha estimada o nivel de prioridad." },
        ],
    },
};