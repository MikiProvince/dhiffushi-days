import { Search, MessageCircle, Waves } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose excursion",
    description: "Browse our trips and find what excites you.",
  },
  {
    icon: MessageCircle,
    title: "Message us on WhatsApp",
    description: "We'll confirm availability and arrange everything.",
  },
  {
    icon: Waves,
    title: "Enjoy your day on the ocean",
    description: "Show up, relax, and make unforgettable memories.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground">
            Three simple steps to your perfect day.
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
                {step.title}
              </h3>
              
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
