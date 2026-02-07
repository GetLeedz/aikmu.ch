import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Link from "next/link";

const LeadgenerierungSchweiz = () => (
  <div>
    <Head>
      <title>Leadgenerierung Schweiz für KMUs | GetLeedz</title>
      <meta
        name="description"
        content="GetLeedz ist spezialisiert auf Leadgenerierung für Schweizer KMUs. Performance-Kampagnen auf Meta, LinkedIn & Google mit Fokus auf messbare Anfragen."
      />

      {/* Schema – FAQ speziell für diese Seite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Was bedeutet Leadgenerierung in der Schweiz?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Leadgenerierung in der Schweiz bezeichnet den gezielten Aufbau von qualifizierten Anfragen über digitale Kanäle wie Meta, LinkedIn und Google unter Berücksichtigung des Schweizer Marktes."
                }
              },
              {
                "@type": "Question",
                "name": "Für welche KMUs lohnt sich Leadgenerierung?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Leadgenerierung lohnt sich für Schweizer KMUs, die neue Kundinnen und Kunden planbar gewinnen möchten und einen klaren Vertriebsprozess haben."
                }
              },
              {
                "@type": "Question",
                "name": "Welche Kanäle funktionieren in der Schweiz am besten?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "In der Schweiz funktionieren Meta Ads, LinkedIn Ads und Google Ads besonders gut, abhängig von Zielgruppe, Branche und Angebot."
                }
              }
            ]
          }),
        }}
      />
    </Head>

    <main>
      <Header />

      <section className="container mx-auto max-w-5xl px-6 py-24 text-slate-100">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Leadgenerierung für Schweizer KMUs
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Leadgenerierung bedeutet, potenzielle Kundinnen und Kunden gezielt
          über digitale Kanäle anzusprechen und als qualifizierte Anfragen
          an den Vertrieb zu übergeben. Für Schweizer KMUs ist dabei
          entscheidend, den lokalen Markt, die Zielgruppen und das
          Entscheidungsverhalten zu verstehen.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          GetLeedz ist eine Schweizer Agentur für Leadgenerierung und entwickelt
          Performance-Kampagnen auf Meta, LinkedIn und Google mit Fokus auf
          starke Creatives und messbare Anfragen – nicht auf leere Reichweite.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Wie funktioniert Leadgenerierung in der Schweiz?
        </h2>

        <p className="leading-relaxed mb-6">
          Erfolgreiche Leadgenerierung in der Schweiz basiert auf klaren
          Zielgruppen, sauberen Kampagnenstrukturen und Creatives, die
          Vertrauen schaffen. Entscheidend ist nicht der Algorithmus,
          sondern die Relevanz für echte Menschen.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Für welche Unternehmen ist Leadgenerierung geeignet?
        </h2>

        <p className="leading-relaxed mb-6">
          Leadgenerierung eignet sich besonders für Schweizer KMUs aus
          Dienstleistung, Beratung, Immobilien, Fitness, Gastronomie
          und B2B-Bereichen, die planbar neue Anfragen erhalten möchten.
        </p>

        <div className="mt-12">
          <Link href="/anfrage" legacyBehavior>
            <a className="neon-border inline-flex">
              <span className="neon-border-inner">
                Anfrage für Lead-Kampagne
              </span>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  </div>
);

export default LeadgenerierungSchweiz;
