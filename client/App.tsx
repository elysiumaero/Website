import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SiteLayout from "./components/layout/SiteLayout";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Collaborators from "./pages/Collaborators";
import ElysiumProject from "./pages/ElysiumProject";
import Achievements from "./pages/Achievements";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="technology" element={<Technology />} />
            <Route path="team" element={<Team />} />
            <Route path="collaborators" element={<Collaborators />} />
            <Route path="elysium" element={<ElysiumProject />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="blog" element={<Blog />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
