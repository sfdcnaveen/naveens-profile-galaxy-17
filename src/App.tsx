import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ExperiencePage from "./pages/Experience";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import CertificationsPage from "./pages/Certifications";
import PhotographyPage from "./pages/Photography";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CursorEffect from "./components/ui/CursorEffect";
import BackgroundEffect from "./components/ui/BackgroundEffect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CursorEffect />
      <BackgroundEffect />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
