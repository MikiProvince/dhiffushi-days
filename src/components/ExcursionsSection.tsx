import { Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { useState } from "react";
import { cn } from "@/lib/utils";

import turtleImg from "@/assets/turtle-snorkel.jpg";
import dolphinsImg from "@/assets/dolphins-sunset.jpg";
import sandbankImg from "@/assets/sandbank-picnic.jpg";
import fishingImg from "@/assets/fishing-trip.jpg";
import islandImg from "@/assets/island-hopping.jpg";
import jetskiImg from "@/assets/jet-ski.jpg";

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
  {
    id: "jet-ski",
    nameKey: "excursion.jetski.name",
    descKey: "excursion.jetski.desc",
    durationKey: "duration.1-2hours",
    price: "$115",
    image: jetskiImg,
  },
];

const ExcursionCard = ({
  excursion,
  index,
  hovered,
  setHovered,
}: {
  excursion: Excursion;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const { t } = useLanguage();
  const name = t(excursion.nameKey);
  const whatsappLink = `https://wa.me/+79627080841?text=Hi!%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(name)}%20excursion.`;

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-60"
      )}
    >
      <CardContainer containerClassName="w-full">
        <CardBody className="relative h-80 md:h-[420px] w-full rounded-xl overflow-hidden bg-muted group">
          {/* Background Image */}
          <CardItem
            translateZ={0}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={excursion.image}
              alt={name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </CardItem>

          {/* Gradient Overlay */}
          <CardItem
            translateZ={30}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-5">
            <CardItem
              translateZ={50}
              className="w-full"
            >
              <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-2">
                {name}
              </h3>
            </CardItem>
            
            <CardItem
              translateZ={40}
              className="w-full"
            >
              <p className="text-white/80 text-sm mb-3 line-clamp-2">
                {t(excursion.descKey)}
              </p>
            </CardItem>

            <CardItem
              translateZ={45}
              className="w-full"
            >
              <div className="flex items-center gap-4 text-sm text-white/90 mb-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {t(excursion.durationKey)}
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <DollarSign className="w-4 h-4" />
                  {excursion.price}
                </span>
              </div>
            </CardItem>

            <CardItem
              translateZ={60}
              className="w-full"
            >
              <Button 
                variant="whatsapp" 
                className="w-full"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  {t("excursions.book")}
                </a>
              </Button>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

const ExcursionsSection = () => {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="excursions" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t("excursions.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("excursions.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {excursions.map((excursion, index) => (
            <ExcursionCard
              key={excursion.id}
              excursion={excursion}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcursionsSection;
