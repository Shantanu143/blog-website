const Testimonials = () => {
  const img =
    "https://images.pexels.com/photos/4855373/pexels-photo-4855373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="mx-10 my-20">
      <div className="bg-[#FBF6EA] grid md:grid-cols-2 grid-cols-1 md:mx-10  md:gap-5 md:p-20 p-5">
        <div className="md:border-r-1 md:pb-5 border-[#6D6E76] md:pr-20 md:mr-32">
          <span className="label uppercase">testimonials</span>
          <h2 className="h2 md:mb-5 md:mt-2 my-2">What people say about our blog</h2>
          <p className="body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <hr className="my-5 md:hidden visible text-[#6D6E76]" />
        </div>

        <div>
          <p className="h4 md:text-start text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col md:flex-row items-center md:justify-start justify-center gap-5 md:gap-32 mt-10  ">
            <div className="flex items-center justify-start gap-5  ">
              <img
                src={img}
                className="w-16 h-16 rounded-full"
                alt="testimonial img "
              />
              <div>
                <div>
                  <p className="h4">Jonathan Vallem</p>
                  <span className="body-1">New york, USA</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <button className="border p-3 mr-1 rounded-full hover:bg-black hover:text-white transition-all duration-500">
                <svg
                  width="15"
                  height="15"
                  className=""
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="border p-3 rounded-full hover:bg-black hover:text-white transition-all duration-500">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
