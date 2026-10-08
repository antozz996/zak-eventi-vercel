import { imageProps } from "../data/imageMetadata";
type EventPhotoProps = {
  src: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square" | "hero";
  sizes?: string;
};

export function EventPhoto({ src, alt, aspect = "landscape", sizes = "(max-width: 779px) 100vw, 50vw" }: EventPhotoProps) {
  return (
    <figure className={`event-photo event-photo--${aspect}`}>
      <img src={src} {...imageProps(src)} sizes={sizes} alt={alt} loading="lazy" decoding="async" />
    </figure>
  );
}
