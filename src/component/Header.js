import React, {useState} from 'react';
import logo from './../logo.png';
import "./../style/style.css";
import NavButton from './../image/nav.svg';
import Cancel from './../image/cancel.svg';

function Header() {
  const [show,setShow]=useState(false);
  function toggle(){
   setShow(!show);
   }
  return (
    <div className='header'> 
    <div className='images'>
    <img src={logo} className="logo" alt="logo" /> 
    </div>
    <button className='nav-btn' onClick={toggle}>
      {
        show?<img src ={NavButton} alt="Nav-button"></img>:<img src ={Cancel} alt="Nav-button"></img>
      }
   
        
        </button>
        <nav className='nave-bar ' id='bigNav'>
       
      <ul>
          <li><a href='#'>How it Work</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>FAQ</a></li>
          <li><a href='#'>Blog</a></li>
          <button className='login-btn'>Admin Login</button>
      
      </ul>
      </nav>
    {
      show?null:<nav className='nave-bar' id='smallNav'>
       
      <ul>
          <li><a href='#'>How it Work</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>FAQ</a></li>
          <li><a href='#'>Blog</a></li>
          <button className='login-btn'>Admin Login</button>
      
      </ul>
      </nav>
    }


    </div>
  );
}



export default Header;