import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FocusCards = ({ cards }: { cards: { title: string; src: string }[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            "relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer transition-all duration-300",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-50"
          )}
        >
          <img
            src={card.src}
            alt={card.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <p className="text-white font-display text-xl">{card.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
