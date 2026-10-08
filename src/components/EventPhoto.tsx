import { imageProps } from "../data/imageMetadata";
type EventPhotoProps = {
  src: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square" | "hero";
};

export function EventPhoto({ src, alt, aspect = "landscape" }: EventPhotoProps) {
  const { avifSrcSet, ...responsiveImageProps } = imageProps(src);
  return (
    <figure className={`event-photo event-photo--${aspect}`}>
      <picture>
        {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes="(max-width: 779px) 100vw, 50vw" />}
        <img src={src} {...responsiveImageProps} sizes="(max-width: 779px) 100vw, 50vw" alt={alt} loading="lazy" decoding="async" />
      </picture>
    </figure>
  );
}
