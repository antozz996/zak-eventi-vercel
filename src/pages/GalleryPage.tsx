import { GalleryGrid } from "../components/Gallery";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { pageMeta } from "../data/siteConfig";

export function GalleryPage() {
  return (
    <>
      <Seo {...pageMeta.gallery} path="/gallery" />
      <section className="page-hero page-hero--gallery">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1>Non pose. Momenti che accadono.</h1>
          <p>Ingressi, dettagli, applausi e abbracci: la location raccontata attraverso chi la vive.</p>
        </div>
      </section>
      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Archivio emozionale"
            title="Scegli una scena."
            description="I media mostrati sono placeholder strutturali. Saranno sostituiti con fotografie e video originali ZAK."
          />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
