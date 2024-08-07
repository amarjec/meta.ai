import React from "react";
import hero from "../../assets/hero.png";
import { BiPlayCircle } from "react-icons/bi";


function Hero() {
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[780px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20">
              <h1 className="text-4xl font-semibold">
                GET READY TO ENJ0Y VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  GAMES WITH OUR PLATFORM
                </span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                deleniti voluptates quae dignissimos placeat deserunt aliquid
                veniam provident nihil dolorem?
              </p>
              <div className="flex items-center gap-6">
                <button className="primary-btn">Get Started</button>
                <button className="flex items-center gap-2"> {" "}<BiPlayCircle className="text-3xl" /> See Demo</button>
              </div>
            </div>
            {/* image section */}
            <div className="order:1 sm:order-2">
              <img src={hero} alt="" className="max-h-[700px]" />
            </div>

          </div>
          {/* animated blob */}
          <div className="animated-wrapper w-[300px] h-[300px] bg-gradient-to-r from-primary to-secondary absolute top-0 left-0 blur-3xl rounded-full "></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
