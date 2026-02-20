export const blogItems = [
    {
        id: "encaja-arquitectura-modular",
        date: "2026-02-19",
        category: "Arquitectura",
        project: "EnCaja",
        type: "Backend",
        title: "Arquitectura modular en NestJS para un POS offline",
        summary:
            "Organización del backend en módulos independientes para mantener separación clara de responsabilidades.",
        tags: ["nestjs", "arquitectura", "modular", "backend"],
        details: {
            what: "El backend está dividido en módulos: catálogo, comandas y sistema (auth). Cada uno encapsula controladores, servicios y DTOs.",
            why: "Separar responsabilidades desde el inicio evita acoplamientos innecesarios y facilita futuras extensiones.",
            next: "Refinar validaciones y asegurar coherencia entre módulos a medida que el sistema evolucione."
        },
        links: [
            {
                label: "Repositorio EnCaja",
                url: "https://github.com/KevinFullAd/EnCaja"
            }
        ]
    },
    {
        id: "encaja-modelado-datos-pos",
        date: "2026-02-19",
        category: "Arquitectura",
        project: "EnCaja",
        type: "Modelado",
        title: "Modelado de datos para un sistema de comandas",
        summary:
            "Diseño de entidades como Order, OrderItem y OrderPrintLog para garantizar trazabilidad y consistencia.",
        tags: ["database", "prisma", "modelado", "pos"],
        details: {
            what: "El sistema utiliza modelos como Order, OrderItem y OrderPrintLog para representar pedidos, ítems y eventos de impresión.",
            why: "Separar cada responsabilidad en entidades claras permite mantener historial, trazabilidad y control operativo.",
            next: "Optimizar consultas y validar índices a medida que aumente el volumen de datos."
        },
        links: [
            {
                label: "Repositorio EnCaja",
                url: "https://github.com/KevinFullAd/EnCaja"
            }
        ]
    },
    {
        id: "encaja-impresion-controlada",
        date: "2026-02-19",
        category: "Backend",
        project: "EnCaja",
        type: "Operación",
        title: "Gestión del estado de impresión en comandas",
        summary:
            "Implementación de estados de impresión y registro histórico para cada intento de impresión.",
        tags: ["impresion", "log", "backend", "operacion"],
        details: {
            what: "Cada comanda registra un estado de impresión (PENDING, OK, ERROR) y guarda un log por cada intento realizado.",
            why: "En un entorno físico real, las impresiones pueden fallar. Registrar estos eventos permite auditar y diagnosticar problemas.",
            next: "Integrar la capa de impresión física manteniendo este esquema de registro."
        },
        links: [
            {
                label: "Repositorio EnCaja",
                url: "https://github.com/KevinFullAd/EnCaja"
            }
        ]
    },
    {
        id: "encaja-control-anulaciones",
        date: "2026-02-19",
        category: "Producto",
        project: "EnCaja",
        type: "Control interno",
        title: "Control de anulaciones en un sistema POS",
        summary:
            "Restricción de anulaciones a usuarios ADMIN con registro obligatorio de motivo.",
        tags: ["roles", "control", "seguridad", "backend"],
        details: {
            what: "El backend permite anular comandas únicamente a usuarios ADMIN y exige un motivo mínimo para registrar la acción.",
            why: "Las anulaciones afectan métricas y control interno, por lo que deben quedar auditadas y restringidas.",
            next: "Agregar visualización administrativa de comandas anuladas."
        },
        links: [
            {
                label: "Repositorio EnCaja",
                url: "https://github.com/KevinFullAd/EnCaja"
            }
        ]
    }
]