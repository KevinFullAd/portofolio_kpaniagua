// src/pages/Contact.jsx
import React, { useState } from "react";
import { PageContainer } from "../components/ui/primitives/PageContainer";
import { contactData } from "../data/contact.data.js";

import ContactHeroSection from "../components/contact/sections/ContactHeroSection.jsx";
import ContactFormSection from "../components/contact/sections/ContactFormSection.jsx";
import ContactSidebarSection from "../components/contact/sections/ContactSidebarSection.jsx";

export default function Contact({ className = "" }) {
    const { email, hero, form, sidebar } = contactData;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        area: "frontend",
    });

    const [status, setStatus] = useState({ type: "idle", text: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));
    };

    const handleSetArea = (key) => setFormData((p) => ({ ...p, area: key }));

    const resetForm = () =>
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
            area: "frontend",
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        setStatus({ type: "ok", text: form.demoSuccess });
        resetForm();
        window.setTimeout(() => setStatus({ type: "idle", text: "" }), 3600);
    };

    return (
        <PageContainer className={`flex flex-col gap-8 ${className}`}>
            <ContactHeroSection hero={hero} />

            <div className="grid grid-cols-1 gap-4 lg:gap-6 xl:grid-cols-[1fr_320px] items-start">
                <ContactFormSection
                    email={email}
                    form={form}
                    formData={formData}
                    status={status}
                    onChange={handleChange}
                    onSetArea={handleSetArea}
                    onSubmit={handleSubmit}
                />

                <ContactSidebarSection email={email} sidebar={sidebar} />
            </div>
        </PageContainer>
    );
}
