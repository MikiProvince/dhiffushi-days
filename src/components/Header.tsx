import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
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
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="font-serif text-xl font-semibold text-foreground">
            Dhiffushi Excursions
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("excursions")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Excursions
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </button>
            <Button variant="ocean" size="sm" asChild>
              <a
                href="https://wa.me/9607654321?text=Hi!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button
              onClick={() => scrollTo("excursions")}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Excursions
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              How it works
            </button>
            <Button variant="ocean" size="sm" asChild className="w-fit">
              <a
                href="https://wa.me/9607654321?text=Hi!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
