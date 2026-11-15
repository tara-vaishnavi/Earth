import { useState, type MouseEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function UnderstandingPlanet() {
  const [messageVisible, setMessageVisible] = useState(false);
  const [buttonMotion, setButtonMotion] = useState({ x: 0, y: 0, scale: 1 });

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setButtonMotion({
      x: (event.clientX - (rect.left + rect.width / 2)) * 0.1,
      y: (event.clientY - (rect.top + rect.height / 2)) * 0.1,
      scale: 1.04,
    });
  };

  return (
    <section
      id="questions"
      className="investigation-bridge relative flex min-h-[78vh] items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      <div className="bridge-map-grid" aria-hidden="true" />
      <div className="bridge-scanline" aria-hidden="true" />
      <div className="bridge-marker marker-one" aria-hidden="true" />
      <div className="bridge-marker marker-two" aria-hidden="true" />
      <div className="bridge-marker marker-three" aria-hidden="true" />
      <div className="bridge-crosshair" aria-hidden="true">+</div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="section-eyebrow justify-center">
          <span className="section-eyebrow-dot" />
          SIGNAL DETECTED / INVESTIGATION PENDING
        </p>
        <h2 className="bridge-statement mt-8 text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
          Every unusual pattern raises a question.
          <br className="hidden sm:block" /> Every question begins an investigation.
        </h2>
        <button
          type="button"
          onClick={() => setMessageVisible((visible) => !visible)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setButtonMotion({ x: 0, y: 0, scale: 1 })}
          onPointerDown={() => setButtonMotion((motion) => ({ ...motion, scale: 0.97 }))}
          onPointerUp={() => setButtonMotion((motion) => ({ ...motion, scale: 1.04 }))}
          className="electric-cta group mt-12"
          aria-expanded={messageVisible}
          style={{
            transform: `translate(${buttonMotion.x}px, ${buttonMotion.y}px) scale(${buttonMotion.scale})`,
          }}
        >
          DIVE INTO THE INVESTIGATION
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        {messageVisible && (
          <p className="mt-5 text-sm text-cyan-100/80" role="status">
            The investigation experience will connect here when it is ready.
          </p>
        )}
      </div>
    </section>
  );
}
