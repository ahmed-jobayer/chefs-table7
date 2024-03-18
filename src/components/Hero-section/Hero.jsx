const Hero = () => {
  return (
    <div className=" h-[600px] rounded-3xl bg text-white flex flex-col items-center justify-center text-center">
      
        <h1 className=" text-5xl font-bold leading-[76px]  ">
          Discover an exceptional cooking <br /> class tailored for you!
        </h1>
        <p className="mb-6">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding <br /> problems to become an
          exceptionally well world-class Programmer.
        </p>
        <div>
        <button className="btn bg-[#0BE58A] rounded-[50px] text-black border-none">Explore Now</button>
        <button className="btn  rounded-[50px] text-white border-1 ml-7">Our Feedback</button>
        </div>
      
    </div>
  );
};

export default Hero;
