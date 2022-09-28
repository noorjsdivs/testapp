import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
const Banner = () => {
  const typeTarget = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        "Tailwindcss Learning Session",
        "Introducing react-router-dom6",
        "More about react",
      ],
      typeSpeed: 100,
      smartBackspace: true,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-primary w-full h-screen -mt-32">
      <div className="max-w-7xl h-full mx-auto flex items-center justify-center">
        <div>
          <div>
            <h4 className="font-titleFont text-2xl font-medium text-center mb-5">
              <span ref={typeTarget}></span>
            </h4>
          </div>
          <div className="mb-5">
            <h1 className="font-titleFont text-6xl font-bold text-center">
              Beautiful & unique
            </h1>
            <h1 className="font-titleFont text-6xl font-bold text-center">
              websites made easy
            </h1>
          </div>
          <div className="flex justify-between px-7 font-bodyFont font-semibold">
            <button className="buttonWhite">Why Choose Tailwindcss</button>
            <button className="buttonBlue">Learn More on Tailwind</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
