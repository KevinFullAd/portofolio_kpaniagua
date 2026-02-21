// src/components/contact/sections/ContactFormSection.jsx
import { useState } from "react";
import { Reveal } from "../../ui/animations/Reveal.jsx";
import { SoftCard } from "../../ui/cards/SoftCard";
import { Divider } from "../../ui/primitives/Divider";
import { Muted } from "../../ui/primitives/typography/Muted";
import { ThemedLink } from "../../ui/primitives/ThemedLink";
import SubmitBtn from "../SubmitBtn.jsx";
import TextArea from "../../ui/primitives/typography/TextArea";
import Field from "../../ui/primitives/form/Field";

export default function ContactFormSection({
    email,
    form,
    formData,
    status,
    onChange,
    onSetArea,
    onSubmit,
}) {
    const [localStatus, setLocalStatus] = useState("idle");
    const [honeypot, setHoneypot] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (honeypot) return;

        if (localStatus === "loading") return;

        if (!formData.firstName?.trim()) {
            return alert("El nombre es obligatorio.");
        }

        if (!formData.email?.includes("@")) {
            return alert("Email inválido.");
        }

        if (!formData.message || formData.message.trim().length < 10) {
            return alert("El mensaje debe tener al menos 10 caracteres.");
        }

        try {
            setLocalStatus("loading");

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result?.error || "Error enviando formulario");
            }

            setLocalStatus("success");

            // opcional: limpiar form
            onChange({ target: { name: "firstName", value: "" } });
            onChange({ target: { name: "lastName", value: "" } });
            onChange({ target: { name: "email", value: "" } });
            onChange({ target: { name: "subject", value: "" } });
            onChange({ target: { name: "message", value: "" } });

            setTimeout(() => {
                setLocalStatus("idle");
            }, 4000);

        } catch (error) {
            console.error(error);
            setLocalStatus("error");

            setTimeout(() => {
                setLocalStatus("idle");
            }, 4000);
        }
    };

    const isLoading = localStatus === "loading";

    return (
        <Reveal as="section" className={""} amount={0.22} once>
            <SoftCard className="p-5 h-full flex flex-col gap-4 justify-between md:p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                        <div className="text-(--text) font-semibold text-lg">
                            {form.title}
                        </div>
                        <Muted className="max-w-prose">{form.hint}</Muted>
                    </div>
                </div>

                <Divider className="opacity-60" />

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2"
                >
                    <input
                        type="text"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    <div className="grid gap-4 md:grid-cols-2">
                        <Field
                            label="Nombre"
                            name="firstName"
                            placeholder={form.placeholders.firstName}
                            value={formData.firstName}
                            onChange={onChange}
                            required
                        />
                        <Field
                            label="Apellido"
                            name="lastName"
                            placeholder={form.placeholders.lastName}
                            value={formData.lastName}
                            onChange={onChange}
                        />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <Field
                            label="Email"
                            name="email"
                            type="email"
                            placeholder={form.placeholders.email}
                            value={formData.email}
                            onChange={onChange}
                            required
                        />
                        <Field
                            label="Asunto"
                            name="subject"
                            placeholder={form.placeholders.subject}
                            value={formData.subject}
                            onChange={onChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="text-sm font-semibold text-(--text)">
                            Área
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {form.areas.map((a) => {
                                const active = formData.area === a.key;
                                return (
                                    <button
                                        key={a.key}
                                        type="button"
                                        disabled={isLoading}
                                        onClick={() => onSetArea(a.key)}
                                        className="rounded-full px-4 py-2 text-sm border border-(--border) transition disabled:opacity-50"
                                        style={{
                                            background: active
                                                ? "rgb(var(--accent-rgb) / 0.10)"
                                                : "rgb(255 255 255 / 0.02)",
                                            color: active
                                                ? "var(--accent-solid)"
                                                : "var(--text)",
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
                        placeholder={form.placeholders.message}
                        value={formData.message}
                        onChange={onChange}
                        rows={10}
                        required
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-1">
                        <Muted className="text-sm">
                            {form.directText}{" "}
                            <ThemedLink href={`mailto:${email}`}>
                                {form.directLinkText}
                            </ThemedLink>
                            .
                        </Muted>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="rounded-full px-6 py-2 font-semibold w-fit
    transition-all duration-300
    border border-(--border) text-(--text)
    disabled:opacity-60 disabled:cursor-not-allowed"
                                style={{
                                    background: "var(--accent-solid)",
                                    boxShadow: "0 0 22px rgb(var(--accent-rgb) / 0.25)",
                                }}
                            >
                                <SubmitBtn
                                    status={localStatus}
                                    text={form.ctaText}
                                />
                            </button>
                        </div>
                    </div>

                    {localStatus === "success" && (
                        <div
                            className="mt-2 rounded-xl border border-(--border) px-4 py-3 text-sm"
                            style={{
                                background:
                                    "rgb(var(--accent-rgb) / 0.08)",
                            }}
                        >
                            <span
                                className="font-semibold"
                                style={{
                                    color: "var(--accent-solid)",
                                }}
                            >
                                Listo
                            </span>
                            <span className="text-(--text-muted)">
                                {" "}
                                — Mensaje enviado correctamente.
                            </span>
                        </div>
                    )}

                    {localStatus === "error" && (
                        <div className="mt-2 text-sm text-red-400">
                            Ocurrió un error. Intenta nuevamente.
                        </div>
                    )}
                </form>
            </SoftCard>
        </Reveal>
    );
}