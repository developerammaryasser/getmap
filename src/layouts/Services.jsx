import React from 'react'
import { Link } from 'react-router-dom'
import {IoArrowForwardOutline} from 'react-icons/io5'

const Services = ({cards}) => {
  return (
    <section className='features py-[50px] md:py-[100px] text-primary font-secondary'>
        <div className="container">
        <div className="heading text-center">
            <h2 className='text-5xl font-bold mb-8'>Some Services We Offer</h2>
            <p className='text-lg lg:w-1/2 mx-auto text-secondary'>With our app you can view the route of your order. from our local headqweriers to the place where you are. Look for the app new?</p>
        </div>
        <div className="cards grid grid-cols-1 lg:grid-cols-2 mt-[50px] md:mt-[100px] gap-10">
            {
                cards.map((card,key) => (
                    <div key={key} style={{backgroundImage: `url(${card.bgImage})`}} className={`card p-8 rounded-[30px] flex lg:flex-row flex-col lg:text-start text-center items-center justify-center gap-8`}>
                    <img src={card.image} alt="" />
                    <div className="content">
                        <h3 className='text-3xl font-bold mb-6'>{card.h3}</h3>
                        <p className='text-secondary'>{card.text}</p>
                        <Link to="/" className='flex gap-3 py-6 font-medium justify-center lg:justify-start'>Learn More <IoArrowForwardOutline size={30} /></Link>
                    </div>
                </div>
                ))
            }
        </div>
        </div>
    </section>
  )
}

export default Services