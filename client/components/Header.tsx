import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const hoverTimeRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleLogoClick = () => {
      window.dispatchEvent(
        new CustomEvent("easterEgg:founderSequence", { detail: { type: "logo" } }),
      );
    };

    if (logoRef.current) {
      logoRef.current.addEventListener("click", handleLogoClick);
    }

    return () => {
      if (logoRef.current) {
        logoRef.current.removeEventListener("click", handleLogoClick);
      }
    };
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Technologies", path: "/technologies" },
    { label: "Flagship Systems", path: "/systems" },
    { label: "R&D Lab", path: "/rnd-lab" },
    { label: "Academic Partners", path: "/academic" },
    { label: "Team", path: "/team" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Branding */}
        <div
          ref={logoRef}
          className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80"
        >
          <div className="text-2xl font-bold font-orbitron text-primary tracking-wider">
            ELYSIUM
          </div>
          <div className="text-xs font-orbitron text-muted-foreground">AEROTECH</div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* R&D Department Link */}
          <Link
            to="/rnd-department"
            className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors ml-2 relative group"
          >
            R&D Department
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact">
            <Button variant="ghost" className="text-sm">
              Contact Us
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
              Partner With Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-foreground hover:text-primary transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
