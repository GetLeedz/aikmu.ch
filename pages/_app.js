import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

import CookieBanner from "../components/cookie/CookieBanner";
import { initFacebookPixel, track } from "../components/lib/fbpixel";
import { hasMarketingConsent } from "../components/lib/consent";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // 🔐 Initialisierung nur bei Marketing-Consent
    if (hasMarketingConsent()) {
      initFacebookPixel();
      track("PageView");
    }

    // 🔁 PageView bei echten Seitenwechseln
    const handleRouteChange = () => {
      if (hasMarketingConsent()) {
        track("PageView");
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* 🔒 App Root – KEINE CSS-Transforms, KEINE Filter */}
      <div id="app-root">
        <Component {...pageProps} />
      </div>

      {/* 🔒 Fixed Layer – komplett entkoppelt */}
      <div id="fixed-layer">
        <CookieBanner />
      </div>
    </>
  );
}

export default MyApp;
