import { Link } from "react-router-dom";

const AboutComponet = () => {
  return (
    <div className="my-10">
      <div className="bg-[#FFD050] h-3 md:ml-72 ml-24 md:mr-10 mr-5 flex justify-end">
        <span className="bg-[#592EA9] h-3 md:w-80 w-24 inline-block "></span>
      </div>
      <div className="bg-[#FBF6EA] grid md:grid-cols-2 grid-cols-1 md:mx-10 mx-7 gap-5 md:p-20 p-5">
        <div>
          <span className="uppercase label mb-2">About us</span>
          <h6 className="h2 my-2">
            We are a community of content writers who share their learnings
          </h6>
          <p className="body-1 my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link className="my-2 font-bold leading-4 text-[#592EA9]" to={"/"}>
            {" "}
            Read More {">"}
          </Link>
        </div>
        <div>
          <span className="uppercase label mb-2">Our Mission </span>
          <h6 className="h3 my-2">
            Creating valuable content for creatives all around the world{" "}
          </h6>
          <p className="body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponet;
