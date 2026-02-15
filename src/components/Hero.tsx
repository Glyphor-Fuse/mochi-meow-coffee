import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WavyBackground } from '@/components/ui/wavy-background';
import { Coffee, Cat } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <WavyBackground 
        className="max-w-4xl mx-auto pb-40" 
        containerClassName="h-full"
        colors={["var(--primary)", "var(--secondary)", "var(--accent)", "var(--muted)", "var(--primary)"]}
        speed="fast"
      >
        <div className="text-center px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-display text-foreground leading-tight mb-8"
          >
            Mochi <span className="text-primary">Meow</span> <br /> Coffee
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
            Tokyo's sweetest corner where artisanal beans meet playful whiskers.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-16 px-10 rounded-full text-lg font-bold bg-primary text-primary-foreground shadow-xl shadow-primary/20">Book a Reservation</Button>
            <Button size="lg" variant="outline" className="h-16 px-10 rounded-full text-lg font-bold border-border">Meet the Residents</Button>
          </div>
        </div>
      </WavyBackground>
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-20 left-[10%] hidden lg:block bg-card/80 p-3 rounded-2xl border border-primary/20 shadow-lg"><Coffee className="w-10 h-10 text-primary" /></motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-40 right-[15%] hidden lg:block bg-card/80 p-3 rounded-2xl border border-secondary/20 shadow-lg"><Cat className="w-12 h-12 text-secondary" /></motion.div>
    </section>
  );
}

export default Hero;
