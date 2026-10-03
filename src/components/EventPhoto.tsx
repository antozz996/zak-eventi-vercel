type EventPhotoProps = {
  src: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square" | "hero";
};

export function EventPhoto({ src, alt, aspect = "landscape" }: EventPhotoProps) {
  return (
    <figure className={`event-photo event-photo--${aspect}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  );
}
