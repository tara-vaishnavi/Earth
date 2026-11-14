import { useRef, type MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import type { EarthVariable } from "@/data/earthVariables";

interface VariableCardProps {
  variable: EarthVariable;
  onLearnMore: (variable: EarthVariable) => void;
}

export default function VariableCard({
  variable,
  onLearnMore,
}: VariableCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = variable.icon;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out
        hover:scale-[1.03] hover:-translate-y-2
        bg-gradient-to-br backdrop-blur-sm
        border border-white/10 hover:border-white/30"
      style={
        {
          background: `linear-gradient(135deg, rgba(${variable.accentFrom}, 0.12), rgba(${variable.accentTo}, 0.06))`,
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 30px ${variable.glowColor}, inset 0 0 20px rgba(${variable.accentFrom}, 0.1)`,
        }}
      />

      {/* Spotlight effect following cursor */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at var(--mx) var(--my), rgba(${variable.accentFrom}, 0.15), transparent 70%)`,
        }}
      />

      {/* Visual area */}
      <div
        className="relative h-44 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(${variable.accentFrom}, 0.25), rgba(${variable.accentTo}, 0.1))`,
        }}
      >
        {/* Animated gradient orbs */}
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
          style={{ background: `rgb(${variable.accentFrom})` }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          style={{ background: `rgb(${variable.accentTo})` }}
        />

        {/* Icon centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center border-2 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
            style={{
              borderColor: `rgba(${variable.accentFrom}, 0.5)`,
              background: `rgba(${variable.accentFrom}, 0.1)`,
              boxShadow: `0 0 20px ${variable.glowColor}`,
            }}
          >
            <Icon
              className="w-10 h-10 text-white drop-shadow-lg"
              style={{ filter: `drop-shadow(0 0 6px ${variable.glowColor})` }}
            />
          </div>
        </div>

        {/* Number badge */}
        <span className="absolute top-3 left-4 text-xs font-bold tracking-widest text-white/40">
          {variable.number}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3 relative">
        <h3
          className="text-lg font-bold tracking-wide text-white uppercase"
          style={{ textShadow: `0 0 12px ${variable.glowColor}` }}
        >
          {variable.title}
        </h3>
        <p className="text-sm text-gray-300/90 leading-relaxed">
          {variable.description}
        </p>

        <button
          onClick={() => onLearnMore(variable)}
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide
            text-white/80 hover:text-white transition-all duration-300
            group/btn mt-2"
          style={{ color: `rgb(${variable.accentFrom})` }}
        >
          <span className="border-b border-transparent group-hover/btn:border-current transition-all pb-0.5">
            Learn About This
          </span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
