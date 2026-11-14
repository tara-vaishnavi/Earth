import { Globe2, Github, ExternalLink, Heart } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════
//  EDIT THE PLACEHOLDERS BELOW — Replace with your team's information
// ═══════════════════════════════════════════════════════════════════

const teamMembers: { name: string; githubUsername: string }[] = [
  { name: "[Team Member 1]", githubUsername: "github-username-1" },
  { name: "[Team Member 2]", githubUsername: "github-username-2" },
  { name: "[Team Member 3]", githubUsername: "github-username-3" },
  { name: "[Team Member 4]", githubUsername: "github-username-4" },
  { name: "[Team Member 5]", githubUsername: "github-username-5" },
];

const REPOSITORY_URL = "https://github.com/your-org/earth-pulse";

// ═══════════════════════════════════════════════════════════════════

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Explore Variables", href: "#explore" },
  { label: "About", href: "#about" },
  { label: "Our Team", href: "#team" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="team"
      className="relative pt-24 pb-12 overflow-hidden border-t border-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#050810] to-[#02040a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,0.06),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand & description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe2 className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              <span className="text-xl font-bold tracking-[0.2em] text-white">
                EARTH<span className="text-cyan-400">PULSE</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              An interactive NASA Earth Science project exploring our planet's
              environmental changes through satellite observations, scientific
              data, and meaningful discoveries.
            </p>
            <p className="text-xs text-cyan-300/60 tracking-wide pt-2">
              "Every Change Leaves a Clue. Discover Earth's Story."
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Repository link */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase">
              Project Repository
            </h4>
            <a
              href={REPOSITORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10
                hover:bg-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-cyan-300 transition-colors" />
              <span className="text-sm text-gray-300 group-hover:text-cyan-200 transition-colors">
                View on GitHub
              </span>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
            </a>
            <p className="text-xs text-gray-500 leading-relaxed">
              The complete source code for this website is available in our
              public repository.
            </p>
          </div>
        </div>

        {/* Team section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <h3 className="text-sm font-bold tracking-[0.3em] text-white/70 uppercase">
              Our Team
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={`https://github.com/${member.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/10
                  hover:bg-white/[0.07] hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center
                    bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20
                    group-hover:scale-110 transition-transform duration-500"
                  style={{
                    boxShadow: "0 0 0 0 rgba(34,211,238,0)",
                  }}
                >
                  <Github className="w-6 h-6 text-gray-300 group-hover:text-cyan-300 transition-colors" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors">
                    {member.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    @{member.githubUsername}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>A NASA Earth Science Project</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-cyan-400/60 fill-current" />
            <span>for our planet</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
