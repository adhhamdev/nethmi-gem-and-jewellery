import storeImage from "@/assets/store.jpg";

const About = () => (
  <section id="about" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            About <span className="text-gold-gradient">Nethmi Gem & Jewellery</span>
          </h2>
          <div className="luxury-divider my-6" />
          <div className="space-y-4 text-foreground/70 font-body leading-relaxed">
            <p>
              Nethmi Gem & Jewellery is a trusted gemstone and jewellery business located in Aluthgama, Sri Lanka. The business specializes in natural Sri Lankan gemstones and finely crafted jewellery pieces that showcase the beauty and rarity of Ceylon gems.
            </p>
            <p>
              Sri Lanka has been known for centuries as the Island of Gems, producing some of the world's most valuable and beautiful stones, including blue sapphires, rubies, and other precious gemstones.
            </p>
            <p>
              At Nethmi Gem & Jewellery, customers can explore a carefully curated selection of authentic gemstones and jewellery pieces that combine traditional craftsmanship with timeless elegance.
            </p>
            <p>
              Visitors are welcome to explore the collection and experience the brilliance of Sri Lankan gems in person.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 border border-gold rounded opacity-30" />
          <img
            src={storeImage}
            alt="Inside Nethmi Gem & Jewellery store in Aluthgama, Sri Lanka"
            className="w-full rounded shadow-gem"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
