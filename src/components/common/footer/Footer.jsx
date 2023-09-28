import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <section className='newsletter'>
        <div className="container flexSB">
            <div className="ledt row">
                <h1>Newsletter - Stay tune and get the latest update </h1>
                <span>Get the latest News on our newsleter Subscribe!</span>
            </div>
            <div className="right row">
                <input type='text' placeholder='Enter email Address'></input>
                 </div>
        </div>

      </section>
     
    </div>
  )
}

export default Footer
