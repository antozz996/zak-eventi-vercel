import { Link } from "../lib/router";
import { Seo } from "../components/Seo";

export function NotFoundPage() {
  return (
    <section className="not-found">
      <Seo title="Pagina non trovata | ZAK Eventi" description="La pagina richiesta non è disponibile." path="/404" noIndex />
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Questa scena non è ancora stata scritta.</h1>
        <Link className="button button--gold" to="/">Torna alla home</Link>
      </div>
    </section>
  );
}
