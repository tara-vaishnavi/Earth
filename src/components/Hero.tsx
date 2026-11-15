import { lazy, Suspense, useState, type MouseEvent } from "react";
import { ArrowRight, Satellite, Sparkles } from "lucide-react";

const EarthGlobe = lazy(() => import("@/components/EarthGlobe"));

export default function Hero() {
  const [buttonMotion, setButtonMotion] = useState({ x: 0, y: 0, scale: 1 });

  const scrollToExplore = () => {
    document.querySelector("#investigation")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - (rect.left + rect.width / 2)) * 0.12;
    const offsetY = (event.clientY - (rect.top + rect.height / 2)) * 0.12;
    setButtonMotion({ x: offsetX, y: offsetY, scale: 1.04 });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#020610] via-[#071425] to-[#0b1d3d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,116,144,0.26),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.14),transparent_40%)]" />

      <div className="hero-astral" aria-hidden="true">
        <span className="shooting-star shooting-star-one" />
        <span className="shooting-star shooting-star-two" />
        <span className="shooting-star shooting-star-three" />
        <div className="satellite-orbit satellite-orbit-one">
          <Satellite className="hero-satellite satellite-one" size={18} />
        </div>
        <div className="satellite-orbit satellite-orbit-two">
          <Satellite className="hero-satellite satellite-two" size={14} />
        </div>
        <div className="satellite-orbit satellite-orbit-three">
          <Satellite className="hero-satellite satellite-three" size={12} />
        </div>
      </div>

      <div className="absolute inset-0 z-10 opacity-90">
        <Suspense fallback={<div className="h-full w-full" />}>
          <EarthGlobe className="h-full w-full" />
        </Suspense>
      </div>

      <div className="pointer-events-none relative z-20 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <div className="pointer-events-auto mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          <span className="text-[10px] font-medium tracking-[0.28em] text-cyan-100 uppercase">
            NASA SPACE APPS CHALLENGE
          </span>
        </div>

        <h1 className="pointer-events-auto max-w-5xl text-4xl font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[6rem] drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]">
          THE EARTH IS SPEAKING.
          <br />
          <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            ARE WE OBSERVING?
          </span>
        </h1>

        <p className="pointer-events-auto mt-6 max-w-2xl text-lg text-slate-200/80 md:text-xl">
          Decoding the patterns of a living planet.
        </p>

        <button
          type="button"
          onClick={scrollToExplore}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setButtonMotion({ x: 0, y: 0, scale: 1 })}
          onPointerDown={() => setButtonMotion((motion) => ({ ...motion, scale: 0.97 }))}
          onPointerUp={() => setButtonMotion((motion) => ({ ...motion, scale: 1.04 }))}
          className="electric-cta hero-cta group pointer-events-auto mt-10"
          style={{
            transform: `translate(${buttonMotion.x}px, ${buttonMotion.y}px) scale(${buttonMotion.scale})`,
          }}
        >
          EXPLORE THE EARTH
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-[bounce_2s_ease-in-out_infinite]">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cyan-400/30 p-1.5">
          <div className="h-2 w-1 rounded-full bg-cyan-300/80" />
        </div>
      </div>
    </section>
  );
}
