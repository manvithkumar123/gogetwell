import React from 'react'
import "./information.css"
import images from '../../assets/images/images'

const Information = () => {
  return (
    <div>
      <div className="information_page">
        <div className="information_box">
        <div className="slider" style={{ '--width': '400px', '--height': '200px', '--quantity': '5' }}>
  <div className="list">
    <div className="info_cards" style={{ '--position': '1',borderBottomColor:"blue" }}>
      <img src={images.aipower} alt=""  id="logos"/>
      <h4>Custom AI-Powered Website</h4>
      <p>Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.</p>
    </div>
    <div className="info_cards" style={{ '--position': '2',borderBottomColor:"green" }}>
    <img src={images.enchanced} alt=""  id="logos"/>
      <h4>Enhanced Patient Conversion</h4>
      <p>Smart conversion optimization tools to turn visitors into patients with personalized experiences.</p>
    </div>
    <div className="info_cards" style={{ '--position': '3',borderBottomColor:"violet" }}>
    <img src={images.realtime} alt=""  id="logos"/>
      <h4>Real-Time Query Handling</h4>
      <p>Instant response system for patient inquiries with AI-powered chat support.</p>
    </div>
    <div className="info_cards" style={{ '--position': '4' ,borderBottomColor:"orange"}}>
    <img src={images.medical} alt=""  id="logos"/>
      <h4>Medical Report Analysis</h4>
      <p>Advanced AI analysis of medical reports for quick and accurate patient assessments.</p>
    </div>
    <div className="info_cards" style={{ '--position': '5' }}>
    <img src={images.improved} alt=""  id="logos"/>
      <h4>Improved Lead Generation</h4>
      <p>Data-driven lead generation strategies to attract and engage potential patients.</p>
    </div>
  </div>
</div>
<div className="slider" style={{ '--width': '400px', '--height': '200px', '--quantity': '4' }}>
  <div className="list">
    <div className="info_cards" style={{ '--position': '1',borderBottomColor:"purple" }}>
      <img src={images.comprehensial} alt=""  id="logos"/>
      <h4>Comprehensive Healthcare Database</h4>
      <p>Extensive medical information database for accurate patient guidance and support.</p>
    </div>
    <div className="info_cards" style={{ '--position': '2' ,borderBottomColor:"cyan"}}>
    <img src={images.multilingual} alt=""  id="logos"/>
      <h4>Multilingual Support</h4>
      <p>Breaking language barriers with comprehensive multilingual communication tools.</p>
    </div>
    <div className="info_cards" style={{ '--position': '3', borderBottomColor:"navyblue"}}>
    <img src={images.seamless} alt=""  id="logos"/>
      <h4>Seamless Payment Handling</h4>
      <p>Secure and efficient payment processing for medical services globally.</p>
    </div>
    <div className="info_cards" style={{ '--position': '4',borderBottomColor:"yellow" }}>
    <img src={images.marketing} alt=""  id="logos"/>
      <h4>Marketing And SEO Support</h4>
      <p>Optimized digital presence with advanced SEO and marketing strategies.</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Information
