export function isCHVisitor(req) {
  // Vercel / Cloudflare / Proxy Headers
  const country =
    req?.headers["x-vercel-ip-country"] ||
    req?.headers["cf-ipcountry"] ||
    null;

  return country === "CH";
}
