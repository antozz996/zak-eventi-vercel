import { Image, Play } from "lucide-react";

type MediaPlaceholderProps = {
  label: string;
  aspect?: "portrait" | "landscape" | "square" | "hero";
  video?: boolean;
  className?: string;
};

export function MediaPlaceholder({
  label,
  aspect = "landscape",
  video = false,
  className = "",
}: MediaPlaceholderProps) {
  const Icon = video ? Play : Image;
  return (
    <div
      className={`media-placeholder media-placeholder--${aspect} ${className}`}
      role="img"
      aria-label={`${label}. Contenuto visivo da sostituire con asset originale ZAK.`}
    >
      <span className="media-placeholder__glow" />
      <Icon aria-hidden="true" size={24} strokeWidth={1.25} />
      <span>{label}</span>
      <small>Asset originale da inserire</small>
    </div>
  );
}
