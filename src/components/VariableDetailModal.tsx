import { useEffect, useRef } from "react";
import { X, Satellite } from "lucide-react";
import type { EarthVariable } from "@/data/earthVariables";

interface VariableDetailModalProps {
  variable: EarthVariable | null;
  onClose: () => void;
}

export default function VariableDetailModal({
  variable,
  onClose,
}: VariableDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const Icon = variable?.icon;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (variable) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [variable, onClose]);

  if (!variable || !Icon) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full rounded-3xl overflow-hidden animate-[scaleIn_0.3s_ease-out]"
        style={{
          background: `linear-gradient(160deg, rgba(${variable.accentFrom}, 0.15), rgba(0,0,0,0.95))`,
          border: `1px solid rgba(${variable.accentFrom}, 0.3)`,
          boxShadow: `0 0 60px ${variable.glowColor}, 0 20px 60px rgba(0,0,0,0.6)`,
        }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20"
          style={{ background: `rgb(${variable.accentFrom})` }}
        />

        {/* Header */}
        <div className="relative p-8 pb-6 flex items-start gap-5">
          <div
            className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border backdrop-blur-md"
            style={{
              borderColor: `rgba(${variable.accentFrom}, 0.5)`,
              background: `rgba(${variable.accentFrom}, 0.15)`,
              boxShadow: `0 0 24px ${variable.glowColor}`,
            }}
          >
            <Icon
              className="w-8 h-8 text-white"
              style={{ filter: `drop-shadow(0 0 8px ${variable.glowColor})` }}
            />
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold tracking-[0.3em] text-white/40">
              {variable.number}
            </span>
            <h2
              className="text-2xl font-bold tracking-wide text-white uppercase mt-1"
              style={{ textShadow: `0 0 16px ${variable.glowColor}` }}
            >
              {variable.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
              bg-white/5 hover:bg-white/15 border border-white/10
              text-gray-300 hover:text-white transition-all duration-300"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="relative px-8 pb-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <p className="text-gray-200/90 leading-relaxed text-[15px]">
            {variable.longDescription}
          </p>

          {/* Facts */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-bold tracking-widest text-white/60 uppercase">
              <Satellite className="w-4 h-4" style={{ color: variable.hexColor }} />
              Key Observations
            </h3>
            <ul className="space-y-3">
              {variable.facts.map((fact, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                    style={{
                      background: `rgba(${variable.accentFrom}, 0.2)`,
                      color: variable.hexColor,
                      border: `1px solid rgba(${variable.accentFrom}, 0.4)`,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer accent line */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, transparent, rgb(${variable.accentFrom}), transparent)`,
          }}
        />
      </div>
    </div>
  );
}
