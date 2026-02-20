export const blogItems = [
    {
        id: "encaja-arquitectura-modular",
        date: "2026-02-19",
        category: "Arquitectura",
        project: "EnCaja",
        type: "Backend",
        title: "Arquitectura modular en NestJS para un POS offline",
        summary:
            "Separé el backend en módulos independientes para mantener responsabilidades claras, evitar acoplamientos y poder escalar el sistema sin reescrituras.",
        tags: ["nestjs", "arquitectura", "modular", "backend"],
        details: {
            what:
                "El backend está dividido en módulos por dominio (catálogo, comandas y sistema/auth). Cada módulo encapsula controladores, servicios y DTOs, y expone solo lo necesario hacia el resto.",
            why:
                "En un POS offline, el backend termina siendo “el centro” de todo: reglas, estados, persistencia y auditoría. Si arrancás acoplado, cada feature nueva rompe algo. Separar desde el inicio me permite crecer por partes (nuevos flujos, nuevos roles, reportes) sin contaminar el núcleo.",
            next:
                "Endurecer validaciones (DTOs + pipes), unificar convenciones entre módulos y revisar límites: qué se comparte y qué no, a medida que el sistema suma operaciones reales."
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
            "Modelé pedidos, ítems y eventos de impresión como entidades separadas para tener trazabilidad real: qué se pidió, qué se imprimió y qué falló.",
        tags: ["database", "prisma", "modelado", "pos"],
        details: {
            what:
                "El sistema usa entidades como Order, OrderItem y OrderPrintLog para representar el pedido, sus productos y el historial de impresión. La impresión no es un “flag”: es un evento con contexto.",
            why:
                "En operación real, los problemas no son teóricos: faltó un ítem, se duplicó una comanda, la impresora se colgó. Si el modelo no guarda historia, después no podés explicar nada. Separar responsabilidades en entidades claras me permite auditar y reconstruir lo que pasó sin depender del recuerdo del operador.",
            next:
                "Optimizar consultas y validar índices (por fecha/estado/usuario) a medida que haya volumen y se vuelvan necesarias métricas y reportes."
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
            "Implementé estados de impresión y log por intento para que la operación sea auditable: si algo falla, queda registrado y se puede diagnosticar.",
        tags: ["impresion", "log", "backend", "operacion"],
        details: {
            what:
                "Cada comanda maneja un estado de impresión (PENDING, OK, ERROR) y guarda un OrderPrintLog por cada intento: timestamp, resultado y motivo cuando corresponde.",
            why:
                "Una impresora térmica no es una API: puede quedarse sin papel, desconectarse o fallar a mitad de impresión. En ese contexto, “reintentar y listo” es receta para duplicados y caos. Con estados + logs puedo saber si se imprimió, cuántas veces, y en qué condiciones, sin adivinar.",
            next:
                "Integrar la capa de impresión física manteniendo el mismo contrato: cada acción de impresión genera un evento y no rompe la trazabilidad."
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
            "Restringí anulaciones a usuarios ADMIN y obligué a registrar un motivo para que el control sea real y no dependa de confianza o memoria.",
        tags: ["roles", "control", "seguridad", "backend"],
        details: {
            what:
                "El backend permite anular comandas solo a usuarios con rol ADMIN y exige un motivo mínimo. La anulación queda registrada como evento auditable (quién, cuándo y por qué).",
            why:
                "Anular no es un “botón más”: impacta ingresos, métricas y control interno. Si cualquiera puede hacerlo sin dejar rastro, el sistema pierde credibilidad. Con permisos y motivo obligatorio, la operación queda trazable y se puede revisar sin discusiones.",
            next:
                "Agregar una vista administrativa para filtrar y revisar comandas anuladas (motivo, usuario, fecha) y preparar el terreno para reportes."
        },
        links: [
            {
                label: "Repositorio EnCaja",
                url: "https://github.com/KevinFullAd/EnCaja"
            }
        ]
    }
]