// components/lib/fbpixel.jsx
import { hasMarketingConsent } from "./consent";

export const FB_PIXEL_ID = "1285613311599646";

let initialized = false;

export const initFacebookPixel = () => {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return;
  if (initialized) return;

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  window.fbq("init", FB_PIXEL_ID);

  initialized = true;
};

export const track = (eventName, params = {}) => {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return;
  if (!window.fbq) return;

  window.fbq("track", eventName, params);
};
