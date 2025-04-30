import React from 'react'
import "./contact.css"
import images from '../../assets/images/images'

const Contact = () => {
  return (
    <div>
      <div className="demo">
        <div className="contact_text_container">
        <h1>Let's get in <span style={{textDecoration:"underline purple"}}>touch! </span></h1>
        <p style={{opacity:"40%"}}>Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.</p>
        <button id='Phone'><img src={images.phone} alt="" id='logos'/><div className="btn_container"><p>phone <br />+91 9811396858</p></div></button>
        <button id='email'><img src={images.email} alt="" id='logos' /><div className="btn_container"><p>Email <br />hello@gogetwell.ai</p></div></button>
        <div className="links_container">
        <h4>Connect With Us</h4>
        <img src={images.x} alt="" id='logos' />
        <img src={images.linkdein} alt="" id='logos'/>
        </div>
        </div>
            <div className="form_container">
            <div className="input_with_icon">
                <div className="icon"> <i className="fa-solid fa-user"></i></div>
           <input type="text" placeholder="Full Name" /></div>
           <div className="input_with_icon">
                <div className="icon"><i class="fa-solid fa-envelope"></i></div>
           <input type="text" placeholder="EMail Id" /></div>
                <input type="text" id='message_input' placeholder='Message' />
                <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
