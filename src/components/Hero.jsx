import React from 'react'
import heroImg from '../assets/images/hero-img.png'
import ButtonPrimary from './Button'
const Hero = () => {
  return (
    <section className="hero py-[100px] h-full font-primary">
        <div className="container h-full flex flex-col justify-center items-stretch lg:items-center lg:text-start text-center lg:flex-row gap-8">
            <div className="content flex flex-col gap-8 lg:items-start lg:w-[50%]">
                <h1 className='text-[2.5rem] md:text-[4rem] font-bold text-primary'>Order Products Faster Easier</h1>
                <p className='text-lg text-primary'>Order your favorite foods at amy time and we will deliver them right to where you are.</p>
                <ButtonPrimary className={`!bg-accent-primary text-white`}>Get Started</ButtonPrimary>
            </div>
            <div className="HeroImage">
                <img src={heroImg} className="" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero