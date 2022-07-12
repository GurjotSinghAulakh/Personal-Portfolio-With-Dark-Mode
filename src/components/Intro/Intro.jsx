import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'

import Boy from '../../img/boy.png';
import Thrumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesemoji from '../../img/glassesemoji.png';

import { themeContext } from '../../Context'
import { useContext } from 'react';

import { motion } from 'framer-motion'


const Intro = () => {

    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode? 'white': '' }}>Hey! I Am</span>
                <span>Gurjot Singh Aulakh</span>
                <span>Fullstack Developer with high level of experience 
                    in web designing and backend development, producting the Quality 
                    work</span>
            </div>

            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>

        <div className="i-right">

            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Boy} alt="" />
            <motion.img 
            initial={{ left: '-36%' }}
            whileInView={{ left: '-24%' }}
            transition={transition}
            src={Glassesemoji} alt="" />

            <motion.div 
            initial={{ top: '-4%', left: '74%' }}
            whileInView={{ left: '68%' }}
            transition={transition}
            style={{top: '-4%', left: '68%'}}
            className='floatimg-div'>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div style={{ top: '18rem', left: '3rem' }}
            initial={{ left: '9rem', top: '18.3rem' }}
            whileInView={{ left: '3rem' }}
            transition={transition}
            className='floatimg-div'>
                <FloatingDiv image={Thrumbup} txt1='Best' txt2='Design'/>      
            </motion.div>

            {/* Blur divs */}
            <div className='blur' style={{
                background: 'rgb(238 210 255)'
            }}></div>

            <div className='blur' style={{
                background: '#C1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
            }}></div>


        </div>
    </div>
  )
}

export default Intro