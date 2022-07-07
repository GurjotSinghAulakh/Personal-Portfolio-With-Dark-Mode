import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'

import Project1 from '../../img/portfolio-image1.jpg'
import Project2 from '../../img/portfolio-image2.jpg'
import Project3 from '../../img/portfolio-image3.jpg'
import Project4 from '../../img/portfolio-image4.jpg'
import Project5 from '../../img/portfolio-image5.jpg'

import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio">

        {/* Heading */}
       
        <span>Recent Projects</span>
        <span>Portfolio</span>
        
        {/* Slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <img src={Project1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project5} alt="" />
            </SwiperSlide>
        </Swiper>
        

    </div>
  )
}

export default Portfolio