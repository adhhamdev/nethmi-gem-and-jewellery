import { Phone, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="section-padding bg-background">
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Get in Touch</p>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        <span className="text-gold-gradient">Contact</span> Us
      </h2>
      <div className="luxury-divider mx-auto my-6" />

      <div className="bg-card border border-border rounded p-8 md:p-10 mt-10">
        <div className="space-y-4 mb-8">
          <p className="text-foreground/70 flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 text-accent" />
            <a href="tel:+94777546532" className="hover:text-accent transition-colors">077 754 6532</a>
          </p>
          <p className="text-foreground/70 flex items-center justify-center gap-3">
            <MapPin className="w-5 h-5 text-accent" />
            Aluthgama, Sri Lanka
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+94777546532"
            className="bg-gold-gradient text-accent-foreground px-8 py-3 rounded text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href="https://maps.google.com/?q=Aluthgama+Sri+Lanka+Nethmi+Gem"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold text-accent px-8 py-3 rounded text-sm font-medium hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
