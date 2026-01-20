import React, { useState, useEffect } from "react";
import { useEasterEggs } from "@/hooks/useEasterEggs";

// ===== DIAGNOSTICS PANEL =====
const DiagnosticsPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleDiagnostics = (e: CustomEvent) => {
      setIsOpen(e.detail.open);
    };

    window.addEventListener("easterEgg:diagnostics", handleDiagnostics as EventListener);
    return () =>
      window.removeEventListener("easterEgg:diagnostics", handleDiagnostics as EventListener);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        window.dispatchEvent(
          new CustomEvent("easterEgg:diagnostics", { detail: { open: false } }),
        );
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 backdrop-blur-md bg-background/80 border border-primary/30 rounded-lg p-4 shadow-2xl shadow-primary/20 w-80 font-mono text-xs animate-fade-in"
      style={{
        animation: "fadeInSlide 0.3s ease-out",
      }}
    >
      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="text-primary font-bold mb-4 tracking-wider">EA-DIAG v0.1</div>

      <div className="space-y-2 text-foreground">
        <div className="flex justify-between">
          <span className="text-primary">Flight Logic:</span>
          <span className="text-cyan-300">STANDBY</span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary">Navigation Core:</span>
          <span className="text-cyan-300">ACTIVE</span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary">Surveillance:</span>
          <span className="text-cyan-300">PASSIVE</span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary">Security Layer:</span>
          <span className="text-cyan-300">ARMED</span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary">System Integrity:</span>
          <span className="text-cyan-300">100%</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-primary/20 text-muted-foreground text-xs">
        Press ESC to close
      </div>
    </div>
  );
};

// ===== QUOTE OVERLAY =====
const QuoteOverlay: React.FC = () => {
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const handleQuote = () => {
      setShowQuote(true);
      setTimeout(() => setShowQuote(false), 5000);
    };

    window.addEventListener("easterEgg:quote", handleQuote);
    return () => window.removeEventListener("easterEgg:quote", handleQuote);
  }, []);

  if (!showQuote) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-40 animate-fade-in"
      style={{
        animation: "fadeInOut 5s ease-in-out forwards",
      }}
    >
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      <div className="text-center max-w-xl px-6">
        <p className="text-2xl font-orbitron text-primary text-center italic">
          "Boundaries exist to be measured — not feared."
        </p>
      </div>
    </div>
  );
};

