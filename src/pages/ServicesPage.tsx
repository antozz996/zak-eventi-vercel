import { Check } from "lucide-react";
import { FinalCTA } from "../components/FinalCTA";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { pageMeta, serviceJourney } from "../data/siteConfig";

export function ServicesPage() {
  return (
    <>
      <Seo {...pageMeta.servizi} path="/servizi" />
      <section className="page-hero page-hero--services">
        <div className="container">
          <p className="eyebrow">Il percorso</p>
          <h1>Un evento non si riempie. Si costruisce.</h1>
          <p>Dal primo ascolto alla regia dei momenti più attesi, ogni passaggio parte dalla tua idea.</p>
        </div>
      </section>
      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Dal progetto alla festa"
            title="Otto passaggi. Una sola esperienza."
            description="Le voci descrivono il percorso progettuale. La disponibilità dei singoli servizi è da confermare durante l’appuntamento."
          />
          <ol className="service-journey">
            {serviceJourney.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </div>
                <Check aria-hidden="true" />
              </li>
            ))}
          </ol>
          <aside className="confirmation-note">
            <strong>Nota importante</strong>
            <p>La disponibilità dei servizi e le formule vengono definite durante l’appuntamento. Nessuna voce è presentata automaticamente come inclusa.</p>
          </aside>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
