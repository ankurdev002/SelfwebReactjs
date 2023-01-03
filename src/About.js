import React from 'react';
import './About.css';
import { FaUserGraduate,FaJava} from "react-icons/fa";
import {GoCircuitBoard} from "react-icons/go";
import { HiBuildingLibrary } from "react-icons/hi2";
import { BsCardChecklist } from "react-icons/bs";


const Aboutme = () => {
  return     (
  <div className='container'>
  <div className='overlay'>
  <div className='about'>
    
    
    <ul><h1><span2><FaUserGraduate /></span2>Graduation</h1>
    <li><h2><span2><GoCircuitBoard className='logoss'/> </span2>Bachelor's of Technology</h2></li>
    <li><h2><span2><FaJava className='logoss'/> </span2>Computer Science Engineering</h2></li>
    <li><h2><span2><HiBuildingLibrary className='logoss'/></span2> JB Institue of Technology</h2></li>
    <li><h2><span2><BsCardChecklist className='logoss'/></span2> 78%</h2></li>
    </ul>
    </div>
  </div>
  
  <div className='overlay'>
  <div className='about'>
    
    <ul><h1><span2><FaUserGraduate /></span2> Diploma</h1>
    <li><h2><span2><GoCircuitBoard className='logoss'/> </span2> Diploma in Technology</h2></li>
    <li><h2><span2><FaJava className='logoss'/> </span2> Information Technology</h2></li>
    <li><h2><span2><HiBuildingLibrary className='logoss'/></span2> Government polytechnic Narendra Nagar</h2></li>
    <li><h2><span2><BsCardChecklist className='logoss'/></span2> 74%</h2></li>
    </ul>
  </div>
  </div>

  <div className='overlay'>
  <div className='about'>
    
    <ul><h1><span2><FaUserGraduate /></span2> Intermediate</h1>
    <li><h2><span2><GoCircuitBoard className='logoss'/> </span2>Central Board of Secondary Education</h2></li>
    <li><h2><span2><HiBuildingLibrary className='logoss'/></span2>D.S.B International Public School</h2></li>
    <li><h2><span2><BsCardChecklist className='logoss'/></span2> 50%</h2></li>
    </ul>
  </div>
 </div>

 <div className='overlay'>
  <div className='about'>
    
    <ul><h1><span2><FaUserGraduate /></span2> High School</h1>
    <li><h2><span2><GoCircuitBoard className='logoss'/> </span2>Central Board of Secondary Education</h2></li>
    <li><h2><span2><HiBuildingLibrary className='logoss'/></span2>D.S.B International Public School</h2></li>
    <li><h2><span2><BsCardChecklist className='logoss'/></span2> 58%</h2></li>
    </ul>
  </div>
  </div>
  </div>
  );
  
}

export default Aboutme;