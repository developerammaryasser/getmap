import React from 'react'
import BannerImage from '../assets/images/about.png'
const Banner = () => {
  return (
    <div className='banner text-primary font-primary py-[50px] md:py-[100px]'>
      <div className="container">
        <div className="bg-accent-secondary bg-opacity-30 rounded-[60px] text-center lg:text-start p-[3rem] flex lg:flex-row flex-col justify-center gap-8 lg:justify-between items-center">
          <div className="bannerImage lg:w-[50%]">
              <img src={BannerImage} alt="About" />
          </div>
          <div className="content lg:w-[50%]">
              <h2 className='text-5xl font-bold mb-8'>Find Out A Little More About Us</h2>
              <p className='text-lg leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quibusdam sit nihil vitae dolorem minus assumenda sequi repellat nostrum earum?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner