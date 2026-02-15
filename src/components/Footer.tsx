import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div><h2 className="text-3xl font-display text-primary">Mochi Meow</h2><p className="text-muted-foreground mt-4">Tokyo's sweeter corner.</p></div>
        <div><h4 className="font-bold">Contact</h4><p className="text-muted-foreground mt-4">Harajuku, Shibuya, Tokyo</p></div>
        <div className="text-sm text-muted-foreground flex flex-col justify-end">
          <p>© 2024 Mochi Meow Coffee.</p>
          <div className="flex items-center gap-2 mt-2">Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> in Tokyo</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
