import React from 'react'
import Title from "../title/Title"
import "./about.css"
import {homeAbout} from "../../dummydata"
import AWrapper from './AWrapper'
    

const AboutCard = () => {
  return (
    <div>
     <section className='aboutHome'>
       <div className='container flexSB'>
        <div className='left row'>
            <img
             src='\assets\b.jpg' alt=''/>
        </div>
        <div className='right row'>
            <Title subtitle="Study at your Own Pace"  title="Benefit From Online Learning"/>
            <div className="items">

            {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
       </div>
     </section>
     <AWrapper/>
    </div>
  )
}

export default AboutCard
