import { motion, useScroll, useTransform } from 'framer-motion';
import { Cat } from 'lucide-react';

export function Navbar() {
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "var(--background)"]);

  return (
    <motion.nav
      style={{ width, backgroundColor }}
      className="fixed left-1/2 -translate-x-1/2 top-4 z-50 h-16 px-6 rounded-full backdrop-blur-md flex items-center justify-between border border-border shadow-sm"
    >
      <div className="flex items-center gap-2"><Cat className="w-6 h-6 text-primary" /><span className="text-xl font-display">Mochi Meow</span></div>
      <div className="hidden md:flex gap-8 text-sm font-bold">
        <a href="#" className="hover:text-primary transition-colors">The Cats</a>
        <a href="#" className="hover:text-primary transition-colors">Booking</a>
      </div>
      <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-xs">Book Now</button>
    </motion.nav>
  );
}

export default Navbar;
