import { useEffect, useState } from "react";
import { Globe2, Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "INVESTIGATIONS", href: "#investigation" },
  { label: "QUESTIONS", href: "#questions" },
  { label: "OUR TEAM", href: "#team" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#040915]/80 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_10px_30px_rgba(2,6,23,0.6)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12"
      >
        <button
          onClick={() => handleNavClick("#home")}
          className="group flex shrink-0 items-center gap-3"
          aria-label="VOLTZ 7 home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10">
            <Globe2 className="h-4 w-4 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
          </div>
          <span className="text-lg font-semibold tracking-[0.24em] text-white transition-colors group-hover:text-cyan-200">
            VOLTZ <span className="text-cyan-300">7</span>
          </span>
        </button>

        <ul className="hidden items-center gap-2 lg:gap-3 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="nav-pill"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="rounded-full border border-blue-300/40 bg-blue-600 px-4 py-2 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-colors hover:bg-blue-500 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`md:hidden overflow-hidden bg-[#030814]/90 backdrop-blur-xl transition-all duration-500 ${
          mobileOpen ? "visible max-h-72 border-t border-cyan-400/20" : "invisible max-h-0"
        }`}
      >
        <ul className="grid gap-3 px-5 py-5 sm:grid-cols-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="nav-pill w-full"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
