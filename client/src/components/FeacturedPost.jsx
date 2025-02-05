import featurePost from "../assets/featurePost.jpg";

const FeacturedPost = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-10 gap-5">
      <div>
        <h6 className="font-bold text-2xl mb-5">Feactured Post</h6>
        <div className="border border-[#6D6E76] m-5 p-5">
          <img className="w-full h-56 object-cover" src={featurePost} alt="Feature Post img" />
          <p>By John Doe | May 23, 2022</p>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="my-6 py-2 px-6 border border-[#4C4C4C] bg-[#FFD050] text-[#232536] hover:bg-[#232536] hover:text-[#FFD050] font-semibold rounded-sm transition-all duration-300">
            Read More {">"}
          </button>
        </div>
      </div>
      <div>
        <h6>All Post</h6>
      </div>
    </div>
  );
};

export default FeacturedPost;
