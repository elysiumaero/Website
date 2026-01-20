import React, { useState, useEffect } from "react";
import { usePreloader } from "@/contexts/PreloaderContext";

const bootSequence = [
  "ELYSIUM AEROTECH",
  "Precision Over Boundaries.",
  "",
  "Initializing Flight Systems...",
  "Loading Autonomous Core...",
  "Synchronizing GARUD Surveillance...",
  "Establishing SAMVAD Communication...",
  "Engaging KAVACH Security Layer...",
  "",
  "STATUS: ALL SYSTEMS OPERATIONAL",
];

export const Preloader: React.FC = () => {
  const { showPreloader } = usePreloader();
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!showPreloader) return;

    let lineIndex = 0;
    let charIndex = 0;
    let currentLines: string[] = [];
    let currentLine = "";

    const typeInterval = setInterval(() => {
      if (lineIndex < bootSequence.length) {
        const currentText = bootSequence[lineIndex];

        if (charIndex < currentText.length) {
          currentLine += currentText[charIndex];
          charIndex++;
        } else {
          currentLines = [...currentLines, currentLine];
          currentLine = "";
          charIndex = 0;
          lineIndex++;
        }

        setDisplayedLines([...currentLines, currentLine]);
      } else {
        setIsComplete(true);
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [showPreloader]);

  if (!showPreloader) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1725] to-[#0a0e1a] z-50 flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 w-full max-w-2xl px-8">
        <div className="font-mono text-sm text-[#00d9ff] leading-relaxed space-y-0">
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className="h-5"
              data-easter-motto={line.includes("Precision Over Boundaries") ? "true" : undefined}
            >
              {line}
            </div>
          ))}
          {!isComplete && (
            <div className="h-5">
              <span className="inline-block w-2 h-4 bg-[#00d9ff] animate-blink-cursor" />
            </div>
          )}
        </div>

        {/* Loading bar (appears as text completes) */}
        {isComplete && (
          <div className="mt-8 animate-fade-in">
            <div className="h-1 bg-[#1a3a4a] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00d9ff] to-[#00a8cc] rounded-full w-full"
                style={{
                  animation: "pulse-cyan 1s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#00d9ff] opacity-30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#00d9ff] opacity-30" />
    </div>
  );
};
