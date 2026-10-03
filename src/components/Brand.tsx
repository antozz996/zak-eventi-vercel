import { Link } from "../lib/router";

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="ZAK Eventi, torna alla home">
      <span className="brand__word">ZAK</span>
      <span className="brand__sub">Eventi</span>
    </Link>
  );
}
