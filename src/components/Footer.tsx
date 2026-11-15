import { ArrowRight, ExternalLink, Github, Globe2, Satellite } from "lucide-react";

const teamMembers: { name: string; githubUsername: string }[] = [
  { name: "[Team member name]", githubUsername: "[GitHub username]" },
  { name: "[Team member name]", githubUsername: "[GitHub username]" },
  { name: "[Team member name]", githubUsername: "[GitHub username]" },
  { name: "[Team member name]", githubUsername: "[GitHub username]" },
  { name: "[Team member name]", githubUsername: "[GitHub username]" },
];

const REPOSITORY_URL = "";

const scienceResources = [
  {
    title: "Earth temperature & atmosphere",
    organization: "NASA Earth Science",
    url: "https://science.nasa.gov/earth-science/",
  },
  {
    title: "Ozone monitoring",
    organization: "NASA Ozone Watch",
    url: "https://ozonewatch.gsfc.nasa.gov/",
  },
  {
    title: "Water & precipitation",
    organization: "Global Precipitation Measurement",
    url: "https://gpm.nasa.gov/",
  },
  {
    title: "Vegetation & forests",
    organization: "NASA Earth Observatory",
    url: "https://earthobservatory.nasa.gov/features/GlobalGarden",
  },
  {
    title: "Air quality & composition",
    organization: "NASA Atmospheric Composition",
    url: "https://airquality.gsfc.nasa.gov/",
  },
  {
    title: "Satellite pollution monitoring",
    organization: "NASA TEMPO Mission",
    url: "https://tempo.si.edu/",
  },
];

function isConfigured(value: string) {
  return value.length > 0 && !value.includes("[");
}

export default function Footer() {
  return (
    <footer
      id="team"
      className="relative overflow-hidden border-t border-cyan-100/10 bg-[#020711] px-5 pb-8 pt-24 sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,0.12),transparent_44%),linear-gradient(180deg,#020711_0%,#030916_100%)]" />
      <div className="footer-stars" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-14 text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-500/10 px-4 py-2 text-[9px] font-semibold tracking-[0.3em] text-cyan-100">
            <span className="section-eyebrow-dot" />
            MISSION PERSONNEL
          </div>
          <p className="text-[clamp(3.2rem,10vw,8rem)] font-semibold uppercase leading-[0.85] tracking-[-0.09em] text-white">
            VOLTZ <span className="text-cyan-300">7</span>
          </p>
          <h2 className="mt-8 text-2xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white sm:text-4xl">
            THE MINDS BEHIND THE MISSION
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Curiosity brought us together. Science drives our exploration.
          </p>
          <p className="mx-auto mt-7 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            We explore Earth&apos;s changing environmental systems through satellite observations,
            data visualisation and scientific trend analysis.
          </p>
        </div>

        <div className="mb-16 grid gap-10 lg:grid-cols-[0.85fr_1.5fr]">
          <section className="rounded-[28px] border border-cyan-200/15 bg-slate-950/60 p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <Globe2 className="h-5 w-5 text-cyan-300" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                Project repository
              </h3>
            </div>

            {isConfigured(REPOSITORY_URL) ? (
              <a
                href={REPOSITORY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="repository-cta"
              >
                EXPLORE OUR GITHUB REPOSITORY
                <ArrowRight size={18} />
              </a>
            ) : (
              <button
                type="button"
                className="repository-cta repository-cta-disabled"
                disabled
                title="Add the project repository URL to enable this link"
              >
                EXPLORE OUR GITHUB REPOSITORY
                <ArrowRight size={18} />
              </button>
            )}

            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              The repository link will be enabled once the project URL is added.
            </p>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 sm:p-8">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
              Team profiles
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member, index) => {
                const profileUrl = isConfigured(member.githubUsername)
                  ? `https://github.com/${member.githubUsername}`
                  : null;

                return (
                  <div key={`${member.name}-${index}`} className="team-profile">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10">
                      <Github size={17} className="text-cyan-200" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-white">{member.name}</p>
                      <p className="mt-0.5 truncate text-xs text-slate-400">{member.githubUsername}</p>
                    </div>
                    {profileUrl ? (
                      <a
                        href={profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-profile-link"
                        aria-label={`Open ${member.name}'s GitHub profile`}
                      >
                        <ExternalLink size={15} />
                      </a>
                    ) : (
                      <span className="team-profile-pending" aria-label="Profile link pending">
                        <ExternalLink size={15} />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <section className="mb-16">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">
                <span className="section-eyebrow-dot" />
                OPEN SCIENCE / NASA
              </p>
              <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[-0.035em] text-white sm:text-3xl">
                EXPLORE THE SCIENCE BEHIND THE MISSION
              </h3>
            </div>
            <Satellite className="hidden h-8 w-8 text-cyan-300/60 sm:block" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {scienceResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="science-resource"
              >
                <span>
                  <span className="science-resource-title">{resource.title}</span>
                  <span className="science-resource-org">{resource.organization}</span>
                </span>
                <ExternalLink size={16} className="shrink-0 text-cyan-200" />
              </a>
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] font-medium tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>VOLTZ 7 <span className="mx-2 text-cyan-400">|</span> NASA SPACE APPS CHALLENGE</p>
          <a
            href="#home"
            className="uppercase transition-colors hover:text-cyan-200"
            onClick={(event) => {
              event.preventDefault();
              document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Back to orbit ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
