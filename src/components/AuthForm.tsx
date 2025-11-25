import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export function AuthForm({
  onNavigate,
  defaultView = "login",
}: {
  onNavigate: (page: string, mode?: "login" | "signup") => void;
  defaultView?: "login" | "signup";
}) {
  const [view, setView] = useState<"login" | "signup" | "forgot">(defaultView as "login" | "signup" | "forgot");
  const [showPassword, setShowPassword] = useState(false);

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const Card = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      key={view}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-sm bg-white rounded-3xl shadow-lg p-8 border border-gray-100 text-center"
    >
      {/* Clickable logo → navigate home */}
      <button onClick={() => onNavigate("home")} className="focus:outline-none mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#FFB200] via-[#FF4D67] to-[#176B87] bg-clip-text text-transparent hover:opacity-90 transition select-none">
          KULULU
        </h1>
      </button>
      {children}
    </motion.div>
  );

  async function handleLogin() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ yeh add karo
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || "Login failed");
        setLoading(false);
        return;
      }

      const data = await res.json();
      console.log("Login successful:", data);
      // Save token & user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.name);
      alert("Login successful!");
      setLoading(false);

      onNavigate("dashboard"); // redirect to dashboard after login
    } catch (err) {
      setError("Login error: " + (err as Error).message);
      setLoading(false);
    }
  }

  async function handleRegister() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ yeh add karo
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || "Registration failed");
        setLoading(false);
        return;
      }

      const data = await res.json();
      alert("Registration successful! Please login.");
      setLoading(false);
      setView("login");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Registration error: " + (err as Error).message);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFF8F8] via-white to-[#FFF8F8] px-4 relative">
      {/* Show error message */}
      {error && (
        <div className="absolute top-4 bg-red-100 text-red-700 px-4 py-2 rounded shadow max-w-sm">
          {error}
        </div>
      )}

      {/* LOGIN FORM */}
      {view === "login" && (
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-8">Sign in to your account</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            {/* Email */}
            <div className="text-left mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-gray-300 pl-12 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4D67]/40 focus:border-[#FF4D67]"
                />
              </div>
            </div>

            {/* Password */}
            <div className="text-left mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-full border border-gray-300 pl-12 pr-12 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB200]/40 focus:border-[#FFB200]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FFB200] via-[#FF4D67] to-[#176B87] text-white font-semibold py-3 rounded-full shadow-md hover:opacity-90 transition mb-2 disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p
            onClick={() => setView("forgot")}
            className="mt-3 text-sm text-[#FF4D67] hover:underline cursor-pointer mb-6"
          >
            Forgot your password?
          </p>

          <div className="relative my-5">
            <div className="h-px bg-gray-200"></div>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-3 text-sm text-gray-500">OR</span>
            </span>
          </div>

          <button
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition text-gray-700 font-medium mb-2"
            onClick={() => {
              window.location.href = "http://localhost:5000/api/auth/google";
            }}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>


          <p className="text-sm text-gray-700 mt-3">
            Don’t have an account?{" "}
            <span
              onClick={() => setView("signup")}
              className="text-[#FF4D67] font-medium hover:underline cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </Card>
      )}

      {/* SIGNUP FORM */}
      {view === "signup" && (
        <Card>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Create your account</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
          >
            {/* Name */}
            <div className="text-left mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-full border border-gray-300 pl-12 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4D67]/40 focus:border-[#FF4D67]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="text-left mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-gray-300 pl-12 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4D67]/40 focus:border-[#FF4D67]"
                />
              </div>
            </div>

            {/* Password */}
            <div className="text-left mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-full border border-gray-300 pl-12 pr-12 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB200]/40 focus:border-[#FFB200]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FFB200] via-[#FF4D67] to-[#176B87] text-white font-semibold py-3 rounded-full shadow-md hover:opacity-90 transition mb-3 disabled:opacity-50"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-[13px] text-gray-600 leading-snug mb-4">
            By signing up, you agree to our{" "}
            <span className="text-[#FF4D67] hover:underline cursor-pointer">Terms & Conditions</span> and{" "}
            <span className="text-[#FF4D67] hover:underline cursor-pointer">Privacy Policy</span>.
          </p>

          <p className="text-sm text-gray-700 mt-3">
            Already have an account?{" "}
            <span
              onClick={() => setView("login")}
              className="text-[#FF4D67] font-medium hover:underline cursor-pointer"
            >
              Sign in
            </span>
          </p>
        </Card>
      )}

      {/* FORGOT PASSWORD */}
      {view === "forgot" && (
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <button onClick={() => setView("login")} className="p-2 text-gray-500 hover:text-[#FF4D67] transition">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold text-gray-900">Forgot Password</h2>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            Enter your email address and we’ll send you instructions to reset your password.
          </p>

          <div className="text-left mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-full border border-gray-300 pl-12 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB200]/40 focus:border-[#FFB200]"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full bg-gradient-to-r from-[#FFB200] via-[#FF4D67] to-[#176B87] text-white font-semibold py-3 rounded-full shadow-md hover:opacity-90 transition"
          >
            Send Reset Link
          </button>
        </Card>
      )}
    </div>
  );
}
