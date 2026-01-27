import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="flex flex-col items-center gap-4">
          <img src="/wco_logo-1.png" alt="WCO Logo" className="h-16 animate-pulse" />
          <p className="text-white text-sm animate-bounce">Initializing WCO Risk Intelligence Platform...</p>
          <div className="mt-4 w-24 h-24 border-4 border-t-blue-600 border-gray-300 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-3">
          <img src="/wco_logo-1.png" alt="WCO Logo" className="h-10" />
          <div>
            <h1 className="font-semibold tracking-tight">WCO</h1>
            <p className="text-[10px] text-slate-400">Risk Intelligence Platform</p>
          </div>
        </div>

        <button
          onClick={() => navigate("/login")}
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-700 transition"
        >
          Secure Login
        </button>
      </header>

      {/* Hero */}
      <main className="flex-1 flex items-center px-10">
        <div className="max-w-xl">
          <h2 className="text-4xl font-semibold leading-tight">
            Vigilant Agile Risk & Integrity System
          </h2>

          <p className="mt-4 text-slate-300 text-sm">
            A unified command center for revenue assurance, societal protection,
            and integrity analytics — enabling intelligence-driven customs
            enforcement.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/login")}
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium hover:bg-blue-700 transition"
            >
              Access System
            </button>

            <button className="rounded-lg border border-slate-600 px-6 py-2.5 text-sm text-slate-300 hover:bg-slate-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-10 py-4 text-xs text-slate-500">
        © World Customs Organization · Secure Government Platform
      </footer>
    </div>
  );
};

export default Landing;
