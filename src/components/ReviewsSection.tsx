import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ReviewsSection = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      textKey: "review1.text",
      nameKey: "review1.name",
      locationKey: "review1.location",
    },
    {
      textKey: "review2.text",
      nameKey: "review2.name",
      locationKey: "review2.location",
    },
    {
      textKey: "review3.text",
      nameKey: "review3.name",
      locationKey: "review3.location",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t("reviews.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("reviews.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-ocean/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-coral text-coral" />
                ))}
              </div>
              
              <p className="text-foreground mb-4 text-sm leading-relaxed">
                "{t(review.textKey)}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="font-medium text-foreground text-sm">
                  {t(review.nameKey)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t(review.locationKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
