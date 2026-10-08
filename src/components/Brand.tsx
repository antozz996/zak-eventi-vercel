import { Link } from "../lib/router";

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="ZAK Eventi, torna alla home">
      <img className="brand__logo" src="/logos/zak-logo-oro.svg" alt="ZAK Eventi" width="900" height="524" decoding="async" />
    </Link>
  );
}
