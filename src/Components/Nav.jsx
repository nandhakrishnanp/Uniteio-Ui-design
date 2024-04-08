import React from "react";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className=" w-full flex max-container px-3 max-md:pt-3">
      <div className="flex  items-center justify-start gap-2">
        <img
          width={33}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Eo_circle_light-green_letter-u.svg/768px-Eo_circle_light-green_letter-u.svg.png"
          alt="icon"
        />
        <h3 className="text-2xl font-bold font-palanquin text-black" >Uniteio</h3>
      </div>
 
      <ul className="flex-1 max-md:hidden flex mx-3  gap-6 font-palanquin text-xl text-black font-medium  items-center justify-center">

        <li>
            <a href="/">Home</a>
        </li>
        <li>
        <a href="/">Our Services </a>
        </li>
        <li>
        <a href="/">Contact Us</a>
        </li>
      </ul>

            <div className=" max-md:hidden flex items-center justify-center">
                <Button label={"Sign Up"}  />
            </div>
        
    </nav>
  );
};

export default Nav;
