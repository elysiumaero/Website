import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

import { useEffect, useRef } from "react";

export default function SiteLayout() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen bg-background text-foreground"
    >
      <BackgroundFX />
      <SiteHeader />
      <main className="relative z-10">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(80rem_40rem_at_50%_-10rem,rgba(56,189,248,.25),transparent),radial-gradient(40rem_20rem_at_10%_10%,rgba(168,85,247,.2),transparent)]" />
      <div
        className="absolute inset-0 opacity-[.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(400px 400px at var(--mx,50%) var(--my,50%), rgba(34,211,238,0.18), transparent 60%)",
        }}
      />
    </div>
  );
}
