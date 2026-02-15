import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Coffee, ArrowRight } from 'lucide-react';

const PAIRINGS = [
  { id: 1, cat: "Mochi", personality: "Sweet & Squishy", coffee: "Hokkaido Cream Latte", origin: "Sapporo, Japan", notes: "Vanilla, Marshmallow", image: "/images/cat-mochi.png" },
  { id: 2, cat: "Yuzu", personality: "Zesty & Playful", coffee: "Ethiopian Yirgacheffe", origin: "Yirgacheffe, Ethiopia", notes: "Citrus, Floral", image: "/images/cat-yuzu.png" },
  { id: 3, cat: "Nori", personality: "Dark & Mysterious", coffee: "Sumatran Dark Roast", origin: "Mandheling, Indonesia", notes: "Earthy, Spice", image: "/images/cat-nori.png" },
  { id: 4, cat: "Sakura", personality: "Gentle & Elegant", coffee: "Costa Rican Honey Process", origin: "Tarrazú, Costa Rica", notes: "Cherry Blossom, Honey", image: "/images/cat-sakura.png" }
];

export function CatSoulmate() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % PAIRINGS.length);

  return (
    <section className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">Interactive Experience</Badge>
          <h2 className="text-4xl md:text-5xl font-display mb-6">Find Your Coffee Soulmate</h2>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={PAIRINGS[index].id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center bg-card rounded-3xl p-8 shadow-xl border border-border"
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden border-4 border-primary/20">
                <img src={PAIRINGS[index].image} alt={PAIRINGS[index].cat} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent flex items-end p-6">
                  <div className="text-foreground">
                    <h3 className="text-2xl font-display">{PAIRINGS[index].cat}</h3>
                    <p className="text-sm">{PAIRINGS[index].personality}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary"><Coffee className="w-6 h-6" /><span className="font-bold text-sm">PERFECT PAIRING</span></div>
                <h4 className="text-3xl font-display">{PAIRINGS[index].coffee}</h4>
                <p className="text-muted-foreground italic">Origin: {PAIRINGS[index].origin}</p>
                <div className="flex flex-wrap gap-2">
                  {PAIRINGS[index].notes.split(', ').map(n => <Badge key={n} variant="secondary" className="bg-primary/10 text-primary border-none">{n}</Badge>)}
                </div>
                <Button onClick={next} size="lg" className="w-full rounded-full">Next Soulmate <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default CatSoulmate;
