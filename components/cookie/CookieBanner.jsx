// components/cookie/CookieBanner.jsx
import { useEffect, useState } from "react";
import Link from "next/link";
import { hasMarketingConsent, setMarketingConsent } from "../lib/consent";
import { initFacebookPixel } from "../lib/fbpixel";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Wenn noch keine Entscheidung existiert → Banner zeigen
    const existing = localStorage.getItem("getleedz_consent_marketing");
    if (existing === null) setVisible(true);

    // Falls bereits akzeptiert, Pixel sicher initialisieren
    if (hasMarketingConsent()) {
      initFacebookPixel();
    }
  }, []);

  const acceptAll = () => {
    setMarketingConsent(true);
    initFacebookPixel(); // sofort feuern, kein Reload nötig
    setVisible(false);
  };

  const decline = () => {
    setMarketingConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    // ❗ KEIN pointer-events-none mehr
    <div className="fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4">
      <div className="max-w-2xl w-full bg-gradient-to-r from-[#ff00ff] via-[#7aff00] to-[#00e5ff] p-[1px] rounded-2xl shadow-[0_0_40px_rgba(122,255,0,0.35)]">
        <div className="rounded-2xl bg-[#020617]/95 backdrop-blur-xl px-4 py-4 sm:px-6 sm:py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-sm sm:text-base">
            <p className="font-semibold text-white">
              Cookies für mehr Performance.
            </p>
            <p className="text-xs sm:text-sm text-gray-300">
              Wir verwenden Cookies, um deine Nutzungserfahrung zu verbessern und
              unsere Kampagnen auszuwerten. Mehr Infos in unserer{" "}
              <Link href="/datenschutz" legacyBehavior>
                <a className="neon-link underline-offset-2">
                  Datenschutzerklärung
                </a>
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 justify-end">
            <button
              type="button"
              onClick={decline}
              className="px-3 sm:px-4 py-2 rounded-full border border-slate-500 text-xs sm:text-sm text-gray-200 hover:border-[#7aff00] hover:text-white transition-colors"
            >
              Nur notwendige
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#ff00ff] via-[#7aff00] to-[#00e5ff] shadow-[0_0_20px_rgba(255,0,255,0.45)] hover:shadow-[0_0_28px_rgba(122,255,0,0.6)] transition-shadow"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
