import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const rndTeam = {
  supervisor: { name: "Abdullah", title: "Supervisor" },
  coSupervisor: { name: "Sanvi", title: "Co-Supervisor" },
  members: [
    { name: "Vishwas", title: "R&D Lead" },
    { name: "Vivaan", title: "Co R&D Lead" },
    { name: "Sparsh", title: "R&D Executive" },
    { name: "Palak", title: "R&D Executive" },
    { name: "Riya", title: "R&D Executive" },
    { name: "Garv", title: "R&D Executive" },
    { name: "Hazel", title: "R&D Executive" },
  ],
};

export const Header: React.FC = () => {
  const [rndDropdownOpen, setRndDropdownOpen] = useState(false);

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
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="text-2xl font-bold font-orbitron text-primary tracking-wider">ELYSIUM</div>
          <div className="text-xs font-orbitron text-muted-foreground">AEROTECH</div>
        </Link>

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

          {/* R&D Department Dropdown */}
          <div className="relative">
            <button
              onClick={() => setRndDropdownOpen(!rndDropdownOpen)}
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors ml-2 flex items-center gap-1"
            >
              R&D Department
              <svg
                className={`w-4 h-4 transition-transform ${rndDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            {rndDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-2xl p-4 backdrop-blur-md">
                {/* Supervisor */}
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-2">Leadership</p>
                  <div className="space-y-2">
                    <div className="p-2 rounded bg-background/50">
                      <p className="font-semibold text-foreground">{rndTeam.supervisor.name}</p>
                      <p className="text-xs text-muted-foreground">{rndTeam.supervisor.title}</p>
                    </div>
                    <div className="p-2 rounded bg-background/50">
                      <p className="font-semibold text-foreground">{rndTeam.coSupervisor.name}</p>
                      <p className="text-xs text-muted-foreground">{rndTeam.coSupervisor.title}</p>
                    </div>
                  </div>
                </div>

                {/* Team Members */}
                <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-2">Team Members</p>
                <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                  {rndTeam.members.map((member) => (
                    <div key={member.name} className="p-2 rounded bg-background/50 text-sm">
                      <p className="font-medium text-foreground text-xs">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-sm">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
            <Link to="/contact" className="text-white">
              Partner With Us
            </Link>
          </Button>
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
