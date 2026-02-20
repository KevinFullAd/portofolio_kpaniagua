import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { firstName, lastName, email, subject, message } = req.body;

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "paniagua.kevin.damian@gmail.com",
            subject: subject || "Nuevo mensaje desde portfolio",
            html: `
        <h3>Nuevo mensaje</h3>
        <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
        });

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error enviando formulario" });
    }
}