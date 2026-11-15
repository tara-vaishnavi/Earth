import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, LoaderCircle, X } from "lucide-react";

interface NasaImage {
  title: string;
  nasaId: string;
  imageUrl: string;
  description: string;
  credit: string;
  date: string;
}

interface NasaSearchItem {
  data?: Array<{
    title?: string;
    nasa_id?: string;
    description?: string;
    photographer?: string;
    center?: string;
    date_created?: string;
  }>;
  links?: Array<{ href?: string; rel?: string; render?: string }>;
}

interface NasaSearchResponse {
  collection?: { items?: NasaSearchItem[] };
}

interface NasaImageGalleryProps {
  title: string;
  query: string;
  onClose: () => void;
}

function nasaAssetUrl(value: string | undefined) {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol === "https:" && url.hostname === "images-assets.nasa.gov") {
      return url.href;
    }
  } catch {
    return null;
  }

  return null;
}

function captionFor(description: string | undefined) {
  const cleanDescription = description?.replace(/\s+/g, " ").trim();
  if (!cleanDescription) return "NASA Earth observation imagery.";
  if (cleanDescription.length <= 280) return cleanDescription;
  return `${cleanDescription.slice(0, 277).trimEnd()}…`;
}

export default function NasaImageGallery({
  title,
  query,
  onClose,
}: NasaImageGalleryProps) {
  const [images, setImages] = useState<NasaImage[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadImages() {
      try {
        const params = new URLSearchParams({
          q: query,
          media_type: "image",
          page_size: "12",
        });
        const response = await fetch(`https://images-api.nasa.gov/search?${params}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`NASA Image and Video Library returned ${response.status}.`);
        }

        const result = (await response.json()) as NasaSearchResponse;
        const records = (result.collection?.items ?? [])
          .map((item) => {
            const metadata = item.data?.[0];
            const preview = nasaAssetUrl(
              item.links?.find((link) => link.rel === "preview" || link.render === "image")?.href,
            );
            if (!metadata?.title || !preview) return null;

            return {
              title: metadata.title,
              nasaId: metadata.nasa_id ?? metadata.title,
              imageUrl: preview,
              description: captionFor(metadata.description),
              credit: metadata.photographer || metadata.center || "NASA",
              date: metadata.date_created
                ? new Date(metadata.date_created).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "",
            };
          })
          .filter((image): image is NasaImage => image !== null);

        if (records.length === 0) {
          throw new Error("NASA's image archive returned no usable images for this search.");
        }

        setImages(records);
        setError(null);
      } catch (caught) {
        if (caught instanceof DOMException && caught.name === "AbortError") return;
        setError(caught instanceof Error ? caught.message : "The NASA image gallery could not be loaded.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadImages();

    return () => {
      controller.abort();
    };
  }, [query]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % Math.max(images.length, 1));
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index - 1 + Math.max(images.length, 1)) % Math.max(images.length, 1));
      } else if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, onClose]);

  const activeImage = images[activeIndex];
  const changeImage = (direction: -1 | 1) => {
    setActiveIndex((index) => (index + direction + images.length) % images.length);
  };

  return (
    <div
      className="gallery-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="gallery-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-title"
        tabIndex={-1}
      >
        <div className="gallery-header">
          <div>
            <p className="gallery-kicker">NASA IMAGE AND VIDEO LIBRARY</p>
            <h2 id="gallery-title">{title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            className="gallery-close"
            type="button"
            onClick={onClose}
            aria-label="Close image gallery"
          >
            <X size={20} />
          </button>
        </div>

        {loading && (
          <div className="gallery-state" role="status">
            <LoaderCircle className="animate-spin" size={24} />
            <span>Searching NASA’s image archive…</span>
          </div>
        )}

        {!loading && error && (
          <div className="gallery-state gallery-error" role="alert">
            <p>{error}</p>
            <p className="gallery-error-note">Check your connection and try opening this gallery again.</p>
          </div>
        )}

        {!loading && !error && activeImage && (
          <>
            <div className="gallery-image-wrap">
              <img
                key={activeImage.nasaId}
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="gallery-image"
                onError={(event) => {
                  event.currentTarget.hidden = true;
                  setError("A NASA image could not be loaded. Close the gallery and try again.");
                }}
              />
              <div className="gallery-image-count" aria-live="polite">
                {activeIndex + 1} / {images.length}
              </div>
              <button
                className="gallery-arrow gallery-previous"
                type="button"
                onClick={() => changeImage(-1)}
                aria-label="Previous image"
                disabled={images.length < 2}
              >
                <ArrowLeft size={20} />
              </button>
              <button
                className="gallery-arrow gallery-next"
                type="button"
                onClick={() => changeImage(1)}
                aria-label="Next image"
                disabled={images.length < 2}
              >
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="gallery-caption">
              <div>
                <h3>{activeImage.title}</h3>
                {activeImage.date && <p className="gallery-date">{activeImage.date}</p>}
                <p className="gallery-description">{activeImage.description}</p>
                <p className="gallery-credit">Image credit: {activeImage.credit} / NASA</p>
              </div>
              <a
                href={activeImage.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-source-link"
              >
                NASA image <ExternalLink size={14} />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
