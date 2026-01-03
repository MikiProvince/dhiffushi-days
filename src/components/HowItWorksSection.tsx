import { Search, MessageCircle, Waves } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      titleKey: "howItWorks.step1.title",
      descKey: "howItWorks.step1.desc",
    },
    {
      icon: MessageCircle,
      titleKey: "howItWorks.step2.title",
      descKey: "howItWorks.step2.desc",
    },
    {
      icon: Waves,
      titleKey: "howItWorks.step3.title",
      descKey: "howItWorks.step3.desc",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-ocean/10 rounded-2xl flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-ocean" />
                </div>
                <span className="absolute -top-2 -right-2 md:right-1/4 w-7 h-7 bg-coral text-accent-foreground text-sm font-semibold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {t(step.titleKey)}
              </h3>
              
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
