import Card from "./Card/Card";
import HeroSection from "./HeroSection";
import ReviewSection from "./ReviewSection/ReviewSection";
import ServiceTestimonial from "./ServiceTestimonial/ServiceTestimonial";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Card></Card>
      <ServiceTestimonial></ServiceTestimonial>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
