export const blogItems = [
    {
        id: "b-001",
        date: "2026-02-10",
        category: "Release",
        project: "API Boilerplate (NestJS)",
        type: "Backend",
        title: "Publicación inicial: API Boilerplate con NestJS",
        summary:
            "Subí mi boilerplate backend con estructura modular, validación centralizada y configuración tipada.",
        tags: ["nestjs", "backend", "architecture", "open-source"],
        details: {
            what:
                "Publiqué el repositorio base para APIs con NestJS. Incluye estructura por dominios, validación global con class-validator y manejo de variables de entorno tipadas.",
            why:
                "Quería un punto de partida sólido para futuros proyectos y algo reutilizable que refleje mi forma de trabajar.",
            next:
                "Agregar logging estructurado, manejo global de errores y tests e2e básicos.",
        },
        links: [
            { label: "Repositorio", href: "https://github.com/tuusuario/api-boilerplate" },
        ],
    },
    {
        id: "b-002",
        date: "2026-02-08",
        category: "Devlog",
        project: "Portfolio v3",
        type: "Frontend",
        title: "Refactor completo del About y Resume",
        summary:
            "Separé las secciones en componentes desacoplados y agregué animaciones consistentes con Reveal.",
        tags: ["react", "refactor", "architecture", "ui"],
        details: {
            what:
                "Reorganicé About y Resume en secciones independientes para mejorar mantenibilidad y claridad.",
            why:
                "El archivo original empezaba a crecer demasiado y quería una estructura escalable.",
            next:
                "Aplicar el mismo patrón modular al Blog y Portfolio.",
        },
        links: [],
    },
    {
        id: "b-003",
        date: "2026-02-06",
        category: "Nota técnica",
        project: "Infraestructura",
        type: "DevOps",
        title: "CI mínima con GitHub Actions",
        summary:
            "Configuré workflow con lint, tests y build en cada PR para evitar merges rotos.",
        tags: ["ci", "github-actions", "quality"],
        details: {
            what:
                "Agregué un pipeline simple que corre ESLint, tests y build automáticamente.",
            why:
                "Evita errores básicos y mantiene el proyecto estable.",
            next:
                "Agregar cache de dependencias y matrix por versiones de Node.",
        },
        links: [],
    },
    {
        id: "b-004",
        date: "2026-02-03",
        category: "Decisión",
        project: "API Boilerplate (NestJS)",
        type: "Backend",
        title: "Estructura por dominios y límites claros",
        summary:
            "Definí separación estricta entre módulos para evitar dependencias cruzadas.",
        tags: ["architecture", "modules", "clean-code"],
        details: {
            what:
                "Organicé el proyecto por dominios (users, auth, etc.) con contratos claros entre módulos.",
            why:
                "Sin límites claros, el proyecto se vuelve inmanejable a medida que crece.",
            next:
                "Documentar reglas para contributors.",
        },
        links: [],
    },
    {
        id: "b-005",
        date: "2026-01-29",
        category: "Bugfix",
        project: "Portfolio v3",
        type: "UI",
        title: "Unificación de comportamiento en links",
        summary:
            "Centralicé lógica para enlaces externos y mailto en un solo componente.",
        tags: ["react", "ux", "components"],
        details: {
            what:
                "Creé una utilidad que detecta tipo de enlace (externo, mail, tel) y aplica comportamiento correcto.",
            why:
                "Reducir repetición y evitar inconsistencias.",
            next:
                "Aplicarlo en todo el sistema de navegación.",
        },
        links: [],
    },
];
