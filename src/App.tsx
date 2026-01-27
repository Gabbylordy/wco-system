import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { AuthProvider } from "@/auth/AuthContext";
import { ProtectedRoute } from "@/auth/ProtectedRoute";

import Login from "./pages/Login";
import Index from "./pages/Index";
import RevenuePage from "./pages/RevenuePage";
import SocietyPage from "./pages/SocietyPage";
import IntegrityPage from "./pages/IntegrityPage";
import RulesPage from "./pages/RulesPage";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Index />} />
              <Route path="/revenue" element={<RevenuePage />} />
              <Route path="/society" element={<SocietyPage />} />
              <Route path="/integrity" element={<IntegrityPage />} />
              <Route path="/rules" element={<RulesPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes> */}

          <Routes>
            {/* Public */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />

            {/* Protected – Risk Officer */}
            <Route element={<ProtectedRoute roles={["Risk Officer"]} />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Index />} />
                <Route path="/revenue" element={<RevenuePage />} />
                <Route path="/society" element={<SocietyPage />} />
                <Route path="/integrity" element={<IntegrityPage />} />
              </Route>
            </Route>

            {/* Protected – Admin only */}
            <Route element={<ProtectedRoute roles={["Admin"]} />}>
              <Route element={<DashboardLayout />}>
                <Route path="/rules" element={<RulesPage />} />
              </Route>
            </Route>

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
