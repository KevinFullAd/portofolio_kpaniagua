import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

<<<<<<< HEAD
// Rate limit simple en memoria
let lastRequestTime = 0;

export async function POST(req) {
  try {
    const now = Date.now();

    // Protección básica anti spam (5s entre requests)
    if (now - lastRequestTime < 5000) {
      return Response.json(
        { error: "Too many requests. Try again in a few seconds." },
        { status: 429 }
      );
    }

    lastRequestTime = now;

    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      subject,
      message,
      area,
    } = body;

    // Validación backend real
    if (!firstName || !email || !message) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { error: "Invalid email." },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return Response.json(
        { error: "Message too short." },
        { status: 400 }
      );
    }

    // Envío con Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "paniagua.kevin.damian@gmail.com", // tu correo
      reply_to: email,
      subject: subject || "Nuevo mensaje desde portfolio",
      text: `
Nombre: ${firstName} ${lastName || ""}
Email: ${email}
Área: ${area || "No especificada"}

Mensaje:
${message}
      `,
      html: `
        <h2>Nuevo mensaje desde tu portfolio</h2>
        <p><strong>Nombre:</strong> ${firstName} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Área:</strong> ${area || "No especificada"}</p>
        <p style="margin-top:16px;">${message}</p>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return Response.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data.id);

    return Response.json({ ok: true });

  } catch (err) {
    console.error("UNEXPECTED ERROR:", err);
    return Response.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
=======
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
>>>>>>> 08523bf (feat:ultimo cambio)
}