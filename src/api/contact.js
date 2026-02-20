import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { firstName, lastName, email, subject, message, area } = req.body;

    if (!firstName || !email || !message) {
        return res.status(400).json({ error: "Missing fields" });
    }

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "paniagua.kevin.damian@gmail.com",
            subject: subject || "Nuevo mensaje desde portfolio",
            reply_to: email,
            text: `
                Nombre: ${firstName} ${lastName}
                Email: ${email}
                Área: ${area}

                Mensaje:
                ${message}
                    `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error sending email" });
    }
}