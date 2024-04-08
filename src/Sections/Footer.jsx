import React from "react";

const Footer = () => {
  return (
    <footer className="flex max-md:flex-col gap-7 justify-between">
      <div className="flex items-center justify-center gap-3">
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Eo_circle_light-green_letter-u.svg/768px-Eo_circle_light-green_letter-u.svg.png"
          alt="log0"
        />
        <p className="text-white font-palanquin text-xl">Uniteio <br /> <span className=" text-primary"> We Innovate</span></p>

      </div>
      <div >
        <ul className="text-white font-palanquin text-xl flex flex-col gap-3 hover:cursor-pointer ">
          <li className="hover:text-primary">Home</li>
          <li className="hover:text-primary">Services</li>
          <li className="hover:text-primary">Features</li>
          <li className="hover:text-primary">Contact</li>
        </ul>
      </div>
      <div>
      <ul className="text-white font-palanquin text-xl ">
          <p className=" capitalize">Sri krishna college of engineering technology <br />
          kuniyamuthur , Coimbatore <br />
          Ph- 0421 123 456 </p>
        </ul>
      </div>
      <div>
        <p className="text-white"> &copy; All CopyRights Received </p>
      </div>
    </footer>
  );
};

export default Footer;
