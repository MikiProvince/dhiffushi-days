import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyBookSection = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      titleKey: "whyBook.reason1.title",
      descKey: "whyBook.reason1.desc",
    },
    {
      titleKey: "whyBook.reason2.title",
      descKey: "whyBook.reason2.desc",
    },
    {
      titleKey: "whyBook.reason3.title",
      descKey: "whyBook.reason3.desc",
    },
    {
      titleKey: "whyBook.reason4.title",
      descKey: "whyBook.reason4.desc",
    },
    {
      titleKey: "whyBook.reason5.title",
      descKey: "whyBook.reason5.desc",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t("whyBook.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("whyBook.subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ul className="space-y-6">
            {reasons.map((reason, index) => (
              <li 
                key={index}
                className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-soft"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-ocean/10 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-ocean" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    {t(reason.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(reason.descKey)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyBookSection;
