import React from 'react'
import './Intro.css'

import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'

const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hey! I Am</span>
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

            I am right side
        </div>
    </div>
  )
}

export default Intro