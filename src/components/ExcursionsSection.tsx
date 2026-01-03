import { Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

import turtleImg from "@/assets/turtle-snorkel.jpg";
import dolphinsImg from "@/assets/dolphins-sunset.jpg";
import sandbankImg from "@/assets/sandbank-picnic.jpg";
import fishingImg from "@/assets/fishing-trip.jpg";
import islandImg from "@/assets/island-hopping.jpg";

interface Excursion {
  id: string;
  nameKey: string;
  descKey: string;
  durationKey: string;
  price: string;
  image: string;
}

const excursions: Excursion[] = [
  {
    id: "turtle-snorkel",
    nameKey: "excursion.turtle.name",
    descKey: "excursion.turtle.desc",
    durationKey: "duration.2-3hours",
    price: "$35",
    image: turtleImg,
  },
  {
    id: "dolphin-cruise",
    nameKey: "excursion.dolphin.name",
    descKey: "excursion.dolphin.desc",
    durationKey: "duration.1.5-2hours",
    price: "$30",
    image: dolphinsImg,
  },
  {
    id: "sandbank-picnic",
    nameKey: "excursion.sandbank.name",
    descKey: "excursion.sandbank.desc",
    durationKey: "duration.3-4hours",
    price: "$45",
    image: sandbankImg,
  },
  {
    id: "fishing-trip",
    nameKey: "excursion.fishing.name",
    descKey: "excursion.fishing.desc",
    durationKey: "duration.3-4hours",
    price: "$40",
    image: fishingImg,
  },
  {
    id: "island-hopping",
    nameKey: "excursion.island.name",
    descKey: "excursion.island.desc",
    durationKey: "duration.halfDay",
    price: "$55",
    image: islandImg,
  },
];

const ExcursionCard = ({ excursion }: { excursion: Excursion }) => {
  const { t } = useLanguage();
  const name = t(excursion.nameKey);
  const whatsappLink = `https://wa.me/9607654321?text=Hi!%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(name)}%20excursion.`;

  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={excursion.image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {t(excursion.descKey)}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {t(excursion.durationKey)}
          </span>
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <DollarSign className="w-4 h-4" />
            {excursion.price}
          </span>
        </div>

        <Button 
          variant="whatsapp" 
          className="w-full"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            {t("excursions.book")}
          </a>
        </Button>
      </div>
    </article>
  );
};

const ExcursionsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="excursions" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t("excursions.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("excursions.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {excursions.map((excursion) => (
            <ExcursionCard key={excursion.id} excursion={excursion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcursionsSection;
