import { Satellite, TrendingUp, Microscope, Globe2 } from "lucide-react";

const pillars = [
  {
    icon: Satellite,
    title: "Satellite Observations",
    description:
      "A fleet of Earth-observing satellites continuously monitors our planet, capturing data across the electromagnetic spectrum from visible light to microwave radiation.",
    color: "text-cyan-400",
    glow: "rgba(34,211,238,0.4)",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Datasets",
    description:
      "Decades of consistent measurements enable scientists to distinguish natural variability from human-driven change, revealing trends that single snapshots cannot.",
    color: "text-blue-400",
    glow: "rgba(59,130,246,0.4)",
  },
  {
    icon: Microscope,
    title: "Pattern Detection",
    description:
      "Advanced analytics and machine learning process vast datasets to detect environmental patterns, anomalies, and emerging risks before they become visible on the ground.",
    color: "text-violet-400",
    glow: "rgba(168,85,247,0.4)",
  },
  {
    icon: Globe2,
    title: "Global Understanding",
    description:
      "By integrating multiple variables — temperature, water, vegetation, air, pollution, and ozone — we build a holistic picture of Earth's interconnected systems.",
    color: "text-emerald-400",
    glow: "rgba(16,185,129,0.4)",
  },
];

export default function UnderstandingPlanet() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#080d1a] to-[#050810]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] text-gray-300">
              WHY IT MATTERS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white leading-tight">
            UNDERSTANDING OUR
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              CHANGING PLANET
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Satellite observations and long-term scientific datasets help
            researchers identify environmental patterns, detect trends, and
            understand the changes happening across Earth — from the atmosphere
            to the oceans, from forests to ice sheets.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 bg-white/[0.03] border border-white/10 backdrop-blur-sm
                  hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `0 0 30px ${pillar.glow}` }}
                />
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-500"
                    style={{ boxShadow: `0 0 16px ${pillar.glow}` }}
                  >
                    <Icon className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight bar */}
        <div className="mt-16 relative rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 border border-white/10 p-8 text-center">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Every measurement tells a story. Every trend reveals a trajectory.
            Every discovery brings us closer to understanding the only home we
            have ever known.
          </p>
          <div className="mt-4 text-cyan-400 text-sm font-bold tracking-[0.3em]">
            EARTH PULSE
          </div>
        </div>
      </div>
    </section>
  );
}
