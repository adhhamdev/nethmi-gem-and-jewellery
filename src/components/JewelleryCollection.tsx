import ringImg from "@/assets/ring.jpg";
import necklaceImg from "@/assets/necklace.jpg";
import braceletImg from "@/assets/bracelet.jpg";
import customImg from "@/assets/custom-jewellery.jpg";
import pendantImg from "@/assets/pendant.jpg";

const pieces = [
  { name: "Rings", image: ringImg, description: "Exquisite gemstone rings handcrafted in gold and silver settings." },
  { name: "Necklaces", image: necklaceImg, description: "Elegant necklaces featuring natural Ceylon gemstones." },
  { name: "Bracelets", image: braceletImg, description: "Stunning bracelets adorned with precious Sri Lankan stones." },
  { name: "Custom Jewellery", image: customImg, description: "Bespoke pieces crafted to your unique vision and style." },
  { name: "Gemstone Pendants", image: pendantImg, description: "Beautiful pendants showcasing the brilliance of Ceylon gems." },
];

const JewelleryCollection = () => (
  <section id="jewellery" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Handcrafted</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-gold-gradient">Jewellery</span> Collection
        </h2>
        <div className="luxury-divider mx-auto my-6" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pieces.map((piece, i) => (
          <article
            key={piece.name}
            className={`group relative overflow-hidden rounded ${i === 3 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={piece.image}
                alt={`${piece.name} from Nethmi Gem & Jewellery`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="font-heading text-xl font-semibold text-accent">{piece.name}</h3>
              <p className="text-foreground/70 text-sm mt-1">{piece.description}</p>
            </div>
            {/* Always visible label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-500">
              <h3 className="font-heading text-lg font-semibold">{piece.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default JewelleryCollection;
