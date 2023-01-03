import React from 'react';
import '../App.css';
import shape from '../images/shape.png';
import pic from "../images/pic.png"

const Mainsec = () => {
  return (
    <div className="detail">
    <h1>I'm Ankur <span1 className="style">Saini</span1></h1>
    <p>This is my portfolio website to show my all
        <br/>Details & Work Experience
        </p>
        <a href="#" className="button">DOWNLOAD MY CV</a>
        <div className="images">
          <img src={shape} className="shape"/>
          <img src={pic} className="imagemain"/>
        </div>
</div>



  )
}

export default Mainsec;