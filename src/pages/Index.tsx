import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';
import Hero from '@/components/Hero';
import JewelleryCollection from '@/components/JewelleryCollection';
import Navbar from '@/components/Navbar';
import VisitStore from '@/components/VisitStore';
import WhyChooseUs from '@/components/WhyChooseUs';

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <JewelleryCollection />
      <WhyChooseUs />
      <VisitStore />
      <GallerySection />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
