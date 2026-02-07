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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#020617] to-black">
      {/* Decorative */}
      <div className="hero-frame-1"><Image src={hero1} alt="" /></div>
      <div className="hero-frame-2"><Image src={hero2} alt="" /></div>
      <div className="hero-frame-3"><Image src={hero3} alt="" /></div>
      <div className="hero-frame-4"><Image src={hero4} alt="" /></div>
      <div className="hero-frame-5"><Image src={hero5} alt="" /></div>
      <div className="hero-frame-6"><Image src={hero6} alt="" /></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-[140px] pb-[100px] text-center">
        {/* HEADLINE */}
        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
          Leadgenerierung,
          <span className="block text-[#7CFF00] mt-2">
            die neue Anfragen bringt.
          </span>
        </h1>

        {/* SUBLINE */}
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          GetLeedz entwickelt starke Creatives und Performance-Kampagnen auf
          Meta, LinkedIn und Google – für Schweizer KMUs.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <Link href="/anfrage" legacyBehavior>
            <a className="neon-border w-full max-w-[320px]">
              <span className="neon-border-inner flex items-center justify-center py-2 text-base">
                Anfrage senden <FaArrowRight className="ml-2" />
              </span>
            </a>
          </Link>

          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-border w-full max-w-[320px]"
          >
            <span className="neon-border-inner flex items-center justify-center py-2 text-base">
              Rückruf buchen <FaCalendarAlt className="ml-2" />
            </span>
          </a>
        </div>

        {/* LEAD TEXT */}
        <p className="mt-8 text-base text-white/80 max-w-3xl mx-auto">
          Wir unterscheiden bewusst zwischen Lead-Qualitäten – von Cold-Leads
          bis zu abschlussbereiten Gold-Leads. Daten- und KI-gestützt.
        </p>

        {/* ACCORDION */}
        <div className="mt-6 space-y-4 text-left max-w-3xl mx-auto">
          {[
            {
              title: "Cold-Leads",
              text:
                "Unqualifizierte Kontakte. Kein Bedarf, kein Kontext, kein Bezug."
            },
            {
              title: "Pink-Leads (Schrott-Leads)",
              text:
                "Entstehen durch falsche Zielgruppen oder reisserische Aussagen."
            },
            {
              title: "Warm-Leads",
              text:
                "Interesse vorhanden, aber noch nicht entscheidungsbereit."
            },
            {
              title: "Best-Leads",
              text:
                "Qualifizierte Kontakte mit erkennbarem Bedarf."
            },
            {
              title: "Gold-Leads",
              text:
                "Abschlussbereit. Klarer Bedarf. Richtiges Timing."
            },
            {
              title: "Übergabe & Integration",
              text:
                "Übergabe per API, Google Sheets oder Excel – strukturiert."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#020617]/95 border border-white/10 rounded-xl"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left p-5"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <span className="text-white text-xl">
                    {open === i ? "−" : "+"}
                  </span>
                </div>

                {open === i && (
                  <p className="mt-3 text-white/90 leading-relaxed">
                    {item.text}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
