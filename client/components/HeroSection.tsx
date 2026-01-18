import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroBackground } from "@/components/HeroBackground";
import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/technologies");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-16"
    >
      {/* Background */}
      <HeroBackground />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold font-orbitron leading-tight mb-6 animate-fade-in">
          <span className="text-primary">Engineering</span> the Future of{" "}
          <span className="text-primary">Autonomous</span> Flight
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Advanced aerial systems, intelligent surveillance, and next-generation aviation technology. Precision
          engineering meets autonomous excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            onClick={handleExplore}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
          >
            Explore Technology
          </Button>
          <Button
            onClick={handleContact}
            variant="outline"
            className="px-8 py-3 text-lg font-semibold rounded-lg border-primary text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-10 pointer-events-none" />
    </section>
  );
};
