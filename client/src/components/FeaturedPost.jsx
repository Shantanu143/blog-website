import { Link } from "react-router-dom";
import featurePost from "../assets/featurePost.jpg";

const FeacturedPost = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:m-10 my-2  gap-5">
      <div>
        <h6 className="h2 md:mb-5 m-2">Feactured Post</h6>
        <div className="border border-[#F4F4F4]  m-5 p-5">
          <img
            className="w-full md:max-h-72 max-h-56 object-cover md:mb-4 mb-2"
            src={featurePost}
            alt="Feature Post img"
          />
          <p className="label my-4">
            By <span className="text-[#592EA9]">John Doe</span> | May 23, 2022
          </p>
          <h2 className="h3 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h2>
          <p className="body-1">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="my-6 py-2 px-6  bg-[#FFD050] text-[#232536] hover:bg-[#232536] hover:text-[#FFD050] font-semibold rounded-sm transition-all duration-300">
            Read More {">"}
          </button>
        </div>
      </div>
      <div className="md:mr-8 mr-0">
        <div className="flex items-center justify-between md:mb-5 m-2 ">
          <h6 className="h2">All Post</h6>
          <Link className="md:mr-5 mr-10 body-1" to={"/"}>
            View All
          </Link>
        </div>
        <div className="mx-7 my-3">
          {[0, 0, 0, 0].map((data, index) => (
            <>
              <div
                key={index}
                className="hover:bg-[#FBF6EA] rounded-sm py-5 px-8"
              >
                <span className="my-2 label">By <span className="text-[#592EA9]">John Doe</span> | Aug 23, 2021 </span>
                <p className="my-2 mr-10 h4">
                  8 Figma design systems that you can download for free today.
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeacturedPost;
