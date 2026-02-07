// pages/anfrage.js
import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

// Tracking + Consent
import { track } from "../components/lib/fbpixel";
import { hasMarketingConsent } from "../components/lib/consent";

const Turnstile = dynamic(() => import("react-turnstile"), { ssr: false });

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  industry: "",
  message: "",
  website: "", // Honeypot
};

const Anfrage = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null); // loading | success | error | null
  const [errorMsg, setErrorMsg] = useState("");
  const [cfToken, setCfToken] = useState("");
  const [tsKey, setTsKey] = useState(0);

  const disabled = status === "loading";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!cfToken) {
      setStatus("error");
      setErrorMsg(
        "Bitte kurz bestätigen, dass du kein Bot bist (Captcha unten ausfüllen)."
      );
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, cfToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Fehler beim Absenden.");
      }

      // ✅ Erfolg
      setStatus("success");
      setFormData(initialState);
      setCfToken("");
      setTsKey((k) => k + 1);

      // 🎯 Meta Lead Event (nur mit Consent)
      if (hasMarketingConsent()) {
        track("Lead", {
          content_name: "Lead-Kampagne Anfrage",
          content_category: "Leadgenerierung",
          value: 1,
          currency: "CHF",
        });
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err.message ||
          "Irgendwas ist schiefgelaufen. Bitte versuch es später nochmals."
      );
    } finally {
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <>
      <Head>
        <title>Anfrage für Lead-Kampagne | GetLeedz</title>
        <meta
          name="description"
          content="Schick uns deine Challenge – wir prüfen ehrlich, ob und wie wir dir mehr Leads bringen können."
        />
      </Head>

      <NavBar />

      <main className="min-h-screen pt-[160px] pb-[80px]">
        <section>
          <div className="container m-auto max-w-3xl px-4 text-slate-100">
            <div className="mb-8 text-center">
              <h1 className="text-2xl md:text-3xl font-semibold text-white">
                Anfrage für Lead-Kampagne
              </h1>
              <p className="mt-4 text-base md:text-lg text-slate-200">
                Kurz ausfüllen – wir melden uns mit einer ehrlichen Einschätzung.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl bg-black/40 p-6 backdrop-blur shadow-[0_0_40px_rgba(15,23,42,0.9)]"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <label className="neon-label">Dein Name</label>
                <div className="neon-input-wrapper">
                  <input
                    name="name"
                    required
                    className="neon-input"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="neon-label">E-Mail</label>
                <div className="neon-input-wrapper">
                  <input
                    name="email"
                    type="email"
                    required
                    className="neon-input"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* Firma */}
              <div>
                <label className="neon-label">Firma</label>
                <div className="neon-input-wrapper">
                  <input
                    name="company"
                    required
                    className="neon-input"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* Telefon */}
              <div>
                <label className="neon-label">Telefon</label>
                <div className="neon-input-wrapper">
                  <input
                    name="phone"
                    className="neon-input"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* Branche */}
              <div>
                <label className="neon-label">Branche</label>
                <div className="neon-input-wrapper">
                  <select
                    name="industry"
                    required
                    className="neon-select"
                    value={formData.industry}
                    onChange={handleChange}
                    disabled={disabled}
                  >
                    <option value="">Bitte wählen ...</option>
                    <option>Gastronomie / Restaurant</option>
                    <option>Detailhandel / Retail</option>
                    <option>Versicherung / Finanzdienstleister</option>
                    <option>Immobilien / Makler / Verwaltung</option>
                    <option>Fitness / Gesundheit</option>
                    <option>Beauty / Kosmetik</option>
                    <option>Agentur / Marketing</option>
                    <option>Beratung / Coaching</option>
                    <option>IT / Software / SaaS</option>
                    <option>Industrie / Produktion</option>
                    <option>Dienstleistungen (allgemein)</option>
                    <option>Öffentliche Hand / Bildung</option>
                    <option>B2B / andere KMU</option>
                    <option>Andere Branche</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="neon-label">
                  Was ist deine grösste Challenge bei Leads?
                </label>
                <div className="neon-input-wrapper">
                  <textarea
                    name="message"
                    required
                    className="neon-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* Turnstile */}
              <div className="pt-2 text-center">
                <p className="text-sm text-slate-300 mb-2">
                  Kurze Sicherheitsprüfung:
                </p>
                <Turnstile
                  key={tsKey}
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  onVerify={(token) => setCfToken(token)}
                />
              </div>

              {/* Status */}
              {status === "success" && (
                <div className="badge-success">
                  ✅ Anfrage erfolgreich gesendet.
                </div>
              )}

              {status === "error" && (
                <div className="badge-error">⚠️ {errorMsg}</div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={disabled}
                className={`neon-border ${
                  disabled ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                <span className="neon-border-inner">
                  {status === "loading"
                    ? "Wird gesendet..."
                    : "Anfrage jetzt abschicken"}
                </span>
              </button>

              <p className="text-sm text-slate-300">
                Deine Daten werden vertraulich behandelt. Kein Spam.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Anfrage;
