import { Timeline } from '@/components/ui/timeline';
import { Badge } from '@/components/ui/badge';

const STORY_DATA = [
  { title: "The Farm", content: (<div className="space-y-4"><p className="text-muted-foreground">Sourced from high-altitude volcanic soils.</p><img src="/images/coffee-origin-1.png" className="rounded-xl w-full aspect-video object-cover" /></div>) },
  { title: "The Roast", content: (<div className="space-y-4"><p className="text-muted-foreground">Roasting with clinical precision in Tokyo.</p><img src="/images/coffee-roast.png" className="rounded-xl w-full aspect-video object-cover" /></div>) },
  { title: "The Pour", content: (<div className="space-y-4"><p className="text-muted-foreground">Ritualistic preparation and 3D latte art.</p><img src="/images/latte-art.png" className="rounded-xl w-full aspect-video object-cover" /></div>) },
];

export function CoffeeStory() {
  return (
    <section className="py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 text-center mb-16">
        <Badge variant="outline" className="mb-4 border-primary text-primary">Seed to Sip</Badge>
        <h2 className="text-4xl md:text-5xl font-display mb-4">Artisanal Heart, Playful Soul</h2>
      </div>
      <Timeline data={STORY_DATA} />
    </section>
  );
}

export default CoffeeStory;
