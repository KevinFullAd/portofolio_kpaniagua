// src/data/about.data.js
// Todo el contenido editable desde acá.

export const aboutData = {
    intro: {
        title: "Sobre mí",
        chips: ["Full-Stack", "Producto", "Experiencia"],
        paragraphs: [
            "Soy Kevin Paniagua, desarrollador full-stack con foco en producto. Me interesa construir soluciones claras, funcionales y bien pensadas, desde la idea inicial hasta la implementación final.",
            "Trabajo entendiendo el problema antes de elegir la solución. Diseño la estructura, defino flujos y desarrollo sistemas que sean fáciles de usar, mantener y escalar. Busco equilibrio entre experiencia, lógica y solidez técnica.",
        ],
        intent: {
            title: "Mi intención",
            text:
                "Construir productos bien resueltos, donde cada decisión —visual o técnica— tenga un propósito claro.",
        },
    },

    // “Mapa visual” de lectura
    map: {
        eyebrow: "Mapa de lectura",
        title: "¿Qué vas a encontrar acá?",
        description:
            "Una visión general de quién soy, cómo pienso y cómo trabajo al construir productos digitales.",
        items: [
            { title: "Quién soy", desc: "Mi perfil y el enfoque con el que encaro los proyectos." },
            { title: "Cómo pienso", desc: "Criterios que uso para tomar decisiones técnicas y de producto." },
            { title: "Cómo trabajo", desc: "Un proceso ordenado para avanzar sin perder foco." },
            { title: "Qué hago", desc: "Las áreas donde puedo aportar valor real." },
            { title: "Próximo paso", desc: "Ver proyectos o ponerte en contacto conmigo." },
        ],
    },

    shortcuts: {
        cardTitle: "Si querés ir directo",
        portfolio: {
            href: "/portfolio",
            title: "Ver portfolio",
            desc: "Proyectos y casos reales",
        },
        contactCta: {
            title: "Escribime",
            // el valor se toma desde closing.links[0].value por defecto si existe
        },
    },

    oneLiner: {
        eyebrow: "En una línea",
        text: "Desarrollo productos claros, sólidos y pensados para crecer.",
    },

    story: {
        eyebrow: "Un poco más personal",
        title: "Qué busco cuando construyo un producto",
        description:
            "Me interesa trabajar con intención: entender bien el problema y construir soluciones simples pero robustas.",
        highlightPill: "Claridad · Estructura · Consistencia · Criterio",
        paragraphs: [
            "Para mí, un buen producto es el que se entiende rápido y funciona sin fricción, tanto para el usuario como para quien lo mantiene. Me enfoco en estructura, orden y decisiones coherentes.",
            "Disfruto pensar en cómo se conectan las partes: lógica, datos, interfaz y experiencia. Busco que el sistema completo tenga sentido, no solo una parte aislada.",
        ],
        focus: {
            eyebrow: "En lo que más me fijo",
            items: [
                { t: "Claridad", d: "que el producto sea fácil de entender y usar." },
                { t: "Estructura", d: "que la base técnica y lógica esté bien definida." },
                { t: "Consistencia", d: "que todo siga reglas claras a medida que crece." },
                { t: "Detalles", d: "terminaciones cuidadas que elevan la calidad final." },
            ],
        },
    },

    approach: {
        eyebrow: "Mi forma de trabajar",
        title: "Cómo trabajo",
        description:
            "Orden, criterio y avance constante. Prefiero procesos claros y validación temprana.",
        tags: ["Idea → Estructura → Construcción", "Iterar → Ajustar → Consolidar"],
        bullets: [
            "Entiendo el objetivo, el usuario y el contexto antes de construir.",
            "Defino estructura, flujos y decisiones clave desde el inicio.",
            "Itero rápido para validar sin sobre-complicar.",
            "Implemento soluciones completas, cuidando tanto la lógica como la experiencia.",
        ],
        bulletNotes: [
            "Entender bien el problema evita retrabajo.",
            "Una buena estructura ahorra tiempo a largo plazo.",
            "Iterar temprano reduce errores grandes.",
            "Pensar en mantenimiento es parte del desarrollo.",
        ],
    },

    services: {
        eyebrow: "Lo que hago",
        title: "Cómo puedo aportar",
        description: "Acompaño productos desde la idea hasta una solución funcional.",
        items: [
            {
                id: "fullstack",
                title: "Desarrollo Full-Stack",
                description: "Construcción de productos completos, desde la lógica y datos hasta la interfaz.",
                icon: "code",
            },
            {
                id: "product",
                title: "Producto & Arquitectura",
                description: "Definición de flujos, estructura y decisiones pensadas para escalar.",
                icon: "auto_graph",
            },
            {
                id: "uxui",
                title: "Experiencia & UI",
                description: "Interfaces claras y funcionales, alineadas al objetivo del producto.",
                icon: "layers",
            },
            {
                id: "systems",
                title: "Sistemas & Consistencia",
                description: "Criterios y patrones que mantienen el orden a medida que el producto crece.",
                icon: "schema",
            },
        ],
    },

    closing: {
        eyebrow: "Contacto",
        title: "Charlemos",
        description:
            "Si tenés una idea, un proyecto o simplemente querés intercambiar, escribime.",
        paragraphs: [
            "Me gusta entender bien el contexto antes de proponer soluciones. Si creés que puedo aportar, charlamos.",
            "Podés ver mis proyectos en el portfolio o contactarme directamente.",
        ],
        linksTitle: "Links",
        links: [
            {
                label: "Email",
                href: "mailto:kevin.paniagua@gmail.com",
                value: "kevin.paniagua@gmail.com",
            },
            // { label: "LinkedIn", href: "https://linkedin.com/in/tuusuario", value: "linkedin.com/in/tuusuario" },
            // { label: "GitHub", href: "https://github.com/tuusuario", value: "github.com/in/tuusuario" },
        ],
    },
};
