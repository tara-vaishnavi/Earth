import InvestigationPanel, {
  type InvestigationPanelData,
} from "@/components/InvestigationPanel";

const investigations: InvestigationPanelData[] = [
  {
    id: "temperature-ozone",
    number: "01",
    title: "TEMPERATURE & OZONE",
    description:
      "Earth's atmosphere and surface reveal changing temperature patterns. Satellite observations help scientists study atmospheric temperatures and monitor ozone distribution across the planet.",
    kind: "temperature",
    query: "NASA Earth temperature map ozone atmosphere satellite",
  },
  {
    id: "water-rainfall-vegetation",
    number: "02",
    title: "WATER, RAINFALL & VEGETATION",
    description:
      "Water availability, rainfall and vegetation are closely connected. NASA observations help scientists examine precipitation patterns, drought conditions and changes in vegetation across different ecosystems.",
    kind: "water",
    query: "NASA global precipitation rainfall vegetation forest satellite",
  },
  {
    id: "air-quality-pollution",
    number: "03",
    title: "AIR QUALITY & POLLUTION",
    description:
      "Satellite instruments help scientists observe aerosols and atmospheric gases, track pollution patterns and understand how air composition changes across regions.",
    kind: "air",
    query: "NASA TEMPO air quality atmospheric aerosols pollution satellite",
  },
];

export default function ExploreVariables() {
  return (
    <section
      id="investigation"
      className="relative overflow-hidden bg-[#050a13] py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,0.07),transparent_42%)]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="mb-14 max-w-4xl md:mb-20">
          <p className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            FIELD NOTES / EARTH SYSTEMS
          </p>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold uppercase leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            THE PLANET LEAVES CLUES.
            <br />
            <span className="text-cyan-200">WE INVESTIGATE.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Three interconnected perspectives. A deeper understanding of our changing planet.
          </p>
        </header>

        <div className="space-y-7 md:space-y-9">
          {investigations.map((investigation) => (
            <InvestigationPanel
              key={investigation.id}
              investigation={investigation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
