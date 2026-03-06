import { useState } from "react";
import { X } from "lucide-react";
import blueSapphire from "@/assets/blue-sapphire.jpg";
import yellowSapphire from "@/assets/yellow-sapphire.jpg";
import ruby from "@/assets/ruby.jpg";
import whiteSapphire from "@/assets/white-sapphire.jpg";
import spinel from "@/assets/spinel.jpg";
import semiPrecious from "@/assets/semi-precious.jpg";
import ring from "@/assets/ring.jpg";
import necklace from "@/assets/necklace.jpg";
import bracelet from "@/assets/bracelet.jpg";
import pendant from "@/assets/pendant.jpg";
import customJewellery from "@/assets/custom-jewellery.jpg";
import galleryHero from "@/assets/gallery-hero.jpg";
import storeExterior from "@/assets/store-exterior.webp";
import storeFront from "@/assets/store-front.webp";
import gemstoneDisplay from "@/assets/gemstone-display.webp";
import craftsmanNecklace from "@/assets/craftsman-necklace.webp";
import gemstoneCollection from "@/assets/gemstone-collection.webp";
import braceletsDisplay from "@/assets/bracelets-display.webp";
import craftsmanWorkshop from "@/assets/craftsman-workshop.webp";
import luckyStoneSign from "@/assets/lucky-stone-sign.webp";
import jewelleryMachine from "@/assets/jewellery-machine.webp";
import pendantsDisplay from "@/assets/pendants-display.webp";

const images = [
  { src: galleryHero, alt: "Sri Lankan gemstone collection display" },
  { src: blueSapphire, alt: "Natural Ceylon blue sapphire" },
  { src: storeExterior, alt: "Nethmi Gem & Jewellery store exterior in Aluthgama" },
  { src: ring, alt: "Gold ring with blue sapphire" },
  { src: gemstoneDisplay, alt: "Gemstone display case with precious stones" },
  { src: necklace, alt: "Gold necklace with gemstones" },
  { src: craftsmanNecklace, alt: "Master craftsman inspecting a handcrafted necklace" },
  { src: ruby, alt: "Natural Sri Lankan ruby" },
  { src: braceletsDisplay, alt: "Handcrafted gemstone bracelets collection" },
  { src: bracelet, alt: "Gold bracelet with precious stones" },
  { src: gemstoneCollection, alt: "Colorful semi-precious gemstone collection" },
  { src: yellowSapphire, alt: "Ceylon yellow sapphire" },
  { src: craftsmanWorkshop, alt: "Jewellery craftsman at work in workshop" },
  { src: pendant, alt: "Sapphire pendant in gold setting" },
  { src: pendantsDisplay, alt: "Gemstone pendants and jewellery display" },
  { src: whiteSapphire, alt: "Natural white sapphire" },
  { src: storeFront, alt: "Nethmi Gem & Jewellery storefront" },
  { src: spinel, alt: "Pink spinel gemstone" },
  { src: luckyStoneSign, alt: "Lucky birthstone chart at Nethmi Gem & Jewellery" },
  { src: customJewellery, alt: "Custom handcrafted jewellery" },
  { src: jewelleryMachine, alt: "Traditional jewellery making equipment" },
  { src: semiPrecious, alt: "Semi-precious gemstone collection" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Explore</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-gold-gradient">Gallery</span>
          </h2>
          <div className="luxury-divider mx-auto my-6" />
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="w-full overflow-hidden rounded group block border-0 bg-transparent p-0 cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full rounded group-hover:scale-105 transition-transform duration-700 group-hover:shadow-gold"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-foreground/60 hover:text-accent" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded shadow-gem"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
