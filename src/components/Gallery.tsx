import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { galleryItems } from "../data/siteConfig";
import { imageProps } from "../data/imageMetadata";
import { useSearchParams } from "../lib/router";
import type { GalleryCategory, GalleryItem } from "../types/content";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { isolateDialog } from "../utils/dialog";

type Filter = "Tutti" | GalleryCategory;
const filters: Filter[] = ["Tutti", "Diciottesimi", "Cerimonie", "Allestimenti", "Emozioni"];

function isFilter(value: string | null): value is Filter {
  return filters.includes(value as Filter);
}

export function GalleryFilter({
  active,
  onChange,
}: {
  active: Filter;
  onChange: (filter: Filter) => void;
}) {
  return (
    <div className="gallery-filter" aria-label="Filtra la gallery">
      {filters.map((filter) => (
        <button
          key={filter}
          className={active === filter ? "active" : ""}
          onClick={() => onChange(filter)}
          aria-pressed={active === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export function Lightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const item = items[index];
  const previous = useCallback(
    () => onChange((index - 1 + items.length) % items.length),
    [index, items.length, onChange],
  );
  const next = useCallback(
    () => onChange((index + 1) % items.length),
    [index, items.length, onChange],
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const restoreBackground = isolateDialog(dialogRef.current);
    dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    document.body.classList.add("lightbox-open");
    return () => {
      document.body.classList.remove("lightbox-open");
      restoreBackground();
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const focusableSelector = 'button:not([disabled]), a[href], video[controls], [tabindex]:not([tabindex="-1"])';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
        const first = focusable[0];
        const last = focusable.at(-1);
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [next, onClose, previous]);

  if (!item) return null;

  return (
    <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-label={`Anteprima: ${item.title}`}>
      <button className="icon-button lightbox__close" onClick={onClose} aria-label="Chiudi anteprima">
        <X />
      </button>
      <button className="icon-button lightbox__previous" onClick={previous} aria-label="Media precedente">
        <ChevronLeft />
      </button>
      <div className="lightbox__content">
        {item.src ? (
          item.mediaType === "video" ? (
            <video src={item.src} poster={item.poster} controls playsInline />
          ) : (
            <img src={item.src} alt={item.alt} />
          )
        ) : (
          <MediaPlaceholder label={item.title} aspect={item.aspect} video={item.mediaType === "video"} />
        )}
        <p aria-live="polite">{item.title}</p>
        <span>{index + 1} / {items.length}</span>
      </div>
      <button className="icon-button lightbox__next" onClick={next} aria-label="Media successivo">
        <ChevronRight />
      </button>
    </div>
  );
}

export function GalleryGrid({ limit }: { limit?: number }) {
  const [params, setParams] = useSearchParams();
  const queryFilter = params.get("filtro");
  const initialFilter = isFilter(queryFilter) ? queryFilter : "Tutti";
  const [selection, setSelection] = useState<{ index: number; filter: Filter } | null>(null);
  const activeFilter: Filter = limit ? "Tutti" : initialFilter;
  const selected = selection?.filter === activeFilter ? selection.index : null;
  const [pageSize, setPageSize] = useState({ filter: activeFilter, count: limit ?? 6 });
  const visibleCount = pageSize.filter === activeFilter ? pageSize.count : (limit ?? 6);

  const filteredItems = useMemo(
    () => galleryItems.filter((item) => activeFilter === "Tutti" || item.category === activeFilter),
    [activeFilter],
  );
  const visibleItems = filteredItems.slice(0, visibleCount);

  const changeFilter = (filter: Filter) => {
    setPageSize({ filter, count: limit ?? 6 });
    setSelection(null);
    if (!limit) {
      setParams(filter === "Tutti" ? {} : { filtro: filter }, { replace: true });
    }
  };

  return (
    <>
      {!limit && <GalleryFilter active={activeFilter} onChange={changeFilter} />}
      <div className="gallery-grid">
        {visibleItems.map((item, index) => (
          <button
            className={`gallery-item gallery-item--${item.aspect}`}
            key={item.id}
            onClick={() => setSelection({ index, filter: activeFilter })}
            aria-label={`Apri ${item.title}`}
          >
            {item.src ? (
              <img src={item.src} {...imageProps(item.src)} sizes="(max-width: 559px) 100vw, (max-width: 959px) 85vw, 66vw" alt={item.alt} loading="lazy" decoding="async" />
            ) : (
              <MediaPlaceholder label={item.title} aspect={item.aspect} video={item.mediaType === "video"} />
            )}
            <span className="gallery-item__caption">
              <span>{item.category}</span>
              <strong>{item.title}</strong>
            </span>
            <Maximize2 className="gallery-item__expand" aria-hidden="true" size={20} />
          </button>
        ))}
      </div>
      {!limit && visibleCount < filteredItems.length && (
        <div className="centered-action">
          <button className="button button--outline-dark" onClick={() => setPageSize({ filter: activeFilter, count: visibleCount + 4 })}>
            Carica altri momenti
          </button>
        </div>
      )}
      {selected !== null && (
        <Lightbox
          items={visibleItems}
          index={selected}
          onClose={() => setSelection(null)}
          onChange={(index) => setSelection({ index, filter: activeFilter })}
        />
      )}
    </>
  );
}
