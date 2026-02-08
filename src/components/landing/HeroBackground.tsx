"use client";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Floating gradient orbs using pure CSS animations */}
      <div
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl"
        style={{ animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary-300/20 blur-3xl"
        style={{ animation: "float 10s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-100/40 blur-3xl"
        style={{ animation: "float 12s ease-in-out infinite 2s" }}
      />

      {/* Grid pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </div>
  );
}
