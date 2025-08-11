import HeroSection from '../components/HeroSection';
import LatestNewspaperSpotlight from '../components/LatestNewspaperSpotlight';
import ShortsHighlights from '../components/ShortsHighlights';
import FeaturedListings from '../components/FeaturedListings';
import MarketInsights from '../components/MarketInsights';
import CaricatureGallery from '../components/CaricatureGallery';
import YouTubeVideos from '../components/YouTubeVideos';
import CallToActionBanner from '../components/CallToActionBanner';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LatestNewspaperSpotlight />
      <ShortsHighlights />
      <FeaturedListings />
      <MarketInsights />
      <CaricatureGallery />
      <YouTubeVideos />
      <CallToActionBanner />
      <Footer />
    </>
  );
}