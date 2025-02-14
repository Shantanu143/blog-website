import img from "../assets/aboutHeader.webp";

const AboutHeader = () => {
  const states = [
    {
      number: "12",
      title: "Blogs Published",
    },
    {
      number: "18K",
      title: "Views on Finsweet",
    },
    {
      number: "30K",
      title: "Total active Users",
    },
  ];

  return (
    <div className="mx-10 my-20 h-screen">
      <div className="flex items-center justify-center p-5 -mb-20 ">
        <div className="max-w-xl z-10 bg-white mx-10 p-10">
          <span className="uppercase cap-3">About us</span>
          <h2 className="h1 ">
            We are a team of content writers who share their learnings
          </h2>
        </div>
        <div className="max-w-xl">
          <p className="body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="">
        <img className="w-full max-h-[30rem] object-cover" src={img} alt="" />
        <div className="relative -top-48  md:ml-32 ml-20 md:mr-80 mr-24">
          <div className="bg-[#FFD050] px-8 py-10 max-w-xl">
            <div className=" flex items-center justify-center gap-5">
              {states.map((data, index) => (
                <div
                  className="flex flex-col items-start justify-center"
                  key={index}
                >
                  <span className="display"> {data.number}</span>
                  <span className="body-1 text-[#232536]">{data.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#FFD050] relative   flex justify-start">
            <span className="bg-[#592EA9] h-5 md:w-80 w-28 inline-block "></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
