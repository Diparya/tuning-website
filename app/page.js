import AutoDetailerSection from "@/components/AutoDetailerSection";
import AutomotiveGallery from "@/components/AutomotiveGallery";
import ContactFormHome from "@/components/ContactFormHome";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderHero from "@/components/HeaderHero";
import HeroSection from "@/components/HeroSection";
import HeroSectionSecond from "@/components/HeroSectionSecond";
import RecentNews from "@/components/RecentNews";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <Header/>
      <HeaderHero/>
      <ServicesSection/>
      <HeroSection/>
      <AutomotiveGallery/>
      <AutoDetailerSection/>
      <HeroSectionSecond/>
      <RecentNews/>
      <ContactFormHome/>
      <Footer/>
    </>
  );
}
