import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const Datenschutz = () => {
  return (
    <div>
      <Head>
        <title>Datenschutz – GetLeedz</title>
        <meta
          name="description"
          content="Informationen zur Bearbeitung personenbezogener Daten auf der Website von GetLeedz, deiner Agentur für Leadgenerierung."
        />
      </Head>

      <main className="min-h-screen bg-transparent text-white">
        <NavBar />

        <section className="container m-auto px-4 pt-[160px] pb-16 max-w-3xl">
          <h1 className="heading-2 mb-6">Datenschutz</h1>

          <div className="space-y-6 text-sm md:text-base text-slate-200 leading-relaxed">
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. In
              dieser Datenschutzerklärung informieren wir Sie darüber, welche
              Daten wir auf dieser Website erheben, wofür wir sie nutzen und
              welche Rechte Sie haben.
            </p>

            <div>
              <h2 className="font-semibold mb-1">1. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich für die Datenbearbeitung auf dieser Website ist:
                <br />
                GetLeedz GmbH
                <br />
                4102 Binningen
                <br />
                Schweiz
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@getleedz.com"
                  className="text-[var(--color-secondary)] hover:underline"
                >
                  info@getleedz.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">2. Hosting und Server-Logs</h2>
              <p>
                Unsere Website wird bei einem Provider in der Schweiz
                betrieben. Beim Aufruf der Seiten werden automatisch technische
                Daten (z.&nbsp;B. IP-Adresse, Datum und Uhrzeit des Zugriffs,
                aufgerufene Seite, Browsertyp) in sogenannten Server-Logfiles
                gespeichert. Diese Daten sind notwendig, um den sicheren Betrieb
                der Website zu gewährleisten und werden nicht dazu verwendet,
                um Rückschlüsse auf Ihre Person zu ziehen.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">3. Kontakt- und Anfrageformular</h2>
              <p>
                Wenn Sie über das Anfrageformular eine Lead-Kampagne anfragen,
                erfassen wir die von Ihnen eingegebenen Angaben (z.&nbsp;B.
                Name, Firma, E-Mail, Telefonnummer, Branche, Nachricht). Wir
                verwenden diese Daten ausschliesslich zur Bearbeitung Ihrer
                Anfrage, zur Vorbereitung eines möglichen Projekts und zur
                Kontaktaufnahme mit Ihnen.
              </p>
              <p className="mt-2">
                Die Übermittlung erfolgt per E-Mail an{" "}
                <span className="font-mono">info@getleedz.com</span>. Eine
                Weitergabe an Dritte findet nur statt, wenn dies für die
                Bearbeitung Ihrer Anfrage notwendig ist (z.&nbsp;B.
                technische Dienstleister) oder wir gesetzlich dazu verpflichtet
                sind.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">4. Cookies und Tracking</h2>
              <p>
                Aktuell setzen wir auf dieser Website keine
                personenbezogenen Tracking-Tools (wie Google Analytics) ein.
                Es können technisch notwendige Cookies verwendet werden, um die
                Grundfunktionen der Seite zu gewährleisten (z.&nbsp;B.
                Session-Cookies). Diese Cookies enthalten keine
                personenbezogenen Profile und werden in der Regel nach dem
                Schliessen des Browsers wieder gelöscht.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">5. Aufbewahrung und Löschung</h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für
                die genannten Zwecke erforderlich ist oder wir gesetzlich dazu
                verpflichtet sind. Anfragen und Korrespondenz werden
                üblicherweise für die Dauer der Geschäftsbeziehung und
                darüber hinaus gemäss den gesetzlichen Aufbewahrungsfristen
                aufbewahrt.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">
                6. Weitergabe an Dritte und Datenübermittlung ins Ausland
              </h2>
              <p>
                Wir verkaufen Ihre Daten nicht und geben sie nicht zu
                Marketingzwecken an Dritte weiter. Eine Weitergabe kann
                erfolgen an Dienstleister (z.&nbsp;B. Hosting-Provider,
                E-Mail-Anbieter), die in unserem Auftrag arbeiten. Soweit
                dabei Daten ins Ausland übermittelt werden, stellen wir sicher,
                dass ein angemessener Datenschutz gewährleistet ist.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">
                7. Ihre Rechte (Auskunft, Berichtigung, Löschung)
              </h2>
              <p>
                Sie haben das Recht, Auskunft darüber zu erhalten, welche
                personenbezogenen Daten wir über Sie bearbeiten. Zudem haben
                Sie das Recht auf Berichtigung unrichtiger Daten sowie – im
                Rahmen der gesetzlichen Bestimmungen – auf Löschung oder
                Einschränkung der Bearbeitung.
              </p>
              <p className="mt-2">
                Bitte wenden Sie sich hierfür an{" "}
                <a
                  href="mailto:info@getleedz.com"
                  className="text-[var(--color-secondary)] hover:underline"
                >
                  info@getleedz.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">
                8. Anpassungen dieser Datenschutzerklärung
              </h2>
              <p>
                Wir können diese Datenschutzerklärung bei Bedarf anpassen, um
                sie an geänderte rechtliche oder technische Rahmenbedingungen
                anzupassen. Es gilt jeweils die auf dieser Website
                veröffentlichte aktuelle Version.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Datenschutz;
