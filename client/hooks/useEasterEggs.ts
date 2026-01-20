import { useEffect, useRef, useCallback } from "react";

interface EasterEggState {
  diagnosticsOpen: boolean;
  rdAccessLevel: number;
  calledDiagnosticsThisSession: boolean;
  mouseIdleRadarTriggered: boolean;
  satelliteFlyoverTriggered: boolean;
  developerMessageLogged: boolean;
  founderEggSequence: number;
  lastQuoteHoverTime: number;
}

const initialState: EasterEggState = {
  diagnosticsOpen: false,
  rdAccessLevel: 0,
  calledDiagnosticsThisSession: false,
  mouseIdleRadarTriggered: false,
  satelliteFlyoverTriggered: false,
  developerMessageLogged: false,
  founderEggSequence: 0,
  lastQuoteHoverTime: 0,
};

// Store state globally to persist across re-renders
let easterEggState: EasterEggState = { ...initialState };

export const useEasterEggs = () => {
  const stateRef = useRef(easterEggState);
  const listenerCleanupRef = useRef<Array<() => void>>([]);
  const idleTimerRef = useRef<NodeJS.Timeout>();
  const lastMouseMoveRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mousePathRef = useRef<Array<{ x: number; y: number }>>([]);
  const lastFlightPathTriggerRef = useRef<number>(0);
  const scrollVelocityRef = useRef<{ lastScrollY: number; lastTime: number }>({
    lastScrollY: 0,
    lastTime: 0,
  });

  // ===== EGG 5: Developer Console Recognition =====
  const logDeveloperMessage = useCallback(() => {
    if (!stateRef.current.developerMessageLogged) {
      console.log(
        "%cElysium Aerotech",
        "font-size: 20px; font-weight: bold; color: #00d9ff; font-family: Orbitron;",
      );
      console.log("%cPrecision Over Boundaries.", "font-size: 14px; color: #00d9ff; font-family: monospace;");
      console.log(
        "%cIf you're reading this,\nyou understand how systems truly work.",
        "font-size: 12px; color: #a0aec0; font-family: monospace; margin-top: 8px;",
      );
      stateRef.current.developerMessageLogged = true;
    }
  }, []);

  // ===== EGG 1: System Diagnostics Mode (Ctrl+Shift+D) =====
  const handleDiagnosticsToggle = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key === "D") {
      e.preventDefault();
      stateRef.current.diagnosticsOpen = !stateRef.current.diagnosticsOpen;
      window.dispatchEvent(
        new CustomEvent("easterEgg:diagnostics", {
          detail: { open: stateRef.current.diagnosticsOpen },
        }),
      );
    }
  }, []);

  // ===== EGG 6: R&D Access Level Indicator (click title 3x) =====
  const handleRDClickCounter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.textContent?.includes("R&D") || target.textContent?.includes("Research")) {
      stateRef.current.rdAccessLevel++;
      if (stateRef.current.rdAccessLevel === 3) {
        window.dispatchEvent(
          new CustomEvent("easterEgg:rdAccess", {
            detail: { level: "RESEARCH OBSERVER" },
          }),
        );
        stateRef.current.rdAccessLevel = 0;
      }
    }
  }, []);

  // ===== EGG 2: Hidden Engineering Quote (7 second hover) =====
  const handleMottoHover = useCallback(() => {
    const now = Date.now();
    if (now - stateRef.current.lastQuoteHoverTime > 10000) {
      stateRef.current.lastQuoteHoverTime = now;
      window.dispatchEvent(new CustomEvent("easterEgg:quote"));
    }
  }, []);

  // ===== EGG 7: Hidden Coordinate System Message (resize < 600px) =====
  const handleViewportResize = useCallback(() => {
    if (window.innerWidth < 600) {
      window.dispatchEvent(new CustomEvent("easterEgg:viewportRecalibrate"));
    }
  }, []);

  // ===== EGG 12: Mouse Idle Radar Sweep =====
  const resetIdleTimer = useCallback(() => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }

    idleTimerRef.current = setTimeout(() => {
      if (!stateRef.current.mouseIdleRadarTriggered) {
        stateRef.current.mouseIdleRadarTriggered = true;
        window.dispatchEvent(new CustomEvent("easterEgg:radarSweep"));
      }
    }, 6000);
  }, []);

  // ===== EGG 4: Flight Path Memory (curved mouse) =====
  const handleMouseMove = useCallback((e: MouseEvent) => {
    lastMouseMoveRef.current = { x: e.clientX, y: e.clientY };
    mousePathRef.current.push({ x: e.clientX, y: e.clientY });

    // Keep only last 20 points
    if (mousePathRef.current.length > 20) {
      mousePathRef.current.shift();
    }

    // Detect curved movement every ~2 seconds
    const now = Date.now();
    if (now - lastFlightPathTriggerRef.current > 2000 && mousePathRef.current.length >= 15) {
      // Simple curvature detection
      const curve = detectCurvature(mousePathRef.current);
      if (curve > 0.8) {
        // High curvature
        lastFlightPathTriggerRef.current = now;
        window.dispatchEvent(
          new CustomEvent("easterEgg:flightPath", {
            detail: { x: e.clientX, y: e.clientY },
          }),
        );
        mousePathRef.current = [];
      }
    }

    resetIdleTimer();
  }, [resetIdleTimer]);

  // ===== EGG 3: Satellite Flyover (slow scroll) =====
  const handleScroll = useCallback(() => {
    const now = Date.now();
    const currentScrollY = window.scrollY;
    const timeDelta = now - scrollVelocityRef.current.lastTime;
    const scrollDelta = currentScrollY - scrollVelocityRef.current.lastScrollY;

    // Very slow scroll = high velocity cost (< 10px per second)
    const velocity = timeDelta > 0 ? Math.abs(scrollDelta) / (timeDelta / 1000) : 0;

    scrollVelocityRef.current = { lastScrollY: currentScrollY, lastTime: now };

    if (
      velocity < 10 &&
      velocity > 0 &&
      currentScrollY < window.innerHeight &&
      !stateRef.current.satelliteFlyoverTriggered
    ) {
      stateRef.current.satelliteFlyoverTriggered = true;
      window.dispatchEvent(new CustomEvent("easterEgg:satelliteFlyover"));
    }
  }, []);

  // ===== EGG 9: Aircraft Callsign Registration (type GARUD) =====
  const handleKeyPressCallsign = useCallback((e: KeyboardEvent) => {
    // Simple pattern matching - user types consecutively
    if ((e.key || String.fromCharCode(e.keyCode)).toUpperCase() === "G") {
      // Placeholder - would need word detection
      const bodyText = document.body.innerText;
      if (bodyText.includes("GARUD")) {
        window.dispatchEvent(new CustomEvent("easterEgg:callsignRegistered"));
      }
    }
  }, []);

  // ===== EGG 15: Founder-Level Easter Egg (click logo → scroll → click motto) =====
  const handleFounderSequence = useCallback((type: "logo" | "motto") => {
    if (type === "logo") {
      stateRef.current.founderEggSequence = 1;
    } else if (type === "motto" && stateRef.current.founderEggSequence === 2) {
      // Sequence: click logo (1) → scroll (2) → click motto (3)
      window.dispatchEvent(new CustomEvent("easterEgg:founderLevel"));
      stateRef.current.founderEggSequence = 0;
    }
  }, []);

  const handleFounderScroll = useCallback(() => {
    if (stateRef.current.founderEggSequence === 1) {
      stateRef.current.founderEggSequence = 2;
    }
  }, []);

  // ===== Setup & Cleanup =====
  useEffect(() => {
    // Log developer message once
    logDeveloperMessage();

    // Founder sequence handler
    const handleFounderEvent = (e: CustomEvent) => {
      if (e.detail.type === "logo") {
        handleFounderSequence("logo");
      }
    };

    // Motto hover handler
    const handleMottoElement = () => {
      const mottoElements = document.querySelectorAll('[data-easter-motto="true"]');
      mottoElements.forEach((el) => {
        let hoverStartTime: number = 0;

        const handleMouseEnter = () => {
          hoverStartTime = Date.now();
        };

        const handleMouseLeave = () => {
          hoverStartTime = 0;
        };

        const hoverCheckInterval = setInterval(() => {
          if (hoverStartTime > 0) {
            const hoverDuration = Date.now() - hoverStartTime;
            if (hoverDuration > 7000) {
              handleMottoHover();
              hoverStartTime = 0;
              clearInterval(hoverCheckInterval);
            }
          }
        }, 500);

        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);

        listenerCleanupRef.current.push(() => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
          clearInterval(hoverCheckInterval);
        });
      });
    };

    // Listen for keyboard shortcuts
    window.addEventListener("keydown", handleDiagnosticsToggle);
    listenerCleanupRef.current.push(() =>
      window.removeEventListener("keydown", handleDiagnosticsToggle),
    );

    // Listen for mouse events
    window.addEventListener("mousemove", handleMouseMove);
    listenerCleanupRef.current.push(() =>
      window.removeEventListener("mousemove", handleMouseMove),
    );

    window.addEventListener("scroll", (e) => {
      handleScroll();
      handleFounderScroll();
    });
    listenerCleanupRef.current.push(() =>
      window.removeEventListener("scroll", handleScroll),
    );

    // Listen for R&D clicks
    document.addEventListener("click", handleRDClickCounter);
    listenerCleanupRef.current.push(() =>
      document.removeEventListener("click", handleRDClickCounter),
    );

    window.addEventListener("resize", handleViewportResize);
    listenerCleanupRef.current.push(() =>
      window.removeEventListener("resize", handleViewportResize),
    );

    window.addEventListener("keypress", handleKeyPressCallsign);
    listenerCleanupRef.current.push(() =>
      window.removeEventListener("keypress", handleKeyPressCallsign),
    );

    // Founder sequence event
    window.addEventListener("easterEgg:founderSequence", handleFounderEvent as EventListener);
    listenerCleanupRef.current.push(() =>
      window.removeEventListener("easterEgg:founderSequence", handleFounderEvent as EventListener),
    );

    // Setup motto hover detection
    handleMottoElement();

    // Initial idle timer
    resetIdleTimer();

    return () => {
      listenerCleanupRef.current.forEach((cleanup) => cleanup());
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [
    handleDiagnosticsToggle,
    handleMouseMove,
    handleScroll,
    handleRDClickCounter,
    handleViewportResize,
    handleKeyPressCallsign,
    resetIdleTimer,
    logDeveloperMessage,
    handleFounderSequence,
    handleFounderScroll,
    handleMottoHover,
  ]);

  return {
    state: stateRef.current,
    handleFounderSequence,
    handleFounderScroll,
    handleMottoHover,
  };
};

// Helper function: Detect curvature in mouse path
function detectCurvature(points: Array<{ x: number; y: number }>): number {
  if (points.length < 3) return 0;

  let totalCurvature = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const p1 = points[i - 1];
    const p2 = points[i];
    const p3 = points[i + 1];

    const d1 = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    const d2 = Math.sqrt((p3.x - p2.x) ** 2 + (p3.y - p2.y) ** 2);
    const d3 = Math.sqrt((p3.x - p1.x) ** 2 + (p3.y - p1.y) ** 2);

    // Using law of cosines to find angle
    if (d1 > 0 && d2 > 0) {
      const angle =
        Math.acos(
          (d1 * d1 + d2 * d2 - d3 * d3) / (2 * d1 * d2 + 0.001), // avoid division by zero
        ) / Math.PI;
      totalCurvature += Math.abs(angle - 0.5); // 0.5 = straight line
    }
  }

  return Math.min(totalCurvature / points.length, 1);
}
