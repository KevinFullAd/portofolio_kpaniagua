// src/pages/Contact.jsx
// Contact
import React, { useMemo, useState } from "react";
import { AbstractBackground } from "../components/ui/graphics/AbstractBackground";
import { Eyebrow } from "../components/about/Eyebrow";
import { H2 } from "../components/ui/primitives/typography/H2";
import { Muted } from "../components/ui/primitives/typography/Muted";
import { Lead } from "../components/ui/primitives/typography/Lead";
import { Chip } from "../components/ui/primitives/Chip";
import { SoftCard } from "../components/ui/cards/SoftCard";
import { Divider } from "../components/ui/primitives/Divider";
import { ContactPill } from "../components/ui/ContactPill";
import { ThemedLink } from "../components/ui/primitives/ThemedLink";
import { PageContainer } from "../components/ui/primitives/PageContainer";
import TextArea from "../components/ui/primitives/typography/TextArea";
import Field from "../components/ui/primitives/form/Field";
import ActionRow from "../components/ui/primitives/ActionRow";
import Bullet from "../components/ui/primitives/Bullet";

export default function Contact() {
    const email = "kevin.paniagua@gmail.com";

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        area: "frontend", // "uiux" | "frontend" | "backend" | "consulting" | "other"
    });

    const [status, setStatus] = useState({ type: "idle", text: "" });

    const chips = useMemo(() => ["Proyectos", "Freelance", "Colaboraciones"], []);

    const quickActions = useMemo(
        () => [
            {
                title: "Email",
                subtitle: email,
                href: `mailto:${email}`,
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
        [email]
    );

    const areas = useMemo(
        () => [
            { key: "frontend", label: "Frontend" },
            { key: "uiux", label: "UI/UX" },
            { key: "backend", label: "Backend" },
            { key: "consulting", label: "Consultoría" },
            { key: "other", label: "Otro" },
        ],
        []
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setStatus({
            type: "ok",
            text: "Mensaje listo (modo demo).",
        });

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
            area: "frontend",
        });

        window.setTimeout(() => setStatus({ type: "idle", text: "" }), 3600);
    };

    return (
        <PageContainer className="flex flex-col gap-8">
            {/* HERO  */}
            <header className="relative overflow-hidden space-y-4">
                <Eyebrow>Contacto</Eyebrow>
                <div className="relative z-10 space-y-3">
                    <H2>Contactame</H2>
                    <Lead className="max-w-2xl">
                        Si querés escalar un proyecto o estás evaluando sumar a alguien al equipo,
                        dejame un mensaje. Respondo por mail.
                    </Lead>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {chips.map((c) => (
                            <Chip key={c}>{c}</Chip>
                        ))}
                    </div>
                </div>
            </header>


            {/* Layout: Form + Panel lateral */}
            <div className="grid grid-cols-1 gap-4 lg:gap-6 xl:grid-cols-[1fr_320px] items-start">

                {/* FORM */}
                <SoftCard className="p-5 h-full md:p-6">
                    {/* header form */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                            <div className="text-(--text) font-semibold text-lg">Enviar mensaje</div>
                            <Muted className="max-w-prose">
                                Ideal si me contás contexto + objetivo + plazo. Con eso ya puedo responder con algo concreto.
                            </Muted>
                        </div>
                    </div>

                    <Divider className="my-4 opacity-60" />

                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col ">
                        <div className="grid gap-4 md:grid-cols-2">
                            <Field
                                label="Nombre"
                                name="firstName"
                                placeholder="Nombre"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <Field
                                label="Apellido"
                                name="lastName"
                                placeholder="Apellido"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <Field
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="tu@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <Field
                                label="Asunto"
                                name="subject"
                                placeholder="Ej: Propuesta / Consulta / Proyecto"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Área compacta (chips toggle) */}
                        <div className="space-y-2">
                            <div className="text-sm font-semibold text-(--text)">Área</div>
                            <div className="flex flex-wrap gap-2">
                                {areas.map((a) => {
                                    const active = formData.area === a.key;
                                    return (
                                        <button
                                            key={a.key}
                                            type="button"
                                            onClick={() => setFormData((p) => ({ ...p, area: a.key }))}
                                            className="rounded-full px-4 py-2 text-sm border border-(--border) transition"
                                            style={{
                                                background: active ? "rgb(var(--accent-rgb) / 0.10)" : "rgb(255 255 255 / 0.02)",
                                                color: active ? "var(--accent-solid)" : "var(--text)",
                                            }}
                                        >
                                            {a.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <TextArea
                            label="Mensaje"
                            name="message"
                            placeholder="Qué necesitás, para quién, y en qué plazo…"
                            value={formData.message}
                            onChange={handleChange}
                            rows={7}
                            required
                        />

                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between pt-1">
                            <Muted className="text-sm">
                                Si preferís directo:{" "}
                                <ThemedLink href={`mailto:${email}`}>usar email</ThemedLink>.
                            </Muted>
                            <div className="flex justify-end">

                                <button
                                    type="submit"
                                    className="
                                    rounded-full px-6 py-2 font-semibold w-fit 
                                    transition hover:brightness-110 active:brightness-105
                                    border border-(--border) text-(--text) flex 
                                    "
                                    style={{
                                        background: "var(--accent-solid)",
                                        boxShadow: "0 0 22px rgb(var(--accent-rgb) / 0.25)",
                                    }}
                                >
                                    <span className="material-icons-outlined" >
                                        send
                                    </span>
                                </button>
                            </div>
                        </div>

                        {status.type !== "idle" && (
                            <div
                                className="mt-2 rounded-xl border border-(--border) px-4 py-3 text-sm"
                                style={{
                                    background: "rgb(var(--accent-rgb) / 0.08)",
                                }}
                            >
                                <span className="font-semibold" style={{ color: "var(--accent-solid)" }}>
                                    Listo
                                </span>
                                <span className="text-(--text-muted)"> — {status.text}</span>
                            </div>
                        )}
                    </form>
                </SoftCard>

                {/* PANEL LATERAL */}
                <div className="flex flex-col gap-5">
                    {/* Canales*/}
                    <SoftCard className="p-5 h-full">
                        <div className="text-(--text) font-semibold">Canales</div>
                        <Muted className="mt-1">Elegí el que te resulte más cómodo.</Muted>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <ContactPill className="text-sm" href={`mailto:${email}`} label={email} />
                        </div>

                        <Divider className="my-4 opacity-60" />

                        <div className="space-y-2">
                            {quickActions.map((a) => (
                                <ActionRow key={a.title} action={a} />
                            ))}
                        </div>
                    </SoftCard>

                    {/* Qué incluir */}
                    <SoftCard className="p-5 h-full">
                        <div className="text-(--text) font-semibold">Para avanzar rápido</div>
                        <Muted className="mt-1">3 líneas y estamos.</Muted>

                        <Divider className="my-4 opacity-60" />

                        <div className="space-y-3">
                            <Bullet title="Contexto" desc="Qué es el proyecto y para quién." />
                            <Bullet title="Objetivo" desc="Qué querés lograr (resultado esperado)." />
                            <Bullet title="Plazo" desc="Fecha ideal o prioridad." />
                        </div>
                    </SoftCard>
                </div>
            </div>
        </PageContainer>
    );
}