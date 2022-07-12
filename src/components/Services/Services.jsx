import React from 'react'
import './Services.css'
import Card from '../Card/Card'

import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'

import Resume from "./resume.pdf"

import { themeContext } from '../../Context'
import { useContext } from 'react';

import { motion } from 'framer-motion'

const Services = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const transition = {duration : 2.5, type: 'spring'}

  return (
    <div className="services" id='Services'>

        {/* left side */}

        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>services</span>
            <spane>
            I am a believer in teamwork ethics and professional exposure. 
            <br />
            I can trust to meet the organization's goals. I am motivated to achieve great success 
            <br />
            and make contributions to help people.                
            </spane>

            <a href={Resume} download style={{ width: '30%'}}>
                <button className='button s-button' >Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* right side */}

        <div className="cards">

            {/* first card */}

            <motion.div 
            style={{left: '14rem'}}
            initial={{ left: '25rem' }}
            whileInView={{ left: '14rem' }}
            transition={transition}>
                <Card
                    emoji = {HeartEmoji} 
                    heading = {'Design'}
                    detail = {"Figma, Skretch, Photoshop, Adobe XD, Lorem ipsum"}
                /> 
            </motion.div>

            {/* second card */}

            <motion.div 
            style={{top: '12rem', left: '-4rem'}}
            initial={{ left: '-25rem' }}
            whileInView={{top: '12rem', left: '-4rem'}}
            transition={transition}>
                <Card
                    emoji = {Glasses} 
                    heading = {'Developer'}
                    detail = {"HTML5, CSS3, JavaScript, React, Photoshop, Adobe XD, Lorem ipsum dolor sit"}
                /> 
            </motion.div>

            {/* third card */}

            <motion.div 
            style={{top: '19rem', left: '12rem'}}
            initial={{ left: '25rem' }}
            whileInView={{top: '19rem', left: '12rem'}}
            transition={transition}>
                <Card
                    emoji = {Humble} 
                    heading = {'UI/UX'}
                    detail = {"Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet"}
                /> 
            </motion.div>    

            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        
           
        </div>
    </div>
  )
}

export default Services