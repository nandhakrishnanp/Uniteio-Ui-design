import React from "react";
import join from "../assets/join.svg";
import Button from "../Components/Button";
const Hero = () => {
  return (
    <div className=" min-h-screen w-full flex items-center   max-md:flex-col justify-center">
      <div className="padding-x relative flex-col justify-center items-center m-5">
        <h1 className="text-4xl max-sm:text-3xl font-palanquin font-bold  text-center">
          Unleash the power of collaboration, transform ideas into{" "}
          <span className="text-darkgreen"> extraordinary </span>
          projects
        </h1>
        <p className="text-center font-montserrat pt-5  ">
          Welcome to UniteiO.io, where collaboration meets innovation. Our
          platform brings together skilled individuals  from diverse
          backgrounds to transform ideas into extraordinary projects.{" "}
        </p>
        <div className=" text-center">
           <Button label={"Join Now"}/>
        </div>
        
      </div>

      <div className="flex justify-center items-center">
        <img width={1000} className="p-2 lg:pe-6 max-md:w-[50%]" src={join} alt="hero section img" />
      </div>
    </div>
  );
};

export default Hero;
