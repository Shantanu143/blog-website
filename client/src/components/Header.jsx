const Header = () => {
  return (
    <div className="headerImg">
      <div className="md:px-16 md:py-20 text-center md:text-start">
        <p className="uppercase font-extralight md:mb-2 my-1">
          Posted on <span className="font-semibold">startup</span>
        </p>
        <h2 className="display my-4 text-white">
          Step-by-step guide to choosing <br /> great font pairs
        </h2>
        <p className="my-4 body-1 text-white">
          By <span className="text-[#FFD050]">James West</span> | May 23, 2022
        </p>
        <p className="my-4 body-1 text-white">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident.
        </p>
        <button className="my-6 py-2 px-6 border border-[#4C4C4C] bg-[#FFD050] text-[#232536] hover:bg-[#232536] hover:text-[#FFD050] font-semibold rounded-sm transition-all duration-300">
          Read More {">"}
        </button>
      </div>
    </div>
  );
};

export default Header;
