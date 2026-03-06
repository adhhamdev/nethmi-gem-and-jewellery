import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gemstones", href: "#gemstones" },
  { label: "Jewellery", href: "#jewellery" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Us", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-gold" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-heading text-lg md:text-xl font-semibold text-gold-gradient">
          Nethmi Gem & Jewellery
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body text-foreground/70 hover:text-accent transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+94777546532"
            className="flex items-center gap-2 bg-gold-gradient text-accent-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-gold px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-body text-foreground/70 hover:text-accent transition-colors tracking-wide uppercase border-b border-border/30"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+94777546532"
            className="mt-4 flex items-center justify-center gap-2 bg-gold-gradient text-accent-foreground px-4 py-3 rounded text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
