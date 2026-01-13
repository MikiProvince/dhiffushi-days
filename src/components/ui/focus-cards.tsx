"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    children,
  }: {
    card: { title: string; src: string };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    children?: React.ReactNode;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-xl relative bg-muted overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
        loading="lazy"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col justify-end py-6 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-70"
        )}
      >
        <div className="text-xl md:text-2xl font-display font-medium text-white">
          {card.title}
        </div>
        {children}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type CardType = {
  title: string;
  src: string;
};

export function FocusCards({
  cards,
  renderCard,
}: {
  cards: CardType[];
  renderCard?: (card: CardType, index: number, hovered: number | null, setHovered: React.Dispatch<React.SetStateAction<number | null>>) => React.ReactNode;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
      {cards.map((card, index) =>
        renderCard ? (
          renderCard(card, index, hovered, setHovered)
        ) : (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        )
      )}
    </div>
  );
}
