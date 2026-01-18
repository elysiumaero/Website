import React from "react";
import { useTeamImages } from "@/hooks/useTeamImages";

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  role: string;
  message: string;
  folderName: string;
}

export const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
  isOpen,
  onClose,
  name,
  role,
  message,
  folderName,
}) => {
  const imagePath = useTeamImages(folderName);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-background rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header with image and basic info */}
          <div className="flex gap-8 mb-8">
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 rounded-lg border border-border overflow-hidden bg-gradient-to-b from-primary/20 to-background">
                {imagePath ? (
                  <img
                    src={imagePath}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : null}
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
                  👤
                </div>
              </div>
            </div>

            {/* Name and role */}
            <div className="flex flex-col justify-start">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-2">{name}</h2>
              <p className="text-xl text-primary font-orbitron tracking-widest uppercase mb-6">{role}</p>
              <div className="h-1 w-16 bg-primary rounded-full" />
            </div>
          </div>

          {/* Message */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-background/50 p-6 rounded-lg border border-border/50">
              <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-wrap">{message}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-8 border-t border-border flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
