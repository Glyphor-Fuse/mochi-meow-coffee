import { FocusCards } from '@/components/ui/focus-cards';
import { Badge } from '@/components/ui/badge';

const CATS = [
  { title: "Mochi - The Boss", src: "/images/cat-mochi.png" },
  { title: "Yuzu - The Acrobat", src: "/images/cat-yuzu.png" },
  { title: "Nori - The Shadow", src: "/images/cat-nori.png" },
  { title: "Sakura - The Sweetheart", src: "/images/cat-sakura.png" },
  { title: "Taro - The Sleepyhead", src: "/images/cat-taro.png" },
  { title: "Kuma - The Brave", src: "/images/cat-kuma.png" },
];

export function CatGallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 text-secondary border-secondary">Meet the Family</Badge>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">The Whiskered Residents</h2>
        </div>
        <FocusCards cards={CATS} />
      </div>
    </section>
  );
}

export default CatGallery;
