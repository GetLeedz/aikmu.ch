import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

import CookieBanner from "../components/cookie/CookieBanner";
import { initFacebookPixel, track } from "../components/lib/fbpixel";
import { hasMarketingConsent } from "../components/lib/consent";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (hasMarketingConsent()) {
      initFacebookPixel();
      track("PageView");
    }

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
      {/* 🔒 App Root */}
<div id="app-root">
  <Header />
  <Component {...pageProps} />
  <Footer />
</div>


      {/* 🔒 Fixed Layer */}
      <div id="fixed-layer">
        <CookieBanner />
      </div>
    </>
  );
}

export default MyApp;
