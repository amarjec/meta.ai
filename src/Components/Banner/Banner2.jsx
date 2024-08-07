import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import banner2 from "../../assets/banner2.png";

function Banner2() {
  return (
    <>
      <div className="py-12 sm:py-0 relative px-10">
        <div className="container min-h-[700px] flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
            {/* banner text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 max-w-[700px]">
              <h1 className="text-4xl font-semibold">
                GET READY TO ENJ0Y VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Movies WITH OUR PLATFORM
                </span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                deleniti voluptates quae dignissimos placeat deserunt aliquid
                veniam provident nihil dolorem?
              </p>
              <div className="flex items-center gap-6">
                <button className="primary-btn">Get Started</button>
                <button className="flex items-center gap-2">
                  {" "}
                  <BiPlayCircle className="text-3xl" /> See Demo
                </button>
              </div>
            </div>
            {/* image section */}
            <div className="order-1">
              <img src={banner2} alt="" className="w-full max-w-[400px]" />
            </div>
          </div>
           {/* animated bob */}
           <div className="w-[300px] h-[300px] bg-gradient-to-r from-primary to-secondary absolute top-80 left-[350px] blur-3xl rounded-full opacity-50"></div>
        
        </div>
      </div>
    </>
  );
}

export default Banner2;
