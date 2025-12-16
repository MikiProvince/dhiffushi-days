import { Check } from "lucide-react";

const reasons = [
  {
    title: "Fixed prices, no bargaining",
    description: "What you see is what you pay. No surprises.",
  },
  {
    title: "English & Russian support",
    description: "Communicate easily in your language.",
  },
  {
    title: "Verified local captains",
    description: "We work only with experienced, trustworthy locals.",
  },
  {
    title: "No prepayment scams",
    description: "Pay only when you meet us on the island.",
  },
  {
    title: "We stay in touch",
    description: "Support before, during, and after your trip.",
  },
];

const WhyBookSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why book with us
          </h2>
          <p className="text-muted-foreground">
            We believe in transparency, safety, and genuine human connection.
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
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
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
