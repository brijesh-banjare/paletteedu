import React from 'react'
import logo from './../logo.png'
import Facebook from './../image/facebook-icon.svg'
import Twitter from './../image/twitter-icon.svg'
import Linkedin from './../image/linkedIn-icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-section1'>
        <div className='footer-logo'>
        <img src={logo} className="logo" alt="logo" /> 
        </div>
        <div className='footer-child1'>
            <div className='footer-child1-text'><h2>Stay updated</h2></div>
            
            <div className='subscribe'>
                <input type="email" placeholder='Enter your email' className='email' />
                <button className='subscribe-btn'>Subscribe</button>
            </div>
        </div>

        </div>

        <div className='footer-section2'>
          <a href='#'>Give Palette a Try</a>
        </div>
        

        <div className='footer-section3'>

          <div className='fs3-child1'>
            <img src={Facebook}></img>
            <img src={Twitter}></img>
            <img src={Linkedin}></img>
          </div>

          <div className='fs3-child2'>

            <a href='#'>How it Works</a>
            <a href='#'>FAQ</a>
            <a href='#'>Blog</a>
            <a href='#'>About Us</a>
            
          </div>

          <div className='fs3-child2-admin'>
          <a href='#'>Admin Login</a>
          </div>

        </div>

        <hr className='h-line'/>

        <div className='footer-section4'>

          <div className='fs4-child1'>
            <p>© 2022 COPYRIGHT Palette. All rights reserved.</p>
          </div>

          <div className='fs4-child2'>
            <a href='#'>Terms of Service</a>
            <a href='#'>Privacy Policy</a>
          </div>




        </div>


    
        

    </div>
    
  )
}

export default Footer