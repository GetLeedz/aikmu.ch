// components/lib/consent.js
export const CONSENT_KEY = "getleedz_consent_marketing";

export const hasMarketingConsent = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "true";
};

export const setMarketingConsent = (value) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, value ? "true" : "false");
};
