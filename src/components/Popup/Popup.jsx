import React from 'react'
import './Popup.css'
import ComingSoon from './coming-soon.jpeg'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <h1>Opps!!!</h1>
            <h2>Our website is currently under construction. We should be back shortly. Thank you for your patience.</h2>
            <img className='cs-img' src={ComingSoon} alt=""/>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popup