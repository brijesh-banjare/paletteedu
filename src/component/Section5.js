import React from 'react'
import AllImage from './../image/allimage.png';
import Section5image4 from './../image/section-5-image-4.png';
import Section5image1 from './../image/section-5-img-1.png';
import Section5image2 from './../image/section-5-img-2.png';
import Section5image3 from './../image/section-5-img-3.png';
const Section5 = () => {
  return (
   <>

   <div className='palette-content-4'>
   <div className='advising-title'>
    <div className='advising-text'>
       
        </div>
    <div className='advising-head'>
    PARENTS
    </div>
    </div>
<div className='box-one pc4-box'>
<p>Communicate with your all of your students' networks individually or in groups</p>
<img src={Section5image1} alt='image' className='pc4-box-image'></img>
</div>
<div className='section-5-image-4'>
<img src={Section5image4} alt="image"></img>
</div>
<div className='box-two pc4-box'>
<p>Communicate with your all of your students' networks individually or in groups</p>
<img src={Section5image2} alt='image' className='pc4-box-image'></img>
</div>
<div className='box-three pc4-box'>
<p>Communicate with your all of your students' networks individually or in groups</p>
<img src={Section5image3} alt='image' className='pc4-box-image'></img>
</div>
   </div>
   </>
  );
}

export default Section5;