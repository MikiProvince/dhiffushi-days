import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah & Tom",
    location: "Germany",
    text: "The turtle snorkeling was magical. No rush, just us and the ocean. Exactly what we needed.",
  },
  {
    name: "Anastasia",
    location: "Russia",
    text: "Finally, someone who speaks Russian! Everything was organized perfectly. Highly recommend.",
  },
  {
    name: "Marco",
    location: "Italy",
    text: "Simple, honest, reliable. The dolphin cruise was the highlight of our trip.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What guests say
          </h2>
          <p className="text-muted-foreground">
            Recommended by guests staying on Dhiffushi
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
                "{review.text}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="font-medium text-foreground text-sm">
                  {review.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {review.location}
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
