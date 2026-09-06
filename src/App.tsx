import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CampusNavigationCaseStudy from "./pages/CampusNavigationCaseStudy";
import UxDesignerResumeGuide from "./pages/UxDesignerResumeGuide";
import DesignThinkingGuide from "./pages/DesignThinkingGuide";
import UxPortfolioNoExperienceGuide from "./pages/UxPortfolioNoExperienceGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/campus-navigation" element={<CampusNavigationCaseStudy />} />
          <Route path="/blog/ux-designer-resume-guide" element={<UxDesignerResumeGuide />} />
          <Route path="/blog/design-thinking-guide" element={<DesignThinkingGuide />} />
          <Route path="/blog/ux-portfolio-no-experience" element={<UxPortfolioNoExperienceGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

