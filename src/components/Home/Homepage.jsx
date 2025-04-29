import React from 'react'
import "./home.css"
import images from '../../assets/images/images'

const Homepage = () => {
  return (
    <div>
        <div className="introductionpage">
            <div className="introductioncontainer">
            <h1
  style={{fontFamily: '"Plain Regular", "Plain Regular Placeholder", sans-serif',
    fontSize: '64px',
    letterSpacing: '-0.04em',
    lineHeight: '100%',
    textAlign: 'center',
    color: 'rgb(0, 0, 0)',}}
>
  AI front office <br />for healthcare agents
</h1>
<p
  style={{
    fontFamily: '"Plain Light", "Plain Light Placeholder", sans-serif',
    lineHeight: '140%',
    textAlign: 'center',
    color: 'rgb(128, 128, 128)',
    fontSize: '18px',
  }}
>
Create AI Store in 2 min Scale with Digital Marketing
</p>
<button style={{width:"150px",backgroundColor:"rgb(0,33,204)"}}>Get Started</button>
<div className="card_container">
    <div className="card"><h2>2100+</h2><p>qualified doctors</p></div>
    <div className="card"><h2>1000+</h2><p>qualified doctors</p></div>
    <div className="card"><h2>800+</h2><p>Treatment Plans</p></div>
</div>
</div>
<div className="image_background">
    <video src={images.video} autoPlay muted playsInline loop id='videointromy'></video>
</div>
        </div>
    </div>
  )
}

export default Homepage
