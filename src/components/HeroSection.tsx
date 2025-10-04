import heroBanner from "@/assets/hero-banner.jpg";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      <img 
        src={heroBanner} 
        alt="Special deals and promotions" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mega Deals This Week
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Save up to 50% on selected electronics and accessories
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
