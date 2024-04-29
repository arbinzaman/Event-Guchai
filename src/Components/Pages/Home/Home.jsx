import Card from "./Card/Card";
import HeroSection from "./HeroSection";
import ReviewSection from "./ReviewSection/ReviewSection";
import ServiceTestimonial from "./ServiceTestimonial/ServiceTestimonial";
import FeatureSection from "./FeatureSection/FeatureSection";
import TrustedBanner from "./TrustedBanner/TrustedBanner";

const Home = () => {
  return (
    <div className="font-serif">
      <HeroSection></HeroSection>
      <Card></Card>
      <ServiceTestimonial></ServiceTestimonial>
      <FeatureSection></FeatureSection>
      <TrustedBanner></TrustedBanner>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
