import HeroSection from '../components/HeroSection';
import LatestNewspaperSpotlight from '../components/LatestNewspaperSpotlight';
import ShortsHighlights from '../components/ShortsHighlights';
import FeaturedListings from '../components/FeaturedListings';
import MarketInsights from '../components/MarketInsights';
import CaricatureGallery from '../components/CaricatureGallery';
import YouTubeVideos from '../components/YouTubeVideos';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import CallToActionBanner from '../components/CallToActionBanner';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <LatestNewspaperSpotlight />
      <FeaturedListings />
      <MarketInsights />
      <ShortsHighlights />
      <CaricatureGallery />
      <YouTubeVideos />
      <Testimonials />
      <CallToActionBanner />
      <ContactForm />
      <Footer />
    </>
  );
}