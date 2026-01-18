import React from "react";

interface SystemCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export const SystemCard: React.FC<SystemCardProps> = ({ icon, title, subtitle, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      {/* Icon */}
      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-bold font-orbitron mb-2 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-primary font-orbitron mb-4 tracking-widest uppercase">{subtitle}</p>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">{description}</p>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Border glow */}
      <div className="absolute inset-0 border border-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};
