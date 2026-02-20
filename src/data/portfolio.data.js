// src/data/portfolioData.js
export const portfolioData = {
    page: { title: "Mis trabajos" },

    works: [
        {
            id: "pos-encaja",
            tag: "Sistema · Producto Digital",
            title: "Encaja - Sistema POS",
            description:
                "Sistema de punto de venta orientado a entornos gastronómicos para registrar pedidos y generar comandas claras, reduciendo errores operativos y mejorando tiempos de servicio.",
            stack: "Sistema interno · MVP en desarrollo",
            cta: "Ver proyecto",
            coverVariant: "layers",

            detail: {
                hero: {
                    summary:
                        "MVP desarrollado para digitalizar la toma de pedidos en una hamburguesería que operaba con anotaciones manuales y mensajes de WhatsApp, integrando generación automática de comandas térmicas y registro persistente de pedidos.",
                    links: [],
                },

                highlights: [
                    { label: "Rol", value: "Análisis · Arquitectura · Desarrollo completo" },
                    { label: "Tipo", value: "Sistema interno operativo" },
                    { label: "Entorno", value: "Hamburguesería · Cocina separada" },
                    { label: "Enfoque", value: "Orden operativo · Reducción de errores" },
                ],

                sections: [
                    {
                        id: "problem",
                        title: "Problema",
                        bullets: [
                            "Los pedidos se registraban manualmente en papel o desde un celular.",
                            "La comunicación directa entre caja y cocina generaba errores frecuentes.",
                            "No existía control claro de pedidos realizados ni seguimiento histórico.",
                            "La falta de estructura dificultaba el control real de ingresos y ventas."
                        ],
                    },
                    {
                        id: "goal",
                        title: "Objetivo",
                        paragraphs: [
                            "Digitalizar la toma de pedidos mediante un sistema simple y estable que permita generar comandas térmicas claras para cocina y mantener un registro persistente de cada operación."
                        ],
                    },
                    {
                        id: "solution",
                        title: "Solución",
                        bullets: [
                            "CRUD de productos configurable desde base de datos.",
                            "Creación rápida de pedidos con agregado dinámico de productos.",
                            "Cálculo automático de totales.",
                            "Generación de comanda térmica estructurada para cocina.",
                            "Persistencia de pedidos en base de datos para control posterior."
                        ],
                    },
                ],

                flow: {
                    title: "Flujo operativo",
                    steps: [
                        {
                            title: "Creación de pedido",
                            description:
                                "El operador registra un nuevo pedido desde caja."
                        },
                        {
                            title: "Carga de productos",
                            description:
                                "Se agregan productos disponibles con cálculo automático del total."
                        },
                        {
                            title: "Impresión de comanda",
                            description:
                                "Al finalizar, se genera automáticamente una comanda térmica clara para cocina."
                        },
                        {
                            title: "Registro persistente",
                            description:
                                "El pedido queda almacenado en base de datos para control y futura expansión contable."
                        }
                    ],
                },

                decisions: {
                    title: "Decisiones clave",
                    items: [
                        {
                            decision: "Interfaz enfocada en velocidad operativa",
                            reason:
                                "El sistema es utilizado por una sola persona en momentos de alta demanda."
                        },
                        {
                            decision: "Comanda con estructura clara y jerarquía visual",
                            reason:
                                "La cocina está separada físicamente, por lo que la claridad reduce errores de interpretación."
                        },
                        {
                            decision: "Persistencia desde el MVP",
                            reason:
                                "Permite evolución futura hacia control contable sin reconstruir el sistema."
                        },
                        {
                            decision: "Alcance reducido intencionalmente",
                            reason:
                                "Se priorizó resolver el problema central antes de agregar complejidad innecesaria."
                        }
                    ],
                },

                visual: {
                    title: "Criterios de interfaz",
                    bullets: [
                        "Diseño funcional orientado a operación rápida.",
                        "Jerarquía clara para lectura inmediata.",
                        "Minimización de pasos para completar un pedido.",
                        "Optimización para uso continuo en entorno real de trabajo."
                    ],
                },
            },
        }
    ],
};