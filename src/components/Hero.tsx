import { lazy, Suspense } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const EarthGlobe = lazy(() => import("@/components/EarthGlobe"));

export default function Hero() {
  const scrollToExplore = () => {
    document.querySelector("#explore")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0e27] to-[#0d1b3e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,47,73,0.5),transparent_70%)]" />

      {/* Globe */}
      <div className="absolute inset-0 z-10">
        <Suspense fallback={<div className="w-full h-full" />}>
          <EarthGlobe className="w-full h-full" />
        </Suspense>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pointer-events-none">
        <div className="pointer-events-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm mb-8 animate-[fadeInUp_0.8s_ease-out]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-medium tracking-[0.2em] text-cyan-200">
            NASA EARTH SCIENCE PROJECT
          </span>
        </div>

        <h1 className="pointer-events-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white leading-tight animate-[fadeInUp_1s_ease-out_0.2s_both] drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          THE EARTH IS CONSTANTLY CHANGING.
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            ARE YOU READY TO DISCOVER HOW?
          </span>
        </h1>

        <p className="pointer-events-auto mt-6 text-sm sm:text-base text-gray-300/80 max-w-2xl leading-relaxed animate-[fadeInUp_1s_ease-out_0.4s_both]">
          Explore Earth's environmental patterns through satellite observations,
          scientific data and meaningful discoveries.
        </p>

        <button
          onClick={scrollToExplore}
          className="pointer-events-auto mt-10 group relative px-8 py-3.5 rounded-full text-sm font-bold tracking-widest text-white
            bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/40 backdrop-blur-sm
            hover:from-cyan-500/40 hover:to-blue-600/40 hover:border-cyan-300/70
            transition-all duration-500 hover:scale-105
            animate-[fadeInUp_1s_ease-out_0.6s_both]"
          style={{ boxShadow: "0 0 20px rgba(34,211,238,0.2)" }}
        >
          <span className="relative z-10 flex items-center gap-2">
            EXPLORE THE EARTH
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </span>
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: "0 0 30px rgba(34,211,238,0.6)" }}
          />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-[bounce_2s_ease-in-out_infinite]">
        <div className="w-6 h-10 rounded-full border-2 border-cyan-400/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-cyan-400/60" />
        </div>
      </div>
    </section>
  );
}
