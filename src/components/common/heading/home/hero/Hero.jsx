import React, {useState} from 'react'
import "./hero.css"
import Title from '../../../../title/Title'
import { Link } from 'react-router-dom'


const Hero = () => {
  const [isActive, setisActive] = useState(false);

  const toggleActivation = ()=> {
    setisActive(!isActive)
  }
  return (
    <div>
      <section className='hero'>
         <div className='container'>
             <div className='row'>
              <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education'/>

        <p>Caters to diverse Interest and strengths In STEM to thrive in the modern World It is Internationally Recognized and exposes learners to global opportunities!</p>
          <div className="button">
            <Link to='/courses/'>
            <button className='primary-btn'onClick={toggleActivation}>
              GET STARTED NOW
            </button>
            </Link>
            <Link>
            <button className='primary-btn'>
              VIEW COURSE
            </button>
            </Link>
          </div>
      </div>
    </div>
   </section>
   <div className="margin"></div>
    </div>
  )
}

export default Hero
