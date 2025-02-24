import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MyWorks from "@/components/MyWorks";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutMe/>
      <Services/>
      <MyWorks/>
      <Contact/>
      <Footer/>
    </>
  );
}
