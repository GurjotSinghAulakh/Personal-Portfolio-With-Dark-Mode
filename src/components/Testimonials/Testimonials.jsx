import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profile1 from '../../img/avtar1.jpeg'
import profile2 from '../../img/avtar2.jpg'
import profile3 from '../../img/avtar3.jpeg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'


const Testimonials = () => {
    const clients = [
        {
            img: profile1,
            review: "We became friends during the introductory week, where we worked together on the innovation camp assignment. I quickly realized that he was a kind and hard working guy with a lot of motivation. After this, me and Gurjot have become good friends and worked together with all compulsory tasks together in school. In addition, we have worked together in many of the jobs we have had in common together such as teaching assistant in programming, student ambassador for TKD oslomet and Secundo AS. Gurjot is a generous man, who puts the needs of others before his own. He works well in teams, communicates well, does the work he undertakes and produces good results. He does his best to help and uplift others, and does not hesitate to share experiences and knowledge he has with others :) I'm glad I got to know you, and look forward to working on many more projects together."
        },
        {
            img: profile2,
            review: "Based on my observations, I can conclude that Gurjot work exceptionally hard and love working in challenging conditions. He are responsible, dependable, and like working in a group setting. Gurjot are an extremely helpful person who spends time assisting others. Furthermore, I perceive that he have a natural ability to lead a group."
        },
        {
            img: profile3,
            review: "I have known Gurjot for 2 years now. He is a very kind soul who is eager to help everyone around him. Even if it is at his own expense. He is willing to prioritise helping others rather than just focusing on his own work. That is something that seprates everyone from Gurjot. I have worked with Gurjot on some projects previously. And what I can say for sure is that he knows, and master a lot of things like multiple programming languages very well and is capable of finding multiple ways to solve problems. At the same time he has tendencies to take control and be a leader when it is necessary. He isn't just a good programmer but he also has a big heart."
        }
    ]



  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me ...</span>
            <div className="blur t-blur1" style={{ background: 'var(--purple)' }}></div>
            <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
        </div>

        {/* Slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
           {clients.map((client, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide> 
                );
           })}
        </Swiper>

    </div>
  )
}

export default Testimonials