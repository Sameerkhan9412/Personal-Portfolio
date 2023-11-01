import React from 'react'
import {FiInstagram,FiFacebook,FiTwitter} from 'react-icons/fi'
import './footer.css'
const Footer = () => {
  return (
    <footer className=''>
      <a href="#" className='footer_logo'>Sameer Khan</a>
      <ul className='permalinks'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FiFacebook/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Sameer Khan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer