import blogHome from "../assets/blogHome.jpg";
const BlogHeader = () => {
  return (
    <div className="flex md:flex-row flex-col bg-[#F4F0F8] justify-center md:p-20 p-10 items-center gap-10">
      <div className="max-w-[45rem] text-center md:text-left">
        <span className="cap-3 uppercase text-[#232536]">Featured Post</span>
        <h2 className="h2 my-2 text-[#232536]">
          Step-by-step guide to choosing great font pairs
        </h2>

        <p className="label my-4">
          By <span className="text-[#592EA9]">John Doe </span> l May 23, 2022{" "}
        </p>
        <p className="body-1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <button className="my-8 mx-2 py-2 px-10  bg-[#FFD050] text-[#232536] hover:bg-[#EDC14A] font-semibold transition-all duration-300">
          Read More {">"}
        </button>
      </div>
      <div>
        <img
          className="w-full object-cover md:max-w-full max-w-72 "
          src={blogHome}
          alt="blog home image"
        />
      </div>
    </div>
  );
};

export default BlogHeader;
