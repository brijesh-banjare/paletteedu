import React from 'react'
import image2 from './../image/image2.png';
import Android from './../image/android.png';
import Apple from './../image/apple.png';
import Paint from './../image/paint.png';
import Laptop from './../image/laptop.png';
const Section2 = () => {
    return (
        <div className='palette-content-1'>
            <div className='ps-11'>
                <div className='ps-11-1'>
                    <img src={image2} alt="image2" className='image2' />
                </div>
                <div className='ps-11-2'>
                    <div className='a-a-c'>
                        <div className='a-a'>
                            <div className='a-name'>
                                <img src={Android} alt='android' className='brand' />
                                <div className='name'>Android</div>
                            </div>
                            <div className='a-name'>
                                <img src={Apple} alt='android' className='brand' />
                                <div className='name'>Apple</div>
                            </div>
                        </div>
                        <div className='a-content'>
                        An App for Students, Advisors and Parents
                        </div>
                    </div>
                </div>
            </div>

            <div className='ps-12'>
                <div className='ps-12-1'>
                <img src={Laptop} alt='laptop' className='laptop'/>
                </div>

                 <div className='ps-12-2'>
                   <div className='paint-image'>
                   <img src={Paint} alt ='paint' className='paint'/>
                   </div>
                   <div className='paint-content'>
                    <h1>Start now</h1>
                    <p>with the Palette Admin tool or integrate with your CRM, LMS or SIS</p>
                   </div>
                 </div>
            </div>
        </div>
    )
}

export default Section2