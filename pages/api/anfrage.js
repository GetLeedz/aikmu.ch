// pages/api/anfrage.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name,
    company,
    email,
    phone,
    industry,
    message,
    website, // Honeypot
    cfToken, // Turnstile Token
  } = req.body || {};

  // Honeypot
  if (website) {
    console.log("Honeypot ausgelöst, Anfrage ignoriert");
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    console.log("Pflichtfelder fehlen", { name, email, message });
    return res.status(400).json({ error: "Pflichtfelder fehlen." });
  }

  // Turnstile prüfen
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY fehlt in den ENV Variablen.");
    return res
      .status(500)
      .json({ error: "Sicherheitskonfiguration ist unvollständig." });
  }

  try {
    const ip =
      req.headers["x-forwarded-for"] ||
      req.socket?.remoteAddress ||
      "";

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${encodeURIComponent(
          secret
        )}&response=${encodeURIComponent(
          cfToken || ""
        )}&remoteip=${encodeURIComponent(ip)}`,
      }
    );

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      console.error("Turnstile verification failed:", verifyData);
      return res
        .status(400)
        .json({ error: "Sicherheitsprüfung fehlgeschlagen." });
    }
  } catch (e) {
    console.error("Turnstile request error:", e);
    return res
      .status(500)
      .json({ error: "Sicherheitsprüfung momentan nicht verfügbar." });
  }

  console.log("Neue Anfrage erhalten:", { name, email, company, phone, industry });

  const {
    MAIL_HOST,
    MAIL_PORT,
    MAIL_SECURE,
    MAIL_USER,
    MAIL_PASS,
    MAIL_FROM,
    MAIL_TO,
  } = process.env;

  if (!MAIL_HOST || !MAIL_USER || !MAIL_PASS || !MAIL_FROM || !MAIL_TO) {
    console.error("Mail-ENV-Variablen fehlen.");
    return res
      .status(500)
      .json({ error: "Mail-Konfiguration ist unvollständig." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT || 465),
      secure: MAIL_SECURE === "true" || MAIL_SECURE === true,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    const textBody = `
Neue Lead-Kampagnen-Anfrage über getleedz.com

Name:    ${name}
Firma:   ${company || "-"}
E-Mail:  ${email}
Telefon: ${phone || "-"}

Branche / Zielkunden:
${industry || "-"}

Nachricht:
${message}
`;

    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `Neue Lead-Anfrage von ${name}`,
      text: textBody,
      html: textBody.replace(/\n/g, "<br />"),
    });

    console.log("Mail erfolgreich übergeben:", info.messageId);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Mail Fehler:", error);
    return res.status(500).json({ error: "Mail konnte nicht gesendet werden." });
  }
}
