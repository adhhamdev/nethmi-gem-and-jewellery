import { Phone, MapPin, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-gemstone.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Natural Ceylon blue sapphire gemstone" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-glow-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
        <p className="text-accent font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Aluthgama, Sri Lanka
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Authentic Sri Lankan{" "}
          <span className="text-gold-gradient">Gems</span> &{" "}
          <span className="text-gold-gradient">Fine Jewellery</span>
        </h1>
        <p className="font-body text-foreground/70 text-base md:text-lg max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          Discover the beauty of natural Ceylon gemstones and handcrafted jewellery at Nethmi Gem & Jewellery in Aluthgama.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#visit"
            className="bg-gold-gradient text-accent-foreground px-8 py-3.5 rounded font-medium text-sm tracking-wide hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            Visit Our Store
          </a>
          <a
            href="#gemstones"
            className="border border-gold text-accent px-8 py-3.5 rounded font-medium text-sm tracking-wide hover:bg-accent/10 transition-colors"
          >
            View Our Collection
          </a>
          <a
            href="tel:+94777546532"
            className="border border-foreground/20 text-foreground/80 px-8 py-3.5 rounded font-medium text-sm tracking-wide hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent/50 animate-float">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
