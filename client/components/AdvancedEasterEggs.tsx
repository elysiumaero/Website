import React, { useState, useEffect } from "react";

// ===== EGG 10: STAR MAP ALIGNMENT =====
export const StarMapAlignment: React.FC = () => {
  const [isNightTime, setIsNightTime] = useState(false);

  useEffect(() => {
    const checkNightTime = () => {
      const hour = new Date().getHours();
      setIsNightTime(hour >= 19 || hour < 5); // 7 PM to 5 AM
    };

    checkNightTime();
    const interval = setInterval(checkNightTime, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isNightTime) {
      const background = document.querySelector("body");
      if (background) {
        background.style.transition = "background 2s ease-in-out";
        background.style.backgroundImage = "radial-gradient(2px 2px at 20% 30%, white, rgba(255,255,255,.2)), radial-gradient(2px 2px at 60% 70%, white, rgba(255,255,255,.2))";
        background.style.backgroundSize = "200% 200%";
      }
    }
  }, [isNightTime]);

  return null;
};

// ===== EGG 11: PROTOTYPE BUILD FOOTER =====
export const PrototypeBuildFooter: React.FC = () => {
  const [showPrototype, setShowPrototype] = useState(false);

  useEffect(() => {
    // 1% chance on page load
    const shouldShow = Math.random() < 0.01;
    setShowPrototype(shouldShow);
  }, []);

  if (!showPrototype) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-background/20 backdrop-blur-sm border-t border-primary/20 py-2 px-4 font-mono text-xs text-muted-foreground text-center pointer-events-none z-10"
      style={{
        animation: "blueprintFade 3s ease-in-out forwards",
      }}
    >
      <style>{`
        @keyframes blueprintFade {
          0% { opacity: 0; }
          50% { opacity: 0.8; }
          100% { opacity: 0; }
        }
      `}</style>
      Internal Prototype Build // EA-α
    </div>
  );
};

// ===== EGG 14: TIME-BASED SYSTEM MESSAGE (midnight) =====
export const MidnightCycleMessage: React.FC = () => {
  const [show, setShow] = useState(false);
  const [pulseIntensity, setPulseIntensity] = useState(0);

  useEffect(() => {
    const checkMidnight = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Trigger at midnight (00:00-00:01)
      if (hours === 0 && minutes === 0) {
        setShow(true);
        setPulseIntensity(1);

        setTimeout(() => {
          setShow(false);
          setPulseIntensity(0);
        }, 3000);
      }
    };

    // Check every minute
    const interval = setInterval(checkMidnight, 60000);
    checkMidnight(); // Initial check

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <>
      <style>{`
        @keyframes midnightPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 217, 255, 0.7);
          }
          70% {
            box-shadow: 0 0 0 100px rgba(0, 217, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 217, 255, 0);
          }
        }
        @keyframes midnightText {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          animation: `midnightPulse 3s ease-out forwards`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="font-mono text-primary"
            style={{
              animation: "midnightText 3s ease-in-out forwards",
            }}
          >
            New cycle initialized.
          </div>
        </div>
      </div>
    </>
  );
};

// ===== EGG: CALLSIGN TYPED DETECTION =====
export const CallsignDetector: React.FC = () => {
  const [lastKeysPressed, setLastKeysPressed] = useState("");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = (e.key || String.fromCharCode(e.keyCode)).toUpperCase();

      setLastKeysPressed((prev) => {
        const updated = (prev + key).slice(-5); // Keep last 5 keys

        if (updated.includes("GARUD")) {
          window.dispatchEvent(new CustomEvent("easterEgg:callsignRegistered"));
          return "";
        }

        return updated;
      });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return null;
};

// ===== EASTER EGG: BACKGROUND STAR EFFECT =====
export const BackgroundStarField: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: string; x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const hour = new Date().getHours();
    const isNight = hour >= 19 || hour < 5;

    if (isNight) {
      const starCount = 20;
      const newStars = Array.from({ length: starCount }, () => ({
        id: Math.random().toString(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
      }));
      setStars(newStars);
    }
  }, []);

  if (stars.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.5,
            animation: `twinkle ${2 + Math.random() * 3}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

// ===== MAIN ADVANCED EASTER EGGS WRAPPER =====
export const AdvancedEasterEggSystem: React.FC = () => {
  return (
    <>
      <StarMapAlignment />
      <PrototypeBuildFooter />
      <MidnightCycleMessage />
      <CallsignDetector />
      <BackgroundStarField />
    </>
  );
};