// ===== SATELLITE FLYOVER =====
const SatelliteFlyover: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleSatellite = () => {
      setAnimate(true);
    };

    window.addEventListener("easterEgg:satelliteFlyover", handleSatellite);
    return () =>
      window.removeEventListener("easterEgg:satelliteFlyover", handleSatellite);
  }, []);

  if (!animate) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      style={{
        animation: "satellitePass 4s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes satellitePass {
          from {
            opacity: 0;
          }
          25% {
            opacity: 0.4;
          }
          75% {
            opacity: 0.4;
          }
          to {
            opacity: 0;
          }
        }
        .satellite-icon {
          animation: diagonalArc 4s ease-out forwards;
        }
        @keyframes diagonalArc {
          from {
            transform: translate(-100px, -100px);
          }
          to {
            transform: translate(calc(100vw + 100px), calc(100vh + 100px));
          }
        }
      `}</style>

      <div className="satellite-icon fixed text-2xl" style={{ top: "10%", left: "5%" }}>
        🛰️
      </div>
    </div>
  );
};

// ===== FLIGHT PATH TRAIL =====
const FlightPathTrail: React.FC = () => {
  const [trails, setTrails] = useState<Array<{ id: string; x: number; y: number }>>([]);

  useEffect(() => {
    const handleFlightPath = (e: CustomEvent) => {
      const { x, y } = e.detail;
      const id = Math.random().toString();
      setTrails((prev) => [...prev, { id, x, y }]);

      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== id));
      }, 1500);
    };

    window.addEventListener("easterEgg:flightPath", handleFlightPath as EventListener);
    return () =>
      window.removeEventListener("easterEgg:flightPath", handleFlightPath as EventListener);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="absolute w-1.5 h-1.5 bg-primary rounded-full"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: 0.3,
            boxShadow: "0 0 10px rgba(0, 217, 255, 0.6)",
            animation: "fadeOutSmall 1.5s ease-out forwards",
          }}
        >
          <style>{`
            @keyframes fadeOutSmall {
              from {
                opacity: 0.6;
                transform: scale(1);
              }
              to {
                opacity: 0;
                transform: scale(0.3);
              }
            }
          `}</style>
        </div>
      ))}
    </div>
  );
};

// ===== R&D ACCESS BADGE =====
const RDAccessBadge: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleAccess = () => {
      setShow(true);
      setTimeout(() => setShow(false), 4000);
    };

    window.addEventListener("easterEgg:rdAccess", handleAccess);
    return () => window.removeEventListener("easterEgg:rdAccess", handleAccess);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed top-32 right-12 px-4 py-2 border border-primary rounded-lg font-mono text-xs text-primary backdrop-blur-sm z-40"
      style={{
        animation: "badgeFade 4s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes badgeFade {
          0% {
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
      ACCESS LEVEL: RESEARCH OBSERVER
    </div>
  );
};

// ===== VIEWPORT RECALIBRATION MESSAGE =====
const ViewportNotification: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleRecalibrate = () => {
      setShow(true);
      setTimeout(() => setShow(false), 1500);
    };

    window.addEventListener("easterEgg:viewportRecalibrate", handleRecalibrate);
    return () =>
      window.removeEventListener("easterEgg:viewportRecalibrate", handleRecalibrate);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-6 left-6 font-mono text-xs text-primary z-40"
      style={{
        animation: "notificationFade 1.5s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes notificationFade {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
      <div>Viewport recalibrated.</div>
      <div>Coordinate system updated.</div>
    </div>
  );
};

// ===== RADAR SWEEP =====
const RadarSweep: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleRadar = () => {
      setShow(true);
      setTimeout(() => setShow(false), 2000);
    };

    window.addEventListener("easterEgg:radarSweep", handleRadar);
    return () => window.removeEventListener("easterEgg:radarSweep", handleRadar);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <style>{`
        @keyframes radarScan {
          from {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.6;
          }
          to {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
      `}</style>

      <div
        className="absolute w-32 h-32 border-2 border-primary rounded-full"
        style={{
          left: "50%",
          top: "50%",
          animation: "radarScan 2s ease-out forwards",
        }}
      />
    </div>
  );
};

// ===== STATUS LED =====
const SystemStatusLED: React.FC = () => {
  const [status, setStatus] = useState<"NOMINAL" | "CALIBRATING" | "DATA_SYNC">("NOMINAL");

  useEffect(() => {
    const statuses: Array<"NOMINAL" | "CALIBRATING" | "DATA_SYNC"> = [
      "NOMINAL",
      "CALIBRATING",
      "DATA_SYNC",
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % statuses.length;
      setStatus(statuses[index]);
    }, 20000 + Math.random() * 10000); // 20-30 seconds

    return () => clearInterval(interval);
  }, []);

  const statusColor = {
    NOMINAL: "bg-green-500",
    CALIBRATING: "bg-yellow-500",
    DATA_SYNC: "bg-blue-500",
  };

  return (
    <div className="fixed top-6 right-6 z-40 flex items-center gap-2 font-mono text-xs">
      <div className={`w-2 h-2 rounded-full ${statusColor[status]} animate-pulse`} />
      <span className="text-muted-foreground">{status}</span>
    </div>
  );
};

// ===== CALLSIGN REGISTERED =====
const CallsignNotification: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleCallsign = () => {
      setShow(true);
      setTimeout(() => setShow(false), 2000);
    };

    window.addEventListener("easterEgg:callsignRegistered", handleCallsign);
    return () =>
      window.removeEventListener("easterEgg:callsignRegistered", handleCallsign);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-20 right-6 font-mono text-xs text-primary px-3 py-2 rounded border border-primary/50 backdrop-blur-sm z-40"
      style={{
        animation: "callsignFade 2s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes callsignFade {
          0% { opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
      CALLSIGN REGISTERED.
    </div>
  );
};

// ===== FOUNDER-LEVEL MESSAGE =====
const FounderMessage: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleFounder = () => {
      setShow(true);
      setTimeout(() => setShow(false), 4000);
    };

    window.addEventListener("easterEgg:founderLevel", handleFounder);
    return () => window.removeEventListener("easterEgg:founderLevel", handleFounder);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
      style={{
        animation: "founderFade 4s ease-in-out forwards",
      }}
    >
      <style>{`
        @keyframes founderFade {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      <div className="text-center font-orbitron">
        <p className="text-xl text-primary mb-2">Built with intent.</p>
        <p className="text-sm text-muted-foreground">Not noise.</p>
      </div>
    </div>
  );
};

// ===== MAIN EASTER EGG WRAPPER =====
export const EasterEggSystem: React.FC = () => {
  useEasterEggs();

  return (
    <>
      <DiagnosticsPanel />
      <QuoteOverlay />
      <SatelliteFlyover />
      <FlightPathTrail />
      <RDAccessBadge />
      <ViewportNotification />
      <RadarSweep />
      <SystemStatusLED />
      <CallsignNotification />
      <FounderMessage />
    </>
  );
};
