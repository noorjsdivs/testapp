import React from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-primary border-t-2 border-black">
      <div className="max-w-7xl mx-auto h-72 relative">
        <div className="w-full h-full bg-white absolute rounded-lg -top-28 flex justify-between">
          <div className="flex justify-center items-center w-1/2 h-full">
            <div className="w-1/2">
              <img className="h-72" src={img1} alt="img1" />
            </div>
            <div className="w-1/2 items-center px-4">
              <h3 className="font-titleFont text-xl font-normal mb-6">
                Always keep learning new ideas and never stop valuing what you
                have.
              </h3>
              <button className="footerButtonBlue">Join with Us</button>
            </div>
          </div>
          <div className="flex relative justify-center items-center w-1/2 h-full">
            <div className="w-full absolute">
              <div className="w-full absolute h-72 bg-gray-700 opacity-60"></div>
              <img className="h-72 w-full z-0" src={img2} alt="img2" />
            </div>
            <div className="w-1/2 items-center px-4 z-50 text-white">
              <h3 className="font-titleFont text-xl font-normal mb-6">
                Always keep learning new ideas and never stop valuing what you
                have.
              </h3>
              <button className="footerButtonWhite">Join with Us</button>
            </div>
          </div>
        </div>
        <p className="absolute bottom-12 left-1/3 font-titleFont font-bold flex items-center underline">
          All rights reserver by{" "}
          <span className="bg-yellow-500 rounded-full ml-1 mr-1">
            <AiOutlineCopyright />
          </span>
          Noor Mohammad
        </p>
      </div>
    </div>
  );
};

export default Footer;
