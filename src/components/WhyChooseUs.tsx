import { Gem, Award, Shield, Sparkles, Heart } from "lucide-react";

const reasons = [
  { icon: Gem, title: "Authentic Sri Lankan Gemstones", desc: "Every gemstone is genuine, naturally sourced from Sri Lanka's renowned gem mines." },
  { icon: Award, title: "High Quality Craftsmanship", desc: "Each jewellery piece is meticulously crafted by skilled artisans with decades of experience." },
  { icon: Shield, title: "Trusted Local Gem Business", desc: "A reputable name in Aluthgama, serving customers with honesty and transparency." },
  { icon: Sparkles, title: "Elegant Jewellery Designs", desc: "Timeless designs that blend traditional Sri Lankan artistry with modern elegance." },
  { icon: Heart, title: "Personal Customer Service", desc: "Warm, personalized attention to help you find the perfect gemstone or jewellery piece." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-secondary">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Why Us</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
          Why Choose <span className="text-gold-gradient">Nethmi</span>
        </h2>
        <div className="luxury-divider mx-auto my-6" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="bg-card border border-border rounded p-8 hover:border-accent/30 transition-all duration-500 hover:shadow-gold group">
            <r.icon className="w-8 h-8 text-accent mb-4 group-hover:glow-gold transition-all" />
            <h3 className="font-heading text-lg font-semibold mb-2">{r.title}</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
