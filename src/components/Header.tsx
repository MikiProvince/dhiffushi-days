import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-black/20 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className={`font-display text-xl font-semibold transition-colors ${
              isScrolled ? "text-foreground" : "text-white drop-shadow-md"
            }`}
          >
            Dhiffushi Excursions
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("excursions")}
              className={`text-sm transition-colors ${
                isScrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("nav.excursions")}
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className={`text-sm transition-colors ${
                isScrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("nav.howItWorks")}
            </button>
            <Button variant="ocean" size="sm" asChild>
              <a
                href="https://wa.me/9607654321?text=Hi!"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("nav.contact")}
              </a>
            </Button>
            
            {/* Language Switcher - Desktop */}
            <LanguageSwitcher />
          </nav>

          {/* Mobile: Language Switcher + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in bg-background/95 backdrop-blur-md rounded-lg p-4 -mx-2">
            <button
              onClick={() => scrollTo("excursions")}
              className="text-left text-sm text-foreground hover:text-ocean transition-colors py-2"
            >
              {t("nav.excursions")}
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="text-left text-sm text-foreground hover:text-ocean transition-colors py-2"
            >
              {t("nav.howItWorks")}
            </button>
            <Button variant="ocean" size="sm" asChild className="w-fit">
              <a
                href="https://wa.me/9607654321?text=Hi!"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("nav.contact")}
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
