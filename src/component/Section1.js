import React from 'react'
import image1 from './../image/image1.png';
import GivePTry from './GivePTry';
const Section1 = () => {
    return (
        <div>
            <div className='section1'>
<div className='section1-left'>
    <h3>Connecting Students
With the Adults
That Care About Them</h3>
<GivePTry/>
</div>

<div className='section1-right'>
    <img src={image1} className="section1-image1" alt='image1'/>
</div>
            </div>
        </div>
    )
}

export default Section1
