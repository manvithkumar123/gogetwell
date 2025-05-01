import React from 'react'
import "./navbar.css"
import "../../assets/images/images"
import images from '../../assets/images/images'

const Navbar = () => {
  return (
    <div className='navbar' style={{zIndex:"999"}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={images.logo} alt="" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#homeroute">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutroute">
            About Us
          </a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#contactroute">
            Contact Us
          </a>
        </li>
      </ul>
      <form>
        <button>Login</button>
        <button>Get Started</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar

