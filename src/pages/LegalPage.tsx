import { Link } from "../lib/router";
import { Seo } from "../components/Seo";

export function LegalPage({ type }: { type: "privacy" | "cookie" }) {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Cookie Policy";
  return (
    <>
      <Seo
        title={`${title} | ZAK Eventi`}
        description={`${title} di ZAK Eventi, documento in attesa di contenuto legale approvato.`}
        path={isPrivacy ? "/privacy-policy" : "/cookie-policy"}
        noIndex
      />
      <section className="legal-page">
        <div className="container legal-page__content">
          <p className="eyebrow">Documento placeholder</p>
          <h1>{title}</h1>
          <div className="legal-notice">
            <strong>Testo legale non ancora disponibile.</strong>
            <p>
              Questa pagina definisce soltanto lo spazio e l’URL del documento. Il contenuto definitivo dovrà
              essere fornito o validato da un professionista, insieme ai dati del titolare e agli strumenti
              effettivamente attivi sul sito.
            </p>
          </div>
          <h2>Informazioni necessarie</h2>
          <ul>
            <li>Dati completi del titolare del trattamento.</li>
            <li>Finalità, base giuridica e tempi di conservazione.</li>
            <li>Servizi terzi, cookie e strumenti di analytics effettivamente configurati.</li>
            <li>Modalità di esercizio dei diritti e contatti dedicati.</li>
          </ul>
          <Link className="button button--dark" to="/contatti">Torna ai contatti</Link>
        </div>
      </section>
    </>
  );
}
