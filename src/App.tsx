

// import { Toaster } from "sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { HashRouter, Routes, Route } from "react-router-dom";
// import { DashboardLayout } from "@/layouts/DashboardLayout";
// import { AuthProvider } from "@/auth/AuthContext";
// import { ProtectedRoute } from "@/auth/ProtectedRoute";

// import Login from "./pages/Login";
// import Index from "./pages/Index";
// import RevenuePage from "./pages/RevenuePage";
// import SocietyPage from "./pages/SocietyPage";
// import IntegrityPage from "./pages/IntegrityPage";
// import ParcelIntelPage from "./pages/ParcelIntelPage";
// import RulesPage from "./pages/RulesPage";
// import NotFound from "./pages/NotFound";
// import Landing from "./pages/Landing";
// import AIIntelligencePage from "./pages/AIIntelligencePage";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <AuthProvider>
//       <TooltipProvider>
//         {/* Use Toaster directly from sonner with position prop */}
//         <Toaster position="top-right" />
        
//         <HashRouter>
//           <Routes>
//             {/* Public */}
//             <Route path="/" element={<Landing />} />
//             <Route path="/login" element={<Login />} />

//             {/* Protected – Risk Officer */}
//             <Route element={<ProtectedRoute roles={["Risk Officer"]} />}>
//               <Route element={<DashboardLayout />}>
//                 <Route path="/dashboard" element={<Index />} />
//                 <Route path="/revenue" element={<RevenuePage />} />
//                 <Route path="/society" element={<SocietyPage />} />
//                 <Route path="/integrity" element={<IntegrityPage />} />
//                 <Route path="/parcel-intel" element={<ParcelIntelPage />} />
//                  <Route path="/ai-intelligence" element={<AIIntelligencePage />} />
//               </Route>
//             </Route>

//             {/* Protected – Admin only */}
//             <Route element={<ProtectedRoute roles={["Admin"]} />}>
//               <Route element={<DashboardLayout />}>
//                 <Route path="/rules" element={<RulesPage />} />
//               </Route>
//             </Route>

//             {/* Fallback */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </HashRouter>
//       </TooltipProvider>
//     </AuthProvider>
//   </QueryClientProvider>
// );

// export default App;


import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { AuthProvider } from "@/auth/AuthContext";
import { ProtectedRoute } from "@/auth/ProtectedRoute";
import { SharedDataProvider } from "@/contexts/SharedDataContext";

import Login from "./pages/Login";
import Index from "./pages/Index";
import RevenuePage from "./pages/RevenuePage";
import SocietyPage from "./pages/SocietyPage";
import IntegrityPage from "./pages/IntegrityPage";
import ParcelIntelPage from "./pages/ParcelIntelPage";
import RulesPage from "./pages/RulesPage";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import AIIntelligencePage from "./pages/AIIntelligencePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster position="top-right" />
        <SharedDataProvider> {/* ADD THIS WRAPPER */}
          <HashRouter>
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
                  <Route path="/parcel-intel" element={<ParcelIntelPage />} />
                  <Route path="/ai-intelligence" element={<AIIntelligencePage />} />
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
          </HashRouter>
        </SharedDataProvider> {/* ADD THIS */}
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;