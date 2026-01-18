import React from "react";

interface RnDCardProps {
  icon: string;
  title: string;
  description: string;
}

export const RnDCard: React.FC<RnDCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg p-8 backdrop-blur-md border border-primary/30 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:border-primary">
      {/* Pulse glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>

        {/* Title */}
        <h3 className="text-xl font-bold font-orbitron mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-lg border border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Hover glow */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl -z-10"
        style={{
          animation: "pulse-cyan 2s ease-in-out infinite",
        }}
      />
    </div>
  );
};
