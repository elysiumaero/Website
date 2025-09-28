import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "px-3 py-2 text-sm font-medium transition-colors",
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
    );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="group inline-flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb7cfa890298e4417b2c764b6d4f2183e%2F3c80e911b0ff4190961f2744d5f0e49e?format=webp&width=200"
              alt="Elysium Aerotech logo"
              className="h-8 w-auto thruster-glow"
              loading="eager"
              decoding="async"
            />
            <div className="leading-tight">
              <div className="text-base font-semibold tracking-tight">
                Elysium Aerotech
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/technology" className={navLinkClass}>
              Technology
            </NavLink>
            <NavLink to="/team" className={navLinkClass}>
              Team
            </NavLink>
            <NavLink to="/collaborators" className={navLinkClass}>
              Collaborators
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm ring-1 ring-inset ring-white/10 transition hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in touch
            </Link>
            <ThemeToggle />
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-background/80">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 space-y-1">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/technology"
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              Technology
            </NavLink>
            <NavLink
              to="/team"
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              Team
            </NavLink>
            <NavLink
              to="/collaborators"
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              Collaborators
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm ring-1 ring-inset ring-white/10 transition hover:brightness-110"
            >
              Get in touch
            </Link>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
