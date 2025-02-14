import AboutComponet from "../components/AboutComponet";
import Authors from "../components/Authors";
import Catagory from "../components/Catagory";
import FeaturedBrand from "../components/FeaturedBrand";
import FeacturedPost from "../components/FeaturedPost";
import Header from "../components/Header";
import JoinTeam from "../components/JoinTeam";
import Testimonials from "../components/Testimonials";
import WhyWeStarted from "../components/WhyWeStarted";

const Home = () => {
  return (
    <>
      <Header />
      <FeacturedPost />
      <AboutComponet />
      <Catagory />
      <WhyWeStarted />
      <Authors />
      <FeaturedBrand />
      <Testimonials />
      <JoinTeam />
    </>
  );
};

export default Home;
