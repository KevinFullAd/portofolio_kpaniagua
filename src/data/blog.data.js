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
    {
        id: "b-006",
        date: "2026-02-18",
        category: "Mejora",
        project: "API Boilerplate (NestJS)",
        type: "Backend",
        title: "Logging estructurado con Pino",
        summary:
            "Integré logging estructurado con contexto por request y niveles configurables.",
        tags: ["nestjs", "logging", "observability"],
        details: {
            what:
                "Configuré Pino como logger principal con interceptores para adjuntar requestId y metadata relevante.",
            why:
                "Necesitaba trazabilidad clara para debugging y futuras integraciones con servicios de monitoreo.",
            next:
                "Agregar integración con servicio externo de logs.",
        },
        links: [],
    },
    {
        id: "b-007",
        date: "2026-02-16",
        category: "Arquitectura",
        project: "Portfolio v3",
        type: "Frontend",
        title: "Sistema de layout reutilizable",
        summary:
            "Creé un layout base con slots configurables para mantener consistencia visual.",
        tags: ["react", "layout", "design-system"],
        details: {
            what:
                "Implementé un componente Layout con header, footer y contenedor dinámico.",
            why:
                "Evitar duplicación y facilitar cambios globales en estructura.",
            next:
                "Extraer tokens visuales a un archivo centralizado.",
        },
        links: [],
    },
    {
        id: "b-008",
        date: "2026-02-14",
        category: "Optimización",
        project: "Infraestructura",
        type: "DevOps",
        title: "Cache de dependencias en CI",
        summary:
            "Reducí tiempos de pipeline usando cache de node_modules en GitHub Actions.",
        tags: ["ci", "performance", "github-actions"],
        details: {
            what:
                "Configuré actions/cache para dependencias basadas en hash del lockfile.",
            why:
                "Los builds repetían instalación completa en cada ejecución.",
            next:
                "Separar jobs paralelos para lint y tests.",
        },
        links: [],
    },
    {
        id: "b-009",
        date: "2026-02-12",
        category: "Experimentación",
        project: "API Boilerplate (NestJS)",
        type: "Backend",
        title: "Rate limiting global configurable",
        summary:
            "Agregué limitador de requests configurable por entorno.",
        tags: ["security", "nestjs", "api"],
        details: {
            what:
                "Integré un guard global con límites personalizables vía variables de entorno.",
            why:
                "Prevenir abuso básico y proteger endpoints públicos.",
            next:
                "Agregar configuración por ruta específica.",
        },
        links: [],
    },
    {
        id: "b-010",
        date: "2026-02-09",
        category: "Refactor",
        project: "Portfolio v3",
        type: "UI",
        title: "Normalización de tipografías",
        summary:
            "Unifiqué escalas tipográficas usando un sistema basado en tokens.",
        tags: ["ui", "design-system", "refactor"],
        details: {
            what:
                "Definí tamaños, pesos y line-height en un archivo central reutilizable.",
            why:
                "Había inconsistencias entre secciones.",
            next:
                "Aplicar mismo sistema a espaciados y colores.",
        },
        links: [],
    },
    {
        id: "b-011",
        date: "2026-02-05",
        category: "Documentación",
        project: "API Boilerplate (NestJS)",
        type: "Backend",
        title: "Guía de convenciones internas",
        summary:
            "Documenté reglas de estructura, naming y flujo de desarrollo.",
        tags: ["documentation", "architecture", "standards"],
        details: {
            what:
                "Escribí un README extendido con ejemplos de módulos, DTOs y servicios.",
            why:
                "Facilitar onboarding y mantener coherencia.",
            next:
                "Agregar ejemplos de testing.",
        },
        links: [],
    },
    {
        id: "b-012",
        date: "2026-02-01",
        category: "Testing",
        project: "API Boilerplate (NestJS)",
        type: "Backend",
        title: "Setup inicial de tests e2e",
        summary:
            "Configuré entorno básico para pruebas end-to-end.",
        tags: ["testing", "nestjs", "quality"],
        details: {
            what:
                "Añadí Jest e2e con entorno aislado y base de datos mock.",
            why:
                "Asegurar estabilidad en endpoints críticos.",
            next:
                "Agregar tests de autenticación y casos de error.",
        },
        links: [],
    },
    {
        id: "b-013",
        date: "2026-01-27",
        category: "UX",
        project: "Portfolio v3",
        type: "Frontend",
        title: "Estados vacíos consistentes",
        summary:
            "Definí componente reutilizable para empty states.",
        tags: ["ux", "components", "react"],
        details: {
            what:
                "Creé un componente EmptyState configurable con icono y mensaje.",
            why:
                "Cada sección manejaba estados sin datos de forma distinta.",
            next:
                "Agregar variantes para error y loading.",
        },
        links: [],
    },
    {
        id: "b-014",
        date: "2026-01-24",
        category: "Seguridad",
        project: "Infraestructura",
        type: "DevOps",
        title: "Headers de seguridad básicos",
        summary:
            "Implementé configuración inicial de headers HTTP seguros.",
        tags: ["security", "http", "best-practices"],
        details: {
            what:
                "Configuré helmet con políticas estándar.",
            why:
                "Reducir superficie de ataque en entornos públicos.",
            next:
                "Evaluar CSP personalizada.",
        },
        links: [],
    },
    {
        id: "b-015",
        date: "2026-01-20",
        category: "Planificación",
        project: "Portfolio v3",
        type: "Producto",
        title: "Roadmap modular del proyecto",
        summary:
            "Definí fases claras para evolución del portfolio.",
        tags: ["planning", "roadmap", "architecture"],
        details: {
            what:
                "Organicé el roadmap en fases: base, mejoras UX, optimización y contenido.",
            why:
                "Evitar crecimiento desordenado.",
            next:
                "Priorizar features según impacto.",
        },
        links: [],
    }


];
