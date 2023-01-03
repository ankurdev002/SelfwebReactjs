import React from 'react'
import '../App.css';
import { FaDiscord, FaEnvelope, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
   
    <>
      <div className="container">
        <div className="sec aboutme">
          <h2>About Me</h2>
          <p>Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy
            text ever since the 1500s. when an unknown printer 
            took a galley of type and scrambled it to make a type 
            specimen book.</p>
            <ul className="sci">
            <li><a href='https://discord.com/'><FaDiscord className='fa' color='#7289d9' aria-hidden="true"/></a></li>
            <li><a href='https://instagram.com/'><FaInstagram className='fa' color='#d6249f'id="insta" aria-hidden="true"/></a></li>
            <li><a href='https://youtube.com/'><FaYoutube className='fa' color='#FF0000' aria-hidden="true"/></a></li>
            <li><a href='https://linkedin.com/'><FaLinkedinIn className='fa' color='#0A66C2' aria-hidden="true"/></a></li>
            </ul>
        </div>
        <div className="sec quickLinks">
          <h2>Quick Links</h2>
          <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About Me</NavLink></li>
          <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
          <li><NavLink to='/services'>Services</NavLink></li>
          <li><NavLink to='/hireme'>Hire Me</NavLink></li>
          </ul>
        </div>
        <div className="sec contact">
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <span2><FaMapMarkerAlt color='red' aria-hidden="true"/></span2>
              <span2>Herbertpur Vikas Nagar<br/>
              Dehradun, UK 248142,<br/>INDIA</span2>
            </li>
            <li>
              <span2><FaPhoneAlt aria-hidden="true"/></span2>
              <p><a href='tel:12345678900'>+917017885037</a></p>
            </li>
            <li>
              <span2><FaEnvelope color='#EA4335'aria-hidden="true"/></span2>
              <p><a href='maito:ankursaini795@gmail.com'>ankursaini795@gmail.com</a></p>
            </li>
          </ul>
        </div>
      </div>
      <div className="date">
              <p>
                @{new Date().getFullYear()} AnkurDev. All Rights Reserved
              </p>
              </div>
     </>

  )
}

export default Footer;