import React from 'react'
import './Services.css'
import Card from '../Card/Card'

import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'

import Resume from "./resume.pdf"

const Services = () => {
  return (
    <div className="services">

        {/* left side */}

        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <spane>
            I am a believer in teamwork ethics and professional exposure. 
            <br />
            I can trust to meet the organization's goals. I am motivated to achieve great success 
            <br />
            and make achieve great success and make contributions to help people                
            </spane>

            <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* right side */}

        <div className="cards">

            {/* first card */}

            <div style={{left: '14rem'}}>
                <Card
                    emoji = {HeartEmoji} 
                    heading = {'Design'}
                    detail = {"Figma, Skretch, Photoshop, Adobe XD"}
                /> 
            </div>

            {/* second card */}

            <div style={{top: '12rem', left: '-4rem'}}>
                <Card
                    emoji = {Glasses} 
                    heading = {'Developer'}
                    detail = {"HTML5, CSS3, JavaScript, React"}
                /> 
            </div>

            {/* third card */}

            <div style={{top: '19rem', left: '12rem'}}>
                <Card
                    emoji = {Humble} 
                    heading = {'UI/UX'}
                    detail = {"Lorem ipsum dolor sit amet consectetur adipisicing"}
                /> 
            </div>    

            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        
           
        </div>
    </div>
  )
}

export default Services