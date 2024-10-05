import About from "@/components/About";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";


export default function Home() {
  return (
    <div className="flex flex-col bg-slate-50 scroll-smooth">
      <Navbar />
      <Hero />
      <Information />
      <About />
      <Services />
      <Booking />
      <Footer />

      

    </div>
  );
}
