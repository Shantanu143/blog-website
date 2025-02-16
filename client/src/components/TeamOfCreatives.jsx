import img from "../assets/teamOfCreatives.jpg";
const TeamOfCreatives = () => {
  return (
    <div className="my-20 mx-10">
      <div className="flex flex-col md:flex-row justify-around items-center gap-5">
        <div className="max-w-lg">
          <h2 className="h2">Our team of creatives</h2>
          <p className="h4 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <p className="body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className="max-w-xl">
          <img
            src={img}
            className="w-full max-h-[30rem] object-cover"
            alt="img here"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamOfCreatives;
