// src/components/contact/sections/ContactFormSection.jsx
import { Reveal } from "../../ui/animations/Reveal.jsx";
import { SoftCard } from "../../ui/cards/SoftCard";
import { Divider } from "../../ui/primitives/Divider";
import { Muted } from "../../ui/primitives/typography/Muted";
import { ThemedLink } from "../../ui/primitives/ThemedLink";
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
    return (
        <Reveal as="section" className={"h-full"} amount={0.22} once>
            <SoftCard className="p-5  h-full md:p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                        <div className="text-(--text) font-semibold text-lg">{form.title}</div>
                        <Muted className="max-w-prose">{form.hint}</Muted>
                    </div>
                </div>

                <Divider className="my-4 opacity-60" />

                <form onSubmit={onSubmit} className="space-y-4 flex flex-col">
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
                        <div className="text-sm font-semibold text-(--text)">Área</div>
                        <div className="flex flex-wrap gap-2">
                            {form.areas.map((a) => {
                                const active = formData.area === a.key;
                                return (
                                    <button
                                        key={a.key}
                                        type="button"
                                        onClick={() => onSetArea(a.key)}
                                        className="rounded-full px-4 py-2 text-sm border border-(--border) transition"
                                        style={{
                                            background: active
                                                ? "rgb(var(--accent-rgb) / 0.10)"
                                                : "rgb(255 255 255 / 0.02)",
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
                        placeholder={form.placeholders.message}
                        value={formData.message}
                        onChange={onChange}
                        rows={7}
                        required
                    />

                    <div className="flex flex-col  sm:flex-row sm:items-center sm:justify-between pt-1">
                        <Muted className="text-sm">
                            {form.directText}{" "}
                            <ThemedLink href={`mailto:${email}`}>{form.directLinkText}</ThemedLink>.
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
                                <span className="material-icons-outlined">{form.ctaText}</span>
                            </button>
                        </div>
                    </div>

                    {status.type !== "idle" && (
                        <div
                            className="mt-2 rounded-xl border border-(--border) px-4 py-3 text-sm"
                            style={{ background: "rgb(var(--accent-rgb) / 0.08)" }}
                        >
                            <span className="font-semibold" style={{ color: "var(--accent-solid)" }}>
                                Listo
                            </span>
                            <span className="text-(--text-muted)"> — {status.text}</span>
                        </div>
                    )}
                </form>
            </SoftCard>
        </Reveal>
    );
}
