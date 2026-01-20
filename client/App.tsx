import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PreloaderProvider } from "@/contexts/PreloaderContext";
import { Preloader } from "@/components/Preloader";
import { EasterEggSystem } from "@/components/EasterEggs";
import { AdvancedEasterEggSystem } from "@/components/AdvancedEasterEggs";
import Index from "./pages/Index";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Systems from "./pages/Systems";
import RnDLab from "./pages/RnDLab";
import Academic from "./pages/Academic";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import RnDDepartment from "./pages/RnDDepartment";
import TeamMemberProfile from "./pages/TeamMemberProfile";
import Signal from "./pages/Signal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <PreloaderProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader />
        <Toaster />
        <Sonner />
        <EasterEggSystem />
        <AdvancedEasterEggSystem />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/rnd-lab" element={<RnDLab />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:memberId" element={<TeamMemberProfile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rnd-department" element={<RnDDepartment />} />
            <Route path="/signal" element={<Signal />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </PreloaderProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
