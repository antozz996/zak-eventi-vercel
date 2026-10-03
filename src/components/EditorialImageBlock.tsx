import { MediaPlaceholder } from "./MediaPlaceholder";
import { EventPhoto } from "./EventPhoto";

type EditorialImageBlockProps = {
  eyebrow?: string;
  title: string;
  text: string;
  mediaLabel: string;
  reverse?: boolean;
  image?: string;
  imageAlt?: string;
  aspect?: "portrait" | "landscape" | "square";
  children?: React.ReactNode;
};

export function EditorialImageBlock({
  eyebrow,
  title,
  text,
  mediaLabel,
  reverse = false,
  image,
  imageAlt,
  aspect = "portrait",
  children,
}: EditorialImageBlockProps) {
  return (
    <div className={`editorial-block${reverse ? " editorial-block--reverse" : ""}`}>
      {image ? <EventPhoto src={image} alt={imageAlt ?? mediaLabel} aspect={aspect} /> : <MediaPlaceholder label={mediaLabel} aspect={aspect} />}
      <div className="editorial-block__content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
}
