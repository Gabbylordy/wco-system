// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@/auth/AuthContext";
// import WcoLogo from "@/assets/wco_logo-1.png";

// const Landing = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const { user } = useAuth();

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2500);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (user) {
//       navigate("/dashboard");
//     }
//   }, [user, navigate]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//         <div className="flex flex-col items-center gap-4">
//           <img
//             src={WcoLogo}
//             alt="WCO Logo"
//             className="h-14 mb-3"
//           />
//           <p className="text-white text-sm animate-bounce">Initializing WCO Risk Intelligence Platform...</p>
//           <div className="mt-4 w-24 h-24 border-4 border-t-blue-600 border-gray-300 rounded-full animate-spin"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
//       {/* Header */}
//       <header className="flex items-center justify-between px-10 py-6">
//         <div className="flex items-center gap-3">
//           <img
//             src={WcoLogo}
//             alt="WCO Logo"
//             className="h-10"
//           />
//           <div>
//             <h1 className="font-semibold tracking-tight">WCO</h1>
//             <p className="text-[10px] text-slate-400">Risk Intelligence Platform</p>
//           </div>
//         </div>

//         <button
//           onClick={() => navigate("/login")}
//           className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-700 transition"
//         >
//           Secure Login
//         </button>
//       </header>

//       {/* Hero */}
//       <main className="flex-1 flex items-center px-10">
//         <div className="max-w-xl">
//           <h2 className="text-4xl font-semibold leading-tight">
//             Vigilant Agile Risk & Integrity System
//           </h2>

//           <p className="mt-4 text-slate-300 text-sm">
//             A unified command center for revenue assurance, societal protection,
//             and integrity analytics — enabling intelligence-driven customs
//             enforcement.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <button
//               onClick={() => navigate("/login")}
//               className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium hover:bg-blue-700 transition"
//             >
//               Access System
//             </button>

//             {/* <button className="rounded-lg border border-slate-600 px-6 py-2.5 text-sm text-slate-300 hover:bg-slate-800 transition">
//               Learn More
//             </button> */}
//             <button
//               onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
//               className="rounded-lg border border-slate-600 px-6 py-2.5 text-sm text-slate-300 hover:bg-slate-800 transition"
//             >
//               Learn More
//             </button>

//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="px-10 py-4 text-xs text-slate-500">
//         © World Customs Organization · Secure Government Platform
//       </footer>
//     </div>
//   );
// };

// export default Landing;


import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, UserCheck, Zap, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WcoLogo from "@/assets/wco_logo-1.png";
import { useEffect, useState } from "react";
import { useAuth } from "@/auth/AuthContext";


const Landing = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white-900 via-slate-800 to-slate-900">
        <div className="flex flex-col items-center gap-4">
          <img
            src={WcoLogo}
            alt="WCO Logo"
            className="h-14 mb-3"
          />
          <p className="text-black text-sm animate-bounce">Initializing WCO Risk Intelligence Platform...</p>
          <div className="mt-4 w-24 h-24 border-4 border-t-blue-600 border-gray-300 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  // const Landing = () => {
  //   const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={WcoLogo} alt="WCO Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold">WCO TechConf 2026</h1>
              <p className="text-sm text-muted-foreground">PIVARIS Demo</p>
            </div>
          </div>
          <Button onClick={() => navigate("/login")}>
            Access Dashboard
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          PIVARIS <br/>
          Parcel Intelligence Vigilant Agile Risk and Integrity Suite
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          {/* A modular, NSW-enabled capability that plugs into B'Odogwu to deliver revenue assurance,
          societal protection, integrity safeguards, and governed risk agility. */}
          An intelligence modular platform that captures and processes marketplace order data to deliver automated risk assessment, 
          revenue collection, and seamless integration with National Single Window and Customs Clearance systems for revenue assurance, societal protection, integrity safeguards, and governed risk agility.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => navigate("/login")}>
            View Live Demo
          </Button>
          <Button size="lg" variant="outline">
            Read Concept Note
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Five Pillars of Customs Vigilance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardContent className="pt-5 px-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-2 rounded-full bg-blue-100">
                  <TrendingUp className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Revenue Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Detect undervaluation, HS misclassification, and PAAR anomalies with explainable analytics.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5 px-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-2 rounded-full bg-red-100">
                  <Shield className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold">Society Protection</h3>
                <p className="text-sm text-muted-foreground">
                  Early warning for illicit goods through route analysis and document verification.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5 px-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-2 rounded-full bg-green-100">
                  <UserCheck className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold">Integrity Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Detect insider threats through audit trails and behavioral analysis.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5 px-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-2 rounded-full bg-purple-100">
                  <Zap className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold">Risk Agility</h3>
                <p className="text-sm text-muted-foreground">
                  Dynamic rule adaptation with simulation and governed rollback.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5 px-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-2 rounded-full bg-indigo-100">
                  <Package className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold">Parcel Intelligence</h3>
                <p className="text-sm text-muted-foreground">
                  Flags high-risk shipments and supports proactive compliance actions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Demo Credentials */}
      <section className="container mx-auto px-6 py-16">
        {/* <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Demo Credentials</h3>
              <p className="text-muted-foreground">
                Use these credentials to explore the VARIS demo dashboard:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold">Risk Officer</h4>
                  <div className="text-sm">
                    <p>Username: <code className="bg-background px-2 py-1 rounded">officer</code></p>
                    <p>Password: <code className="bg-background px-2 py-1 rounded">demo123</code></p>
                    <p className="text-muted-foreground mt-2">Full access to risk modules</p>
                  </div>
                </div>
                <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold">Admin</h4>
                  <div className="text-sm">
                    <p>Username: <code className="bg-background px-2 py-1 rounded">admin</code></p>
                    <p>Password: <code className="bg-background px-2 py-1 rounded">admin123</code></p>
                    <p className="text-muted-foreground mt-2">Includes rule management</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => navigate("/login")} className="mt-6">
                Go to Login
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </section>
      {/* Footer */}
      <footer className="px-10 py-4 text-xs text-slate-500 text-center">
        © World Customs Organization · Secure Government Platform
      </footer>
    </div>
  );
};

export default Landing;