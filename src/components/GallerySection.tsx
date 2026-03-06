import braceletsDisplay from '@/assets/bracelets-display.webp';
import craftsmanNecklace from '@/assets/craftsman-necklace.webp';
import craftsmanWorkshop from '@/assets/craftsman-workshop.webp';
import gemstoneCollection from '@/assets/gemstone-collection.webp';
import gemstoneDisplay from '@/assets/gemstone-display.webp';
import jewelleryMachine from '@/assets/jewellery-machine.webp';
import luckyStoneSign from '@/assets/lucky-stone-sign.webp';
import pendantsDisplay from '@/assets/pendants-display.webp';
import storeExterior from '@/assets/store-exterior.webp';
import storeFront from '@/assets/store-front.webp';
import { X } from 'lucide-react';
import { useState } from 'react';

const images = [
  {
    src: storeExterior,
    alt: 'Nethmi Gem & Jewellery store exterior in Aluthgama',
  },
  { src: gemstoneDisplay, alt: 'Gemstone display case with precious stones' },
  {
    src: craftsmanNecklace,
    alt: 'Master craftsman inspecting a handcrafted necklace',
  },
  { src: braceletsDisplay, alt: 'Handcrafted gemstone bracelets collection' },
  {
    src: gemstoneCollection,
    alt: 'Colorful semi-precious gemstone collection',
  },
  { src: craftsmanWorkshop, alt: 'Jewellery craftsman at work in workshop' },
  { src: pendantsDisplay, alt: 'Gemstone pendants and jewellery display' },
  { src: storeFront, alt: 'Nethmi Gem & Jewellery storefront' },
  {
    src: luckyStoneSign,
    alt: 'Lucky birthstone chart at Nethmi Gem & Jewellery',
  },
  { src: jewelleryMachine, alt: 'Traditional jewellery making equipment' },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id='gallery' className='section-padding bg-secondary'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent font-body text-sm tracking-[0.3em] uppercase mb-4'>
            Explore
          </p>
          <h2 className='font-heading text-3xl md:text-4xl lg:text-5xl font-bold'>
            <span className='text-gold-gradient'>Gallery</span>
          </h2>
          <div className='luxury-divider mx-auto my-6' />
        </div>

        <div className='columns-2 md:columns-3 gap-4 space-y-4'>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className='w-full overflow-hidden rounded group block border-0 bg-transparent p-0 cursor-pointer'>
              <img
                src={img.src}
                alt={img.alt}
                className='w-full rounded group-hover:scale-105 transition-transform duration-700 group-hover:shadow-gold'
                loading='lazy'
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className='fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4'
          onClick={() => setLightbox(null)}>
          <button
            className='absolute top-6 right-6 text-foreground/60 hover:text-accent'
            onClick={() => setLightbox(null)}>
            <X className='w-8 h-8' />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className='max-w-full max-h-[85vh] rounded shadow-gem'
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
