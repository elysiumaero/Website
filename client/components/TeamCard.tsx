import React from "react";
import { useNavigate } from "react-router-dom";
import { useTeamImages } from "@/hooks/useTeamImages";

interface TeamCardProps {
  name: string;
  role: string;
  folderName: string;
  memberId?: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ name, role, folderName, memberId }) => {
  const navigate = useNavigate();
  const imagePath = useTeamImages(folderName);
  const memberIdentifier = memberId || name.replace(/\s+/g, "");

  const handleClick = () => {
    navigate(`/team/${memberIdentifier}`);
  };

  return (
    <button
      onClick={handleClick}
      className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-left w-full cursor-pointer"
    >
      {/* Image container */}
      <div className="relative h-64 bg-gradient-to-b from-primary/20 to-background overflow-hidden">
        {imagePath ? (
          <img
            src={imagePath}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              // Fallback to gradient if image doesn't exist
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : null}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Icon fallback */}
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
          👤
        </div>
      </div>

      {/* Info section */}
      <div className="p-6 relative z-10">
        <h3 className="text-lg font-bold font-orbitron text-foreground group-hover:text-primary transition-colors mb-1">
          {name}
        </h3>
        <p className="text-sm text-primary font-orbitron tracking-widest uppercase">{role}</p>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 border border-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl -z-10" />
    </button>
  );
};
