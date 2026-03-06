import { MapPin, Phone, Clock } from "lucide-react";

const VisitStore = () => (
  <section id="visit" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Visit Us</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
          Visit Our <span className="text-gold-gradient">Store</span>
        </h2>
        <div className="luxury-divider mx-auto my-6" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Info */}
        <div className="bg-card border border-border rounded p-8 md:p-10">
          <h3 className="font-heading text-2xl font-semibold mb-6 text-gold-gradient">Nethmi Gem & Jewellery</h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Address</p>
                <p className="text-foreground/60 text-sm">123 Welipenna Road<br />Aluthgama<br />Sri Lanka</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Phone</p>
                <a href="tel:+94777546532" className="text-foreground/60 text-sm hover:text-accent transition-colors">077 754 6532</a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Opening Hours</p>
                <p className="text-foreground/60 text-sm">Open 7 days a week<br />8:30 AM – 9:00 PM</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="tel:+94777546532"
              className="bg-gold-gradient text-accent-foreground px-6 py-3 rounded text-sm font-medium text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://maps.google.com/?q=Aluthgama+Sri+Lanka+Nethmi+Gem"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold text-accent px-6 py-3 rounded text-sm font-medium text-center hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="rounded overflow-hidden border border-border h-[400px] lg:h-auto">
          <iframe
            title="Nethmi Gem & Jewellery Location - Aluthgama, Sri Lanka"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8!2d80.0!3d6.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjQnMDAuMCJOIDgwwrAwMCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default VisitStore;
