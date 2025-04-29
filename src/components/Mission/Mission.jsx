import React from 'react'
import images from '../../assets/images/images'
import "./mission.css"

const Mission = () => {
  return (
    <div>
        <div className="missionpage">
        <div className="text_background">
            <h2 style={{textDecoration:"underline purple"}}>Our Mission</h2>
            <p style={{marginTop:"20px"}}>Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.</p>
            <p>We strive to become the leading platform for healthcare tourism management and digital transformation.</p>
            <button id='about_button'><img src={images.thunder} alt="" id='logos'/><span>AI-Powered Solutions
            <p style={{marginTop:"5px"}}>Optimizing operations with advanced technology</p></span></button>
            <button id='about_button'><img src={images.people} alt="" id='logos' />Growth Focus
             <p style={{marginTop:"5px"}}>Maximizing revenue and opportunities</p></button>
        </div>
        <div className="mission_background">
            <img src={images.frame} alt="" id='frame'/>
            <img src={images.mission} alt="" id='mission' />
        </div>


      </div>
    </div>
  )
}

export default Mission
