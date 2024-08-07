import React from 'react'
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";
function AppStore() {
  return (
    <>
    <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl sm:text-4xl font-semibold text-center'>Get Started with our app</h1>
            <p className='text-center sm:px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto assumenda amet corrupti, veniam esse aut dolore.</p>
        </div>
        <div className='flex flex-wrap gap-4 justify-center items-center mt-5 sm:mt-0'>
            <a href="#">
                <img src={AppStoreImg} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] hover:scale-110 duration-300 ease-in'/>
            </a>
            <a href="#">
                <img src={PlayStoreImg} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] hover:scale-110 duration-300 ease-in'/>
            </a>
        </div>
    </div>
    </>
  )
}

export default AppStore