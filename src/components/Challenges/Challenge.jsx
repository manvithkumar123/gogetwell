import React from 'react'
import images from '../../assets/images/images'
import "./challenge.css"

const Challenge = () => {
  return (
    <div>
       <div className="challengepage">
        <div className="challenge_background">
            <img src={images.frame} alt="" id='frame'/>
            <img src={images.challenge} alt="" id='challenge_gif'/>
        </div>
        <div className="challenge_text_background">
            <h2 style={{textDecoration:"underline purple"}}>The Challenges We Solve</h2>
            <p style={{marginTop:"20px"}}>Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.</p>
            <p>Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.</p>
            <button id='about_button'><img src={images.thunder} alt="" id='logos'/><span>Efficient Operations
            <p style={{marginTop:"5px"}}>Streamlined booking and management</p></span></button>
            <button id='about_button'><img src={images.people} alt="" id='logos' />Enhanced Support<p style={{marginTop:"5px"}}>Improved patient communication</p></button>
        </div>


      </div>
    </div>
  )
}

export default Challenge
