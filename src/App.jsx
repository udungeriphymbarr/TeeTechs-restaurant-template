import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <main className="bg-[#0F0F0F] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />

      <WhatsappButton />
      <ScrollTop />
    </main>
  );
}

export default App;