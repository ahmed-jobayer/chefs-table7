const Hero = () => {
  return (
    <div>
      <div className="hero h-[600px] rounded-3xl bg text-white">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold w-full">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding <br /> problems to become an
              exceptionally well world-class Programmer.
            </p>
            <button className="btn btn-success">Explore Now</button>
            <button className="btn btn-primary ml-7">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
