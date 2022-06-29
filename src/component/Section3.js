import React from 'react'
import BigThought from './../image/BigThought.jpg';
import Alice from './../image/alice.png';
import Jenifer from "./../image/jennifer.png"
const Section3 = () => {
  return (
    <div className='palette-content-2'>
      <div className='cover-blue blue1'>
        <div className='ps3-21'>

          <img src={BigThought} alt='Big Thought' className='big-thought' />
          <div className='ps3-22'>
            <p>Palette provides the space for our Champions to engage their scholars and view their tasks and available resources.</p>

            <h2>Porcsha,<a href='#'> BigThought</a></h2>
          </div>

        </div >
      </div>

      <div className='orange-container'>
        <div className='Testimonials'>
          <div className='para'>
          <p><p>Testimonials</p>
            In Their Words</p>
          </div>
        

        </div>

        <div className='cover-blue blue'>
        <div className='ps3-21'>

          <img src={BigThought} alt='Big Thought' className='big-thought' />
          <div className='ps3-22'>
            <p>Palette provides the space for our Champions to engage their scholars and view their tasks and available resources.</p>

            <h2>Porcsha,<a href='#'> BigThought</a></h2>
          </div>

        </div >
      </div>


        <div className='cover-orange'>
          <div className='ps3-21'>

            <img src={Alice} alt='image' className='alice' />
            <div className='ps3-22'>
              <p>I can better manage my kids' extracurriculars and make sure they're doing the things they need to do to be successful.</p>

              <h2 >Alice, Parent</h2>
            </div>

          </div>
        </div>


        <div className='cover-green green'>
        <div className='ps3-21'>

          <img src={Jenifer} alt='Big Thought' className='big-thought' />
          <div className='ps3-22'>
            <p>Palette helps me know what I need to do to take the next step. It combines advisors and services with my family and friends.</p>

            <h2>Jennifer, Student</h2>
          </div>

        </div >
      </div>
      </div>
      <div className='cover-green green1'>
        <div className='ps3-21'>

          <img src={Jenifer} alt='Big Thought' className='big-thought' />
          <div className='ps3-22'>
            <p>Palette helps me know what I need to do to take the next step. It combines advisors and services with my family and friends.</p>

            <h2>Jennifer, Student</h2>
          </div>

        </div >
      </div>
    </div>
  );
}

export default Section3;