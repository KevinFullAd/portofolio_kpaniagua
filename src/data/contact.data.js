// src/data/contact.data.js
export const contactData = {
    email: "kevin.paniagua@gmail.com",

    hero: {
        eyebrow: "Contacto",
        title: "Contactame",
        lead:
            "Si querés escalar un proyecto o estás evaluando sumar a alguien al equipo, dejame un mensaje. Respondo por mail.",
        chips: ["Proyectos", "Freelance", "Colaboraciones"],
    },

    form: {
        title: "Enviar mensaje",
        hint:
            "Ideal si me contás contexto + objetivo + plazo. Con eso ya puedo responder con algo concreto.",
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
            message: "Qué necesitás, para quién, y en qué plazo…",
        },
        ctaText: "send",
        directText: "Si preferís directo:",
        directLinkText: "usar email",
        demoSuccess: "Mensaje listo (modo demo).",
    },

    sidebar: {
        channelsTitle: "Canales",
        channelsLead: "Elegí el que te resulte más cómodo.",
        quickActions: [
            {
                title: "Email",
                subtitle: "kevin.paniagua@gmail.com",
                href: "mailto:kevin.paniagua@gmail.com",
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
        fastLead: "3 líneas y estamos.",
        bullets: [
            { title: "Contexto", desc: "Qué es el proyecto y para quién." },
            { title: "Objetivo", desc: "Qué querés lograr (resultado esperado)." },
            { title: "Plazo", desc: "Fecha ideal o prioridad." },
        ],
    },
};
