/*import logo from './logo.svg';*/
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Services from './components/Services/Services';
import Popup from './components/Popup/Popup';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

import { useEffect, useState } from 'react'


function App() {
  const [timedPopup, setTimedPopup] = useState(true);

  useEffect(() => { 
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000)
  }, []);

  return (
    <div className="App">
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}/>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
