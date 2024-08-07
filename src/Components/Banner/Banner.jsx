import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import banner from "../../assets/banner1.png"

function Banner() {
  return (
    <>
    <div className='py-12 sm:py-0 relative px-4'>
      <div className='.container min-h-[600px] flex items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center'>
          {/* image section */}
          <img src= {banner} alt=""  className='w-full max-w-[400px]'/>
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
                <button className="flex items-center gap-2"> {" "}<BiPlayCircle className="text-3xl" /> See Demo</button>
              </div>
            </div>
        </div>
        
      </div>
      {/* animated bob */}
      <div className="w-[300px] h-[300px] bg-gradient-to-r from-primary to-secondary absolute top-56 left-[950px] blur-3xl rounded-full opacity-40"></div>
        
    </div>
    </>
  )
}

export default Banner