import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home = () => (
  <div>
    <Head>
      {/* ================= BASIC SEO ================= */}
      <title>AiKMU · More Leads für Schweizer KMUs</title>
      <meta
        name="description"
        content="AiKMU entwickelt starke Creatives und Performance-Kampagnen auf Meta, LinkedIn und Google für messbar neue Anfragen."
      />
      <link rel="icon" href="/favicon.ico" />

      {/* ================= OPEN GRAPH ================= */}
      <meta property="og:title" content="GetLeedz · More Leads für Schweizer KMUs" />
      <meta
        property="og:description"
        content="Leadgenerierung, die neue Anfragen bringt – mit starken Creatives und Performance-Kampagnen."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://de.getleedz.com/" />
      <meta
        property="og:image"
        content="https://de.getleedz.com/images/og-getleedz.jpg"
      />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="310" />
      <meta property="og:site_name" content="GetLeedz" />

      {/* ================= TWITTER ================= */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="GetLeedz · More Leads für Schweizer KMUs" />
      <meta
        name="twitter:description"
        content="Starke Creatives, saubere Lead-Qualität und Performance-Kampagnen für Schweizer KMUs."
      />
      <meta
        name="twitter:image"
        content="https://de.getleedz.com/images/og-getleedz.jpg"
      />

      {/* ================= SCHEMA.ORG – ORGANIZATION ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GetLeedz GmbH",
            "url": "https://de.getleedz.com",
            "logo": "https://de.getleedz.com/images/getleedz-logo.png",
            "image": "https://de.getleedz.com/images/og-getleedz.jpg",
            "description":
              "GetLeedz entwickelt starke Creatives, Performance-Kampagnen und Lead-Systeme für messbar neue Anfragen.",
            "areaServed": {
              "@type": "Country",
              "name": "Schweiz"
            },
            "sameAs": [
              "https://www.linkedin.com/company/getleedz/",
              "https://www.facebook.com/getleedz",
              "https://www.instagram.com/getleedz"
            ]
          })
        }}
      />

      {/* ================= SCHEMA.ORG – WEBSITE ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "GetLeedz",
            "url": "https://de.getleedz.com",
            "inLanguage": "de-CH",
            "publisher": {
              "@type": "Organization",
              "name": "GetLeedz GmbH"
            }
          })
        }}
      />

      {/* ================= SCHEMA.ORG – LOCAL BUSINESS + SERVICE ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GetLeedz GmbH",
            "url": "https://de.getleedz.com",
            "telephone": "+41 61 525 18 10",
            "image": "https://de.getleedz.com/images/og-getleedz.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Binningen",
              "postalCode": "4102",
              "addressCountry": "CH"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Schweiz"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Leadgenerierung für Schweizer KMUs",
                "serviceType": "Performance-Marketing & Leadgenerierung",
                "description":
                  "Leadgenerierung mit starken Creatives, Funnels, KI-gestützter Lead-Qualifizierung und sauberer Übergabe."
              }
            }
          })
        }}
      />

      {/* ================= SCHEMA.ORG – FAQ ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Was sind Gold Leads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Gold Leads sind abschlussbereite Kontakte mit klarem Bedarf. Die Selektion erfolgt daten- und KI-gestützt."
                }
              },
              {
                "@type": "Question",
                "name": "Wie werden Leads übergeben?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Leads werden per API, Google Sheets oder Excel strukturiert an bestehende Systeme übergeben."
                }
              }
            ]
          })
        }}
      />
    </Head>

    <main>
      <Header />
      <Footer />
    </main>
  </div>
);

export default Home;
