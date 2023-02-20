import React from 'react'
import Banner from '../layouts/Banner'
import Header from '../layouts/Header'
import Services from '../layouts/Services'
//* Images
import featureImage1 from '../assets/images/feature1.png'
import featureImage2 from '../assets/images/feature2.png'
import featureImage3 from '../assets/images/feature3.png'
import featureImage4 from '../assets/images/feature4.png'
const Home = () => {
  //* Pathes images
  const featurebgImage1 = '../assets/images/feature1_bg.png'
  const featurebgImage2 = '../assets/images/feature2_bg.png'
  const featurebgImage3 = '../assets/images/feature3_bg.png'
  const featurebgImage4 = '../assets/images/feature4_bg.png'
  
  const servciesCards = [
    {
      image: featureImage1,
      bgImage: featurebgImage1,
      h3: "Payment Done",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consectetur in aperiam eius possimus ipsa."
    },
    {
      image: featureImage2,
      bgImage: featurebgImage2,
      h3: "Find Your Product",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consectetur in aperiam eius possimus ipsa."
    },
    {
      image: featureImage3,
      bgImage: featurebgImage3,
      h3: "Print Out",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consectetur in aperiam eius possimus ipsa."
    },
    {
      image: featureImage4,
      bgImage: featurebgImage4,
      h3: "Product Received",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consectetur in aperiam eius possimus ipsa."
    },
  ]
  return (
    <>
      <Header />
      <Banner />
      <Services cards={servciesCards}/>
    </>
  )
}

export default Home