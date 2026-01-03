import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExcursionsSection from "@/components/ExcursionsSection";
import WhyBookSection from "@/components/WhyBookSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ExcursionsSection />
          <WhyBookSection />
          <HowItWorksSection />
          <ReviewsSection />
          <ContactSection />
        </main>
        <Footer />
        <StickyWhatsApp />
      </div>
    </LanguageProvider>
  );
};

export default Index;
