import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggele, setToggle] = useState(true);

  const navlinks = [
    {
      name: "Home ",
      link: "/",
    },
    {
      name: "Blog ",
      link: "/blog",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <div className="bg-[#232536] py-1 px-16 text-white">
      <div className="flex items-center justify-between m-5">
        <div>
          {/* <img className="w-5 h-5" src="logo" alt="logo" /> */}
          <span className="font-bold text-white text-3xl">{"{Finsweet"}</span>
        </div>
        <div className="gap-5">
          <span
            onClick={() => setToggle(!toggele)}
            className="block md:hidden text-white"
          >
            {toggele ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                />
              </svg>
            )}
          </span>

          {toggele ? (
            <div className="hidden md:flex items-center justify-center gap-4 ">
              {navlinks.map((data, index) => (
                <Link to={data.link} key={index}>
                  {data.name}
                </Link>
              ))}
              <button className="text-black bg-white px-6 py-2 ml-2 border rounded-sm hover:bg-[#232536] hover:text-white hover:border-[#6D6E76] duration-300">
                Subscribe
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center absolute top-22 p-4 gap-2 right-1.5 rounded-2xl  bg-[#232536] z-10">
              {navlinks.map((data, index) => (
                <Link to={data.link} key={index}>
                  {data.name}
                </Link>
              ))}
              <button className="text-black bg-white px-6 py-2 ml-2 rounded-sm">
                Subscribe
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
