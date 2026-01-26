import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import Index from "./pages/Index";
import RevenuePage from "./pages/RevenuePage";
import SocietyPage from "./pages/SocietyPage";
import IntegrityPage from "./pages/IntegrityPage";
import RulesPage from "./pages/RulesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/revenue" element={<RevenuePage />} />
            <Route path="/society" element={<SocietyPage />} />
            <Route path="/integrity" element={<IntegrityPage />} />
            <Route path="/rules" element={<RulesPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
