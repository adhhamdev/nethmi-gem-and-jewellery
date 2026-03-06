import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gemstones from "@/components/Gemstones";
import JewelleryCollection from "@/components/JewelleryCollection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import VisitStore from "@/components/VisitStore";
import GallerySection from "@/components/GallerySection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Gemstones />
      <JewelleryCollection />
      <WhyChooseUs />
      <Reviews />
      <VisitStore />
      <GallerySection />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
