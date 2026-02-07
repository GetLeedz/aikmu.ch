import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const Impressum = () => {
  return (
    <div>
      <Head>
        <title>Impressum – GetLeedz</title>
        <meta
          name="description"
          content="Rechtliche Angaben, Kontaktinformationen und Verantwortliche für die Website von GetLeedz."
        />
      </Head>

      <main className="min-h-screen bg-transparent text-white">
        <NavBar />

        <section className="container m-auto px-4 pt-[160px] pb-16 max-w-3xl">
          <h1 className="heading-2 mb-6">Impressum</h1>

          <div className="space-y-6 text-sm md:text-base text-slate-200 leading-relaxed">
            <div>
              <h2 className="font-semibold mb-1">Verantwortlich für den Inhalt</h2>
              <p>
                GetLeedz GmbH<br />
                4102 Binningen<br />
                Schweiz
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">Kontakt</h2>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@getleedz.com"
                  className="text-[var(--color-secondary)] hover:underline"
                >
                  info@getleedz.com
                </a>
                <br />
                Web:{" "}
                <a
                  href="https://www.getleedz.com"
                  className="text-[var(--color-secondary)] hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.getleedz.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">Unternehmensform</h2>
              <p>
                GetLeedz GmbH<br />
                Gesellschaft mit beschränkter Haftung nach Schweizer Recht.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">Haftungsausschluss</h2>
              <p>
                Alle Inhalte wurden mit grösster Sorgfalt erstellt. Dennoch
                kann keine Gewähr für die Richtigkeit, Vollständigkeit und
                Aktualität übernommen werden. Haftungsansprüche gegen den
                Betreiber wegen Schäden materieller oder immaterieller Art
                werden ausgeschlossen, soweit gesetzlich zulässig.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">Urheberrechte</h2>
              <p>
                Die Inhalte und Werke auf dieser Website unterliegen dem
                schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung
                oder Verbreitung ausserhalb der engen Grenzen des
                Urheberrechts bedarf der vorherigen schriftlichen Zustimmung
                des Rechteinhabers.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Impressum;
