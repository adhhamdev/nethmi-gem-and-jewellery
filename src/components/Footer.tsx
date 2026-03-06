const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gemstones", href: "#gemstones" },
  { label: "Jewellery", href: "#jewellery" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Us", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-secondary border-t border-border px-4 py-12 md:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-lg font-semibold text-gold-gradient mb-3">Nethmi Gem & Jewellery</h3>
          <p className="text-foreground/50 text-sm leading-relaxed">
            Authentic Sri Lankan gemstones and handcrafted jewellery in Aluthgama.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3 text-foreground/80">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-foreground/50 text-sm hover:text-accent transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3 text-foreground/80">Contact</h4>
          <div className="space-y-2 text-foreground/50 text-sm">
            <p>123 Welipenna Road, Aluthgama</p>
            <a href="tel:+94777546532" className="block hover:text-accent transition-colors">077 754 6532</a>
            <p>Open daily: 8:30 AM – 9:00 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center">
        <p className="text-foreground/40 text-xs">
          © {new Date().getFullYear()} Nethmi Gem & Jewellery – Aluthgama, Sri Lanka. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
