import React from 'react'
import "./about.css"
import images from '../../assets/images/images'

const About = () => {
  return (
    <div>
      <div className="aboutpage">
        <div className="about_background">
            <img src={images.frame} alt="" id='frame'/>
            <img src={images.aboutgif} alt="" id='about_gif'/>
        </div>
        <div className="text_background">
            <h2 style={{textDecoration:"underline purple"}}>About Us</h2>
            <p style={{marginTop:"20px"}}>We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. <br />By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.</p>
            <p>Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.</p>
            <button id='about_button'><img src={images.thunder} alt="" id='logos'/><span>Modern Solutions<p style={{marginTop:"5px"}}>Leveraging AI technology for healthcare</p></span></button>
            <button id='about_button'><img src={images.people} alt="" id='logos' />Patient-Centric <p style={{marginTop:"5px"}}>Personalized healthcare experiences</p></button>
        </div>


      </div>
    </div>
  )
}

export default About
