import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CatSoulmate } from "@/components/CatSoulmate";
import { CatGallery } from "@/components/CatGallery";
import { CoffeeStory } from "@/components/CoffeeStory";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Hero />
          <CatGallery />
          <CatSoulmate />
          <CoffeeStory />
          <BookingSection />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
