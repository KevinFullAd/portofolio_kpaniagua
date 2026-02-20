// src/data/portfolioData.js
export const portfolioData = {
    page: { title: "Mis trabajos" },

    works: [
        {
            id: "pos-encaja",
            tag: "Sistema · Producto Digital",
            title: "Encaja - Sistema POS",
            description:
                "Sistema POS para entornos gastronómicos: registrar pedidos y emitir comandas térmicas claras, reduciendo errores operativos y mejorando tiempos de servicio.",
            stack: "Sistema interno · MVP en desarrollo",
            cta: "Ver proyecto",
            coverVariant: "layers",

            detail: {
                hero: {
                    summary:
                        "MVP en desarrollo para digitalizar la toma de pedidos en una hamburguesería que operaba con papel y WhatsApp. Centraliza el registro, imprime comandas térmicas para cocina y deja persistencia desde el día uno.",
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
                            "Los pedidos se registraban a mano (papel) o desde un celular.",
                            "La comunicación caja ↔ cocina generaba errores y repeticiones.",
                            "No había un historial confiable de pedidos para revisar o auditar.",
                            "El control real de ingresos/ventas quedaba atado a memoria y anotaciones.",
                        ],
                    },
                    {
                        id: "goal",
                        title: "Objetivo",
                        paragraphs: [
                            "Digitalizar la toma de pedidos con un sistema simple y estable: registrar operaciones rápido, emitir comandas térmicas claras para cocina y mantener persistencia para control y evolución futura.",
                        ],
                    },
                    {
                        id: "solution",
                        title: "Solución",
                        bullets: [
                            "Productos configurables desde base de datos (CRUD).",
                            "Creación rápida de pedidos con agregado dinámico de ítems.",
                            "Cálculo automático de totales.",
                            "Impresión de comanda térmica con estructura clara para cocina.",
                            "Persistencia de pedidos en base de datos desde el MVP.",
                        ],
                    },
                ],

                flow: {
                    title: "Flujo operativo",
                    steps: [
                        {
                            title: "Creación de pedido",
                            description: "El operador inicia un pedido nuevo desde caja.",
                        },
                        {
                            title: "Carga de productos",
                            description:
                                "Agrega ítems disponibles con cálculo automático del total (sin pasos innecesarios).",
                        },
                        {
                            title: "Impresión de comanda",
                            description:
                                "Al confirmar, se imprime una comanda térmica clara para cocina con jerarquía visual.",
                        },
                        {
                            title: "Registro persistente",
                            description:
                                "El pedido queda guardado en base de datos para control, revisión y expansión contable futura.",
                        },
                    ],
                },

                decisions: {
                    title: "Decisiones clave",
                    items: [
                        {
                            decision: "Interfaz enfocada en velocidad operativa",
                            reason:
                                "Se usa por una sola persona en momentos de alta demanda: el flujo tiene que ser directo.",
                        },
                        {
                            decision: "Comanda con jerarquía visual",
                            reason:
                                "Con cocina separada, la claridad en el papel reduce errores de interpretación.",
                        },
                        {
                            decision: "Persistencia desde el MVP",
                            reason:
                                "Habilita evolución (reportes/control) sin reconstruir el núcleo del sistema.",
                        },
                        {
                            decision: "Alcance reducido a propósito",
                            reason:
                                "Primero resolver el problema central; después sumar módulos sin inflar complejidad.",
                        },
                    ],
                },

                visual: {
                    title: "Criterios de interfaz",
                    bullets: [
                        "Diseño funcional orientado a operación rápida.",
                        "Jerarquía clara para lectura inmediata.",
                        "Minimización de pasos para completar un pedido.",
                        "Optimizado para uso continuo en un entorno real de trabajo.",
                    ],
                },
            },
        },
    ],
};