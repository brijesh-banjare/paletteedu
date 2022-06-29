import React from 'react';
import AllImage from './../image/allimage.png';
import Section6img1 from './../image/section-6-img-1.png';

const Section6 = () => {
  return (
    <div className='palette-content-5'>
    <div className='advising'>
        <div className='advising-title'>
        <div className='advising-text'>
            </div>
        <div className='advising-head'>
      student
        </div>
        </div>
    </div>
    <div className='student'>
    <img src={Section6img1} alt='team' className='student-image'></img>
    <div className='box-1 box1'>
    <p>Let those in your Success Network find and suggest social, educational and professional opportunities for you.</p>
    <div>
    <img src={AllImage} alt='image' className='allimage'/>
    </div>
    
    </div>
    
    <div className='box-2 box1'>
    <p>Let those in your Success Network find and suggest social, educational and professional opportunities for you.</p>
    <div>
    <img src={AllImage} alt='image' className='allimage'/>
    </div>
    
    </div>
    <div className='box-3 box1'>
    <p>Let those in your Success Network find and suggest social, educational and professional opportunities for you..</p>
    <div>
    <img src={AllImage} alt='image' className='allimage'/>
    </div>
    </div>
    </div>
    
 </div>
  );
}

export default Section6;