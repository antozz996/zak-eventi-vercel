import { MediaPlaceholder } from "./MediaPlaceholder";

type EditorialImageBlockProps = {
  eyebrow?: string;
  title: string;
  text: string;
  mediaLabel: string;
  reverse?: boolean;
  children?: React.ReactNode;
};

export function EditorialImageBlock({
  eyebrow,
  title,
  text,
  mediaLabel,
  reverse = false,
  children,
}: EditorialImageBlockProps) {
  return (
    <div className={`editorial-block${reverse ? " editorial-block--reverse" : ""}`}>
      <MediaPlaceholder label={mediaLabel} aspect="portrait" />
      <div className="editorial-block__content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
}
