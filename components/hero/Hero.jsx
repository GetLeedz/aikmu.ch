import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";

import hero1 from "../../public/images/hero/hero1.png";
import hero2 from "../../public/images/hero/hero2.png";
import hero3 from "../../public/images/hero/hero3.png";
import hero4 from "../../public/images/hero/hero4.png";
import hero5 from "../../public/images/hero/hero5.png";
import hero6 from "../../public/images/hero/hero6.png";

const Hero = () => {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/getleedz";

  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section className="hero relative overflow-hidden" id="hero">
      {/* Decorative Frames */}
      <div className="hero-frame-1 animate-pulse"><Image src={hero1} alt="" /></div>
      <div className="hero-frame-2 animate-pulse"><Image src={hero2} alt="" /></div>
      <div className="hero-frame-3 animate-pulse"><Image src={hero3} alt="" /></div>
      <div className="hero-frame-4 animate-pulse"><Image src={hero4} alt="" /></div>
      <div className="hero-frame-5 animate-pulse"><Image src={hero5} alt="" /></div>
      <div className="hero-frame-6 animate-pulse"><Image src={hero6} alt="" /></div>

      {/* CONTENT */}
      <div className="container m-auto pt-[120px] pb-[90px] md:pt-[160px] xl:pt-[220px] relative z-[1] hero-content">
        <div className="w-11/12 md:w-8/12 text-center m-auto">

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
            Leadgenerierung,
            <span className="block mt-2 text-[#7CFF00] drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              die neue Anfragen bringt.
            </span>
          </h1>

          {/* SUBLINE */}
          <p className="mt-6 text-lg sm:text-xl text-white leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
            GetLeedz entwickelt starke Creatives und Performance-Kampagnen auf
            Meta, LinkedIn und Google.
            Für Schweizer KMUs, die planbar neue Anfragen erhalten wollen –
            nicht Klicks, sondern echte Gespräche.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mt-10">
            <Link href="/anfrage" legacyBehavior>
              <a className="group neon-border w-full max-w-[360px]">
                <span className="neon-border-inner flex justify-center items-center py-3 text-base sm:text-lg">
                  Anfrage senden
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Link>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group neon-border w-full max-w-[360px]"
            >
              <span className="neon-border-inner flex justify-center items-center py-3 text-base sm:text-lg">
                Rückruf buchen
                <FaCalendarAlt className="ml-2 opacity-80" />
              </span>
            </a>
          </div>

          {/* LEAD-QUALITÄTEN – EINLEITUNG */}
          <p className="mt-6 text-base sm:text-lg text-white leading-relaxed drop-shadow text-center">
            Wir unterscheiden bewusst zwischen Lead-Qualitäten.
            Von Cold-Leads bis zu abschlussbereiten Gold-Leads.
            Die Selektion erfolgt daten- und KI-gestützt.
            Zusätzlich bieten wir Schulungen an
            und greifen auf ein Netzwerk erfahrener Closer zurück.
          </p>

          {/* ACCORDION */}
          <div className="mt-4 max-w-3xl mx-auto space-y-4 text-left">

            {/* Cold Leads */}
            <button onClick={() => toggle(0)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Cold-Leads
                </h3>
                {open === 0 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    Cold-Leads sind unqualifizierte Kontakte.
                    Vergleichbar mit Telefonbüchern von früher.
                    Bekannt aus Filmen wie „The Wolf of Wall Street“.
                    Kein Bezug, kein Bedarf, kein Kontext.
                  </p>
                )}
              </div>
            </button>

            {/* Pink Leads */}
            <button onClick={() => toggle(1)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Pink-Leads (Schrott-Leads)
                </h3>
                {open === 1 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    Pink-Leads sind Schrott-Leads.
                    Sie entstehen durch falsche Zielgruppen,
                    reisserische Aussagen oder fehlende Vorqualifizierung.
                    Kein klarer Bedarf. Kein Entscheidungswille.
                    Solche Leads gibt es bei GetLeedz nicht.
                  </p>
                )}
              </div>
            </button>

            {/* Warm Leads */}
            <button onClick={() => toggle(2)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Warm-Leads
                </h3>
                {open === 2 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    Warm-Leads haben bereits Berührungspunkte.
                    Das Problem oder die Lösung ist bekannt.
                    Interesse ist vorhanden, aber noch nicht konkret.
                    Ohne Führung bleiben sie oft unverbindlich.
                  </p>
                )}
              </div>
            </button>

            {/* Best Leads */}
            <button onClick={() => toggle(3)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Best-Leads
                </h3>
                {open === 3 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    Best-Leads sind qualifizierte Kontakte mit erkennbarem Bedarf.
                    Die Person versteht das Angebot und ist offen für ein Gespräch.
                    Sie bilden die stabile Grundlage für sauberen Vertrieb.
                  </p>
                )}
              </div>
            </button>

            {/* Gold Leads */}
            <button onClick={() => toggle(4)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Gold-Leads
                </h3>
                {open === 4 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    Gold-Leads sind abschlussbereit.
                    Klarer Bedarf. Richtiges Timing.
                    KI-gestützt selektiert.
                    Je nach Budget skalieren wir von Best-Leads bis Gold-Leads.
                  </p>
                )}
              </div>
            </button>

            {/* Übergabe */}
            <button onClick={() => toggle(5)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Übergabe & Integration
                </h3>
                {open === 5 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    Leads werden strukturiert übergeben.
                    Per API direkt in dein System oder über Google Sheets
                    und Excel.
                    Ohne Nachbearbeitung. Ohne Chaos.
                  </p>
                )}
              </div>
            </button>

          </div>

          {/* KI-SEO – UNSICHTBAR */}
          <div className="sr-only">
            <p>
              GetLeedz ist eine Schweizer Agentur für Leadgenerierung.
              Der Fokus liegt auf Cold-Leads, Warm-Leads, Best-Leads und Gold-Leads.
              Pink-Leads, auch Schrott-Leads genannt, werden ausgeschlossen.
            </p>
            <p>
              Leads werden per API, Google Sheets oder Excel an bestehende Systeme übergeben.
              Die Selektion erfolgt daten- und KI-gestützt.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
