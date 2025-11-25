import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, mode?: "login" | "signup") => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  // Check login state on mount
  useEffect(() => {
    const name = localStorage.getItem("userName");
    setUserName(name);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUserName(null);
    onNavigate("home");
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", page: "home" },
    { name: "Use Cases", page: "use-cases" },
    { name: "Features", page: "features" },
    { name: "Pricing", page: "pricing" },
    { name: "FAQ", page: "faq" },
    { name: "Contact", page: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-gradient-to-br from-[#FFB200] to-[#FF4D67] p-2 rounded-xl group-hover:shadow-lg transition-shadow">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl bg-gradient-to-r from-[#FFB200] to-[#FF4D67] bg-clip-text text-transparent">
              Kululu
            </span>
          </motion.button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`relative px-3 py-2 transition-colors ${
                  currentPage === link.page ? "text-[#FF4D67]" : "text-gray-700 hover:text-[#FFB200]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {currentPage === link.page && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFB200] to-[#FF4D67]"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {userName ? (
              <>
                <span className="px-4 py-2 rounded-full bg-[#FFB200]/20 text-[#FF4D67] font-semibold">
                  {userName}
                </span>
                <Button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-lg hover:scale-105 transition-all text-white border-0"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={() => onNavigate("login", "login")}
                  className="border-[#176B87] text-[#176B87] hover:bg-[#176B87] hover:text-white transition-all"
                >
                  Login
                </Button>
                <Button
                  onClick={() => onNavigate("login", "signup")}
                  className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-lg hover:scale-105 transition-all text-white border-0"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#FF4D67] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => {
                    onNavigate(link.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === link.page
                      ? "bg-gradient-to-r from-[#FFB200]/10 to-[#FF4D67]/10 text-[#FF4D67]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="flex flex-col gap-2 px-4 pt-2">
                {userName ? (
                  <>
                    <span className="px-4 py-2 rounded-full bg-[#FFB200]/20 text-[#FF4D67] font-semibold">
                      {userName}
                    </span>
                    <Button
                      onClick={handleLogout}
                      className="w-full bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-lg hover:scale-105 transition-all text-white border-0"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => {
                        onNavigate("login", "login");
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full border-[#176B87] text-[#176B87]"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => {
                        onNavigate("login", "signup");
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-lg hover:scale-105 transition-all text-white border-0"
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
