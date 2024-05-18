import Card from "./PricingCard/Card";
import HeroSection from "./HeroSection";
import ReviewSection from "./ReviewSection/ReviewSection";
import ServiceTestimonial from "./ServiceTestimonial/ServiceTestimonial";
import FeatureSection from "./FeatureSection/FeatureSection";
import TrustedBanner from "./TrustedBanner/TrustedBanner";
import TimeLine from "./TimeLine/TimeLine";

const Home = () => {
  return (
    <div className="font-serif">
      <HeroSection></HeroSection>
      <Card></Card>
      <ServiceTestimonial></ServiceTestimonial>
      <TimeLine></TimeLine>
      <FeatureSection></FeatureSection>
      <TrustedBanner></TrustedBanner>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
