import AboutComponet from "../components/AboutComponet";
import Authors from "../components/Authors";
import Category from "../components/Category";
import FeaturedBrand from "../components/FeaturedBrand";
import FeacturedPost from "../components/FeaturedPost";
import Header from "../components/Header";

import JoinOurTeam from "../components/JoinOurTeam";

import Testimonials from "../components/Testimonials";
import WhyWeStarted from "../components/WhyWeStarted";

const Home = () => {
  return (
    <>
      <Header />
      <FeacturedPost />
      <AboutComponet />
      <Category />
      <WhyWeStarted />
      <Authors />
      <FeaturedBrand />
      <Testimonials />

      <JoinOurTeam />
    </>
  );
};

export default Home;
