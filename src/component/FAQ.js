import React, {useState}from 'react'
import FAQImage from './../image/FAQ.png';
const FAQ = () => {
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  const [show2,setShow2]=useState(false);
  function toggle(){
   setShow(!show);
   }
   function toggle1(){
    setShow1(!show1);
    }
    function toggle2(){
      setShow2(!show2);
      }
  return (
    <div className='qustion'>

      <div className='faq'>
        <img src={FAQImage} className='faq-img'/>
      </div>

      <div className='faq-child1'>
        <div className='qustion1'><h3>Who sees what?</h3>
        <button className='qustion1-btn' onClick={toggle}>
        {
          show?<p>-</p>:<p>+</p>}
        </button>
        </div>
        {
          show?<div>
          <p>Anyone in a student's network can see a student's To-Do's and Opportunities. Only you and the people you have chatted with can see your chats. Organizations can see the chats in which their advisors are engaged.

          </p>
        </div>:null
        }
        
      </div>

      <div className='faq-child1'>
        <div className='qustion1'><h3>What do you do with my data?</h3>
        <button className='qustion1-btn'onClick={toggle1}>
        {
          show1?<p>-</p>:<p>+</p>}
        </button>
        </div>
        {
          show1? <div>
          <p>Palette does not sell or market user data. It only receives data provided by a participating organization or provided voluntarily by individuals.
          </p>
        </div>:null
        }
       
        
      </div>

      <div className='faq-child1'>
        <div className='qustion1'><h3>Can my school, college or organization see my chats?</h3>
        <button className='qustion1-btn' onClick={toggle2}>{
          show2?<p>-</p>:<p>+</p>
}</button>
        </div>
        {
          show2?  <div>
          <p>
          Organizations have records of the chats in which their advisors participated.
          </p>
        </div>:null
        }
      
        
      </div>

    </div>
  );
  
}

export default FAQ;