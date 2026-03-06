import blueSapphire from "@/assets/blue-sapphire.jpg";
import yellowSapphire from "@/assets/yellow-sapphire.jpg";
import ruby from "@/assets/ruby.jpg";
import whiteSapphire from "@/assets/white-sapphire.jpg";
import spinel from "@/assets/spinel.jpg";
import semiPrecious from "@/assets/semi-precious.jpg";

const gemstones = [
  { name: "Blue Sapphire", image: blueSapphire, description: "The crown jewel of Ceylon — prized for its vivid cornflower blue hue and exceptional clarity." },
  { name: "Yellow Sapphire", image: yellowSapphire, description: "Radiant golden tones that capture the warmth of Sri Lanka's tropical sun." },
  { name: "Ruby", image: ruby, description: "Deep crimson stones of extraordinary brilliance, mined from Sri Lanka's rich earth." },
  { name: "White Sapphire", image: whiteSapphire, description: "Crystal-clear elegance — a brilliant, ethically sourced alternative to diamonds." },
  { name: "Spinel", image: spinel, description: "Vivid, naturally vibrant gems in a spectrum of stunning pinks and reds." },
  { name: "Semi-Precious Gemstones", image: semiPrecious, description: "A curated collection of amethyst, topaz, garnet, and other beautiful stones." },
];

const Gemstones = () => (
  <section id="gemstones" className="section-padding bg-secondary">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Our Collection</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
          Natural <span className="text-gold-gradient">Sri Lankan Gemstones</span>
        </h2>
        <div className="luxury-divider mx-auto my-6" />
        <p className="text-foreground/60 max-w-xl mx-auto">
          Each stone is hand-selected for its quality, clarity, and natural beauty — direct from the Island of Gems.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gemstones.map((gem) => (
          <article key={gem.name} className="group bg-card border border-border rounded overflow-hidden hover:border-accent/40 transition-all duration-500 hover:shadow-gold">
            <div className="aspect-square overflow-hidden">
              <img
                src={gem.image}
                alt={`Natural ${gem.name} gemstone from Sri Lanka`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{gem.name}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-2">{gem.description}</p>
              <p className="text-accent/60 text-xs tracking-wider uppercase">Origin: Sri Lanka</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Gemstones;
