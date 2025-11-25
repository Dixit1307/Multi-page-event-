import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { UseCasesPage } from "./components/UseCasesPage";
import { FeaturesPage } from "./components/FeaturesPage";
import { PricingPage } from "./components/PricingPage";
import { FAQPage } from "./components/FAQPage";
import { ContactPage } from "./components/ContactPage";
import { HostDashboard } from "./components/HostDashboard";
import { Toaster } from "./components/ui/sonner";
import { AuthForm } from "./components/AuthForm";
import EventUploadPage from "./components/EventUploadPage"; // 👉 Add this import

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    // ✅ If URL is /event/:id/upload → open upload page
    if (window.location.pathname.startsWith("/event/")) {
      return "upload";
    }

    // 👇 Default logic
    return localStorage.getItem("token") ? "dashboard" : "home";
  });

  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // ✅ Navigation handler
  const handleNavigate = (page: string, mode: "login" | "signup" = "login") => {
    if (page === "login") setAuthMode(mode);

    if (page === "login" && localStorage.getItem("token")) {
      setCurrentPage("dashboard");
    } else {
      setCurrentPage(page);
    }
  };

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setCurrentPage("home");
  };

  // ✅ Page Renderer (includes QR upload page)
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;

      case "use-cases":
        return <UseCasesPage onNavigate={handleNavigate} />;

      case "features":
        return <FeaturesPage onNavigate={handleNavigate} />;

      case "pricing":
        return <PricingPage onNavigate={handleNavigate} />;

      case "faq":
        return <FAQPage onNavigate={handleNavigate} />;

      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;

      case "dashboard":
        return localStorage.getItem("token") ? (
          <HostDashboard onNavigate={handleNavigate} />
        ) : (
          <AuthForm onNavigate={handleNavigate} defaultView="login" />
        );

      case "login":
        return <AuthForm onNavigate={handleNavigate} defaultView={authMode} />;

      // 🔥 NEW: QR photo upload page
      case "upload":
        return <EventUploadPage />;

      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hide Navbar on Login + Upload Page */}
      {currentPage !== "login" && currentPage !== "upload" && (
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      <main>{renderPage()}</main>

      {/* Hide Footer on Login + Dashboard + Upload Page */}
      {currentPage !== "login" &&
        currentPage !== "dashboard" &&
        currentPage !== "upload" && (
          <Footer onNavigate={handleNavigate} />
        )}

      <Toaster />
    </div>
  );
}
