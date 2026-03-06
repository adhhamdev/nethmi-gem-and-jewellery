import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", rating: 5, text: "Absolutely stunning blue sapphire! The quality is incredible and the service was very personal and warm. Highly recommend visiting." },
  { name: "James T.", rating: 5, text: "We stopped by during our holiday in Sri Lanka and found the most beautiful ruby ring. Fair prices and genuine stones." },
  { name: "Kumari P.", rating: 5, text: "The best gem shop in Aluthgama. Trustworthy, friendly, and the jewellery craftsmanship is exceptional." },
  { name: "David L.", rating: 5, text: "Had a custom pendant made with a Ceylon sapphire. The result was beyond my expectations. A true gem of a business!" },
];

const Reviews = () => (
  <section className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
          What Our <span className="text-gold-gradient">Customers</span> Say
        </h2>
        <div className="luxury-divider mx-auto my-6" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card border border-border rounded p-6 md:p-8">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
            <p className="font-heading font-semibold text-sm text-accent">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
