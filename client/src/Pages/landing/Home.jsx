import { AppleCardsCarouselDemo } from "@/components/custom/AppleCardsCarouselDemo";
import { BackgroundBeamsWithCollisionDemo } from "@/components/custom/BackgroundBeamsWithCollisionDemo";
import { HeroSection } from "@/components/custom/Hero";

const Home = () => {
  return (
    <div>
      <BackgroundBeamsWithCollisionDemo />
      <HeroSection />
      <AppleCardsCarouselDemo />
    </div>
  );
};

export default Home;
