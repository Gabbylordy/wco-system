// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@/auth/AuthContext";
// import WcoLogo from "@/assets/wco_logo-1.png";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const success = await login(username, password);
//     if (!success) {
//       setError("Invalid credentials");
//     } else {
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
//       <form
//         onSubmit={handleLogin}
//         className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl"
//       >
//         {/* Logo */}
//         <div className="flex flex-col items-center mb-6">
//           <img
//             src={WcoLogo}
//             alt="WCO Logo"
//             className="h-14 mb-3"
//           />
//           <h1 className="text-xl font-semibold text-slate-900">
//             PIVARIS Command Center
//           </h1>
//           <p className="text-xs text-slate-500 text-center">
//             To operationalize the WCO Framework of Standards on Cross-Border E-Commerce.
//           </p>
//         </div>

//         {error && (
//           <div className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
//             {error}
//           </div>
//         )}

//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Username"
//             className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             type="submit"
//             className="w-full rounded-lg bg-blue-700 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition"
//           >
//             Secure Sign In
//           </button>
//         </div>

//         <div className="mt-6 text-center text-[11px] text-slate-400">
//           Authorized personnel only · © WCO
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/AuthContext";
import WcoLogo from "@/assets/wco_logo-1.png";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(username, password);
    if (!success) {
      setError("Invalid credentials");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-100 to-slate-200">
      
      {/* Premium Top-Left Back Button */}
      <Button
        variant="ghost"
        size="lg"
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 rounded-xl bg-white/30 backdrop-blur-md shadow-lg border border-white/20 text-slate-800 hover:bg-white/50 hover:text-slate-900 transition-all"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Landing
      </Button>

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={WcoLogo} alt="WCO Logo" className="h-14 mb-3" />
          <h1 className="text-xl font-semibold text-slate-900">
            PIVARIS Command Center
          </h1>
          <p className="text-xs text-slate-500 text-center">
            To operationalize the WCO Framework of Standards on Cross-Border E-Commerce.
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="default"
            size="default"
            className="w-full py-2.5"
          >
            Secure Sign In
          </Button>
        </div>

        <div className="mt-6 text-center text-[11px] text-slate-400">
          Authorized personnel only · © WCO
        </div>
      </form>
    </div>
  );
};

export default Login;
