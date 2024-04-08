import React from "react";
import mobile from "../assets/uniteio.jpeg";
import Button from "./Button";

const Connect = () => {
  return (
    <div className="padding-t ">
      <h1 className="text-center text-4xl font-palanquin font-bold">
        Your Team's Power in <span className="text-primary">Your Pocket</span>{" "}
      </h1>

      <div className="flex justify-center items-center gap-6 max-md:flex-col-reverse max-md:m-3">
        <div className=" bg-slate-green rounded-lg p-5">
          <p className=" font-montserrat font-medium text-2xl p-6">
            Join New Teams, Create New Teams, Explore a World of Innovation
            Experience the power of our app on your Android device. Access our
            platform anytime, anywhere, and stay connected with your team. Get
            started today and unlock a world of seamless collaboration
          </p>
          <div className=" text-center ">
          <button type="button" class="text-white bg-[#050708]   hover:text-primary focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50  me-2 mb-2">
<svg class="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
   Get from AppStore
</button>
<button type="button" class="text-white bg-[#489c6b]  hover:text-primary hover:bg-[#489c6b]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
</svg>
 Get From PlayStore
</button>

        </div>
        </div>

        <div>
          <img src={mobile} alt="screenshot-img" className="rounded-lg p-4 shadow-2xl max-md:h-[50%] hover:scale-105 hover:ease-in" />
        </div>
      </div>
    </div>
  );
};

export default Connect;
