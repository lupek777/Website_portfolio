import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Media from "./Media";

type Props = {
  images: string[];
  label: string;
  altPrefix: string;
};

export default function ProjectCarousel({
  images,
  label,
  altPrefix,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);
  const scrollEndTimer = useRef<number | undefined>(undefined);

  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  const count = images.length;

  const extended =
    count > 1
      ? [images[count - 1], ...images, images[0]]
      : images;

  const getStep = useCallback(() => {
    const track = trackRef.current;
    const slide = track?.querySelector(".slide") as HTMLElement | null;

    if (!track || !slide) return 0;

    return (
      slide.getBoundingClientRect().width +
      parseFloat(getComputedStyle(track).gap || "0")
    );
  }, []);

  const centerSlide = useCallback(
    (index: number, smooth: boolean) => {
      const track = trackRef.current;
      const step = getStep();

      if (!track || !step) return;

      track.scrollTo({
        left: step * index,
        behavior: smooth ? "smooth" : "instant",
      });
    },
    [getStep]
  );

  useEffect(() => {
    if (!count) return;

    const frame = requestAnimationFrame(() => {
      centerSlide(count > 1 ? 1 : 0, false);
      setReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [count, centerSlide]);

  const move = (direction: number) => {
    if (count < 2 || busyRef.current) return;

    busyRef.current = true;

    const next = active + direction;
    setActive((next + count) % count);

    centerSlide(next + 1, true);

    window.setTimeout(() => {
      const normalized = (next + count) % count;
      centerSlide(normalized + 1, false);
      busyRef.current = false;
    }, 450);
  };

  const handleScrollEnd = useCallback(() => {
    const track = trackRef.current;

    if (!track || count < 2 || busyRef.current) return;

    const step = getStep();
    if (!step) return;

    const position = Math.round(track.scrollLeft / step);

    if (position === 0) {
      centerSlide(count, false);
      setActive(count - 1);
    } else if (position === count + 1) {
      centerSlide(1, false);
      setActive(0);
    } else {
      setActive(Math.max(0, Math.min(count - 1, position - 1)));
    }
  }, [count, getStep, centerSlide]);

  const handleScroll = () => {
    if (scrollEndTimer.current !== undefined) {
      window.clearTimeout(scrollEndTimer.current);
    }

    scrollEndTimer.current = window.setTimeout(() => {
      handleScrollEnd();
    }, 120);
  };

  useEffect(() => {
    return () => {
      if (scrollEndTimer.current !== undefined) {
        window.clearTimeout(scrollEndTimer.current);
      }
    };
  }, []);

  if (!count) return null;

  return (
    <div
      className="carousel carousel-centered"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <button
        className="arrow prev"
        type="button"
        aria-label="Previous image"
        onClick={() => move(-1)}
        disabled={count < 2}
      >
        <ChevronLeft />
      </button>

      <div
        className="track centered-track"
        ref={trackRef}
        tabIndex={0}
        style={{ visibility: ready ? "visible" : "hidden" }}
        onScroll={handleScroll}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }

          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        {extended.map((src, index) => (
          <div className="slide" key={`${index}-${src}`}>
            <Media
              src={src}
              ratio="3 / 4"
              alt={`${altPrefix} — photograph ${
                ((index - 1 + count) % count) + 1
              }`}
            />
          </div>
        ))}
      </div>

      <button
        className="arrow next"
        type="button"
        aria-label="Next image"
        onClick={() => move(1)}
        disabled={count < 2}
      >
        <ChevronRight />
      </button>
    </div>
  );
}