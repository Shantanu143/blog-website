import img from "../assets/started.jpg";
const WhyWeStarted = () => {
  return (
    <div className="my-10 mx-10">
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div className="col-span-3 mr-10">
          <img className="w-full h-auto object-cover " src={img} alt="photo" />
        </div>

        <div className="col-span-1 bg-white p-6 mt-[-5rem] ml-10 md:mt-30 md:ml-[-12rem] lg:ml-[-20rem] max-w-full md:max-w-[35rem] ">
          <span className="uppercase label tracking-wider">Why We Started</span>
          <h2 className="h5 md:mt-4">
            It started out as a simple idea and evolved into our passion
          </h2>
          <p className="body-1 md:block hidden  mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="my-6 py-3 px-8 bg-[#FFD050] text-[#232536] hover:bg-[#232536] hover:text-[#FFD050] font-semibold rounded-sm transition-all duration-300">
            Discover Our Story &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyWeStarted;
