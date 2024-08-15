import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import Instructors from "@/components/Instructors";
import Navbar from "@/components/Navbar";
import RecentWork from "@/components/RecentWork";
import Skills from "@/components/Skills";
import WebDevelopmentTestimonials from "@/components/webDevelopmentTestimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#050709] overflow-hidden">
      <Navbar />
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-10">
        <About />
        <RecentWork />
      </div>
      <Instructors />
      <WebDevelopmentTestimonials />
      <div className="max-w-7xl mx-auto px-10">
        <Experience />
        <Contact />
        <div className="hidden lg:block">
          {" "}
          <Footer />
        </div>
      </div>
    </div>
  );
}
