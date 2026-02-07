import { useEffect, useState } from "react";
import {
  hasMarketingConsent,
  setMarketingConsent,
} from "../lib/consent";

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasMarketingConsent()) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] max-w-xl mx-auto rounded-xl bg-[#020617] border border-white/10 p-5 shadow-2xl backdrop-blur">
      <p className="text-sm text-slate-200 leading-relaxed">
        Wir verwenden Marketing-Technologien (z. B. Meta Pixel), um unsere
        Kampagnen zu messen und zu verbessern.  
        <br />
        <span className="text-slate-400">
          Keine Weitergabe deiner Daten, nur anonymisierte Events.
        </span>
      </p>

      <div className="mt-4 flex gap-3 justify-end">
        <button
          className="px-4 py-2 text-sm rounded-lg border border-white/20 text-slate-300 hover:bg-white/5"
          onClick={() => {
            setMarketingConsent(false);
            setVisible(false);
          }}
        >
          Ablehnen
        </button>

        <button
          className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-[#ff00ff] via-[#7aff00] to-[#00e5ff] text-black font-semibold"
          onClick={() => {
            setMarketingConsent(true);
            setVisible(false);
            window.location.reload(); // wichtig → Pixel lädt danach sauber
          }}
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
