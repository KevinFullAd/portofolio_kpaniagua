// src/data/about.data.js
// Todo el contenido editable desde acá.

export const aboutData = {
    intro: {
        title: "Sobre mí",
        chips: ["UI/UX", "Frontend", "Product"],
        paragraphs: [
            "Soy Kevin Paniagua, diseñador UI/UX y desarrollador frontend. Me gusta crear productos que se entienden rápido y se sienten sólidos desde el primer uso.",
            "Disfruto transformar ideas (o problemas) en interfaces limpias, con buena jerarquía, ritmo visual y detalles prolijos. Busco que el diseño no solo se vea bien, sino que sea claro, útil y fácil de mantener.",
        ],
        intent: {
            title: "Mi intención",
            text:
                "Diseñar experiencias claras y consistentes, con detalles cuidados, para que el producto se sienta profesional desde el primer vistazo.",
        },
    },

    // “Mapa visual” de lectura (antes estaba hardcodeado en About.jsx)
    map: {
        eyebrow: "Mapa de lectura",
        title: "¿Qué vas a encontrar acá?",
        description:
            "Pensado para que puedas entender rápido quién soy, cómo trabajo y que puedo aportar.",
        items: [
            { title: "Conoceme", desc: "Una idea clara de quién soy y qué valoro al diseñar." },
            { title: "Como pienso", desc: "Principios simples que guían mis decisiones de UI/UX." },
            { title: "Como trabajo", desc: "Proceso corto, ordenado y repetible para avanzar rápido." },
            { title: "Que hago", desc: "Áreas donde puedo aportar: diseño, frontend y sistema visual." },
            { title: "Próximo paso", desc: "Explorá mis proyectos o escribime para charlar una idea." },
        ],
    },

    shortcuts: {
        cardTitle: "Si querés ir directo",
        portfolio: {
            href: "/portfolio",
            title: "Ver portfolio",
            desc: "Proyectos y casos",
        },
        contactCta: {
            title: "Escribime",
            // el valor se toma desde closing.links[0].value por defecto si existe
        },
    },

    oneLiner: {
        eyebrow: "En una línea",
        text: "Interfaces simples, jerarquía clara y un sistema visual listo para escalar.",
    },

    story: {
        eyebrow: "Un poco más personal",
        title: "Que busco cuando diseño",
        description:
            "Me interesa diseñar con intención: que cada decisión tenga un porqué y se sienta natural.",
        highlightPill: "Claridad · Consistencia · Ritmo · Detalles",
        paragraphs: [
            "Para mí, una buena experiencia es la que te guía sin que tengas que pensar demasiado. Me enfoco en orden, consistencia y pequeños detalles que hacen que todo se perciba profesional.",
            "Me interesa el equilibrio entre estética y utilidad: que el producto sea agradable, pero también rápido, accesible y escalable.",
        ],
        focus: {
            eyebrow: "En lo que más me fijo",
            items: [
                { t: "Claridad", d: "que el usuario entienda qué hacer sin esfuerzo." },
                { t: "Consistencia", d: "que todo siga las mismas reglas visuales." },
                { t: "Ritmo", d: "espacios, jerarquía y lectura fluida." },
                { t: "Detalles", d: "microinteracciones y terminaciones prolijas." },
            ],
        },
    },

    approach: {
        eyebrow: "Mi forma de trabajar",
        title: "Como trabajo",
        description:
            "Orden, criterio y velocidad. Prefiero avanzar con pasos claros y validar temprano.",
        tags: ["Prototipo → Feedback", "Diseño → Implementación"],
        bullets: [
            "Entiendo el objetivo y el usuario antes de diseñar.",
            "Diseño con un sistema (tokens/estilos) para mantener coherencia y escalar fácil.",
            "Prototipo e itero: pruebo, recibo feedback y ajusto.",
            "Implemento con componentes reutilizables y cierro con detalles y pulido.",
        ],
        bulletNotes: [
            "Primero claridad: objetivos, usuario y contexto.",
            "Consistencia para escalar sin romper estilo.",
            "Iterar rápido evita perfeccionismo inútil.",
            "Entregables reutilizables para mantener fácil.",
        ],
    },

    services: {
        eyebrow: "Lo que ofrezco",
        title: "Qué hago",
        description: "Servicios enfocados en diseño, producto y desarrollo frontend.",
        items: [
            {
                id: "uxui",
                title: "UI / UX Design",
                description: "Interfaces claras y consistentes, con foco en jerarquía y usabilidad.",
                icon: "layers",
            },
            {
                id: "frontend",
                title: "Frontend Development",
                description: "Implementación de interfaces modernas con componentes reutilizables.",
                icon: "code",
            },
            {
                id: "systems",
                title: "Design Systems",
                description: "Tokens, reglas y patrones para escalar sin perder coherencia visual.",
                icon: "schema",
            },
            {
                id: "product",
                title: "Producto & Prototipado",
                description: "Prototipos rápidos para validar flujos y decisiones.",
                icon: "auto_graph",
            },
        ],
    },

    closing: {
        eyebrow: "Contacto",
        title: "Si querés, charlamos",
        description:
            "Si querés contarme una idea o ver cómo podríamos trabajar, escribime.",
        paragraphs: [
            "Si te interesa trabajar conmigo o querés contarme una idea, escribime. Me gusta entender bien el contexto antes de proponer soluciones.",
            "Podés ver mis proyectos en Portfolio o contactarme directamente.",
        ],
        linksTitle: "Links",
        links: [
            {
                label: "Email",
                href: "mailto:kevin.paniagua@gmail.com",
                value: "kevin.paniagua@gmail.com",
            },
            // { label: "LinkedIn", href: "https://linkedin.com/in/tuusuario", value: "linkedin.com/in/tuusuario" },
            // { label: "GitHub", href: "https://github.com/tuusuario", value: "github.com/tuusuario" },
        ],
    },
};
