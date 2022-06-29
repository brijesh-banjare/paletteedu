import React from 'react'
import Team from './../image/team.png'
import AllImage from "./../image/allimage.png"
const Section4 = () => {
  return (
    <div className='palette-content-3'>
<div className='advising'>
    <div className='advising-title'>
    <div className='advising-text'>
       
        </div>
    <div className='advising-head'>
    ADVISING PROGRAMS
    </div>
    </div>

    <div>
        <img src={Team} alt='team' className='advising-image'></img>
    </div>
</div>

<div className='four-box'>
<div className='box-left box'>
<p>Create a personal success network for every student.</p>
<div>
<img src={AllImage} alt='image' className='allimage'/>
</div>

</div>

<div className='box-top box'>
<p>Create a personal success network for every student.</p>
<div>
<img src={AllImage} alt='image' className='allimage'/>
</div>


</div>

<div className='box-right box'>
<p>Create a personal success network for every student.</p>
<div>
<img src={AllImage} alt='image' className='allimage'/>
</div>


</div>
<div className='box-bottom box'>
<p>Create a personal success network for every student.</p>
<div>
<img src={AllImage} alt='image' className='allimage'/>
</div>


</div>
</div>
    </div>
  );
}

export default Section4;