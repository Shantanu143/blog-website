import AboutComponet from "../components/AboutComponet";
import Authors from "../components/Authors";
import Catagory from "../components/Catagory";
import FeacturedPost from "../components/FeacturedPost";
import Header from "../components/Header";
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
    </>
  );
};

export default Home;
