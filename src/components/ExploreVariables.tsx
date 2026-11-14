import { useState } from "react";
import { earthVariables, type EarthVariable } from "@/data/earthVariables";
import VariableCard from "./VariableCard";
import VariableDetailModal from "./VariableDetailModal";

export default function ExploreVariables() {
  const [selected, setSelected] = useState<EarthVariable | null>(null);
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  return (
    <section
      id="explore"
      className="relative py-24 lg:py-32 transition-colors duration-700 overflow-hidden"
      style={{
        background: hoveredColor
          ? `radial-gradient(ellipse at 50% 30%, rgba(${hoveredColor}, 0.12), transparent 60%), #050810`
          : "#050810",
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] text-gray-300">
              ENVIRONMENTAL VARIABLES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white leading-tight">
            EXPLORE THE SIX DIMENSIONS
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              OF OUR CHANGING EARTH
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Choose a variable. Discover a pattern. Understand the change.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {earthVariables.map((variable) => (
            <div
              key={variable.id}
              onMouseEnter={() => setHoveredColor(variable.accentFrom)}
              onMouseLeave={() => setHoveredColor(null)}
            >
              <VariableCard
                variable={variable}
                onLearnMore={setSelected}
              />
            </div>
          ))}
        </div>
      </div>

      <VariableDetailModal
        variable={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
