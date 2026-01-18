import React from "react";

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const TechCard: React.FC<TechCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      {/* Icon */}
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-bold font-orbitron mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

      {/* Hover effect border */}
      <div className="absolute inset-0 border border-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};
