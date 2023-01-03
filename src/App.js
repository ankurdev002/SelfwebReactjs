import React from 'react'
import Navbar from './component/Navbar';
import './App.css';
import Mainsec from './component/Mainsec';
import Footer from './component/Footer';
import Aboutme from './About';
import Portfoliodes from './Portfolio';
import { Routes , Route } from "react-router-dom";
import Service from './Service';
import Hireme from './Hireme';



const Home =()=>{
  return(
    <div className='background'>

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      
       <Navbar />  
      
       <Mainsec />
       <footer>
       <Footer />
       </footer>
     </div>
   
  );
};


const About =()=>{
  return(
    <div className='background'>

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      
       <Navbar />  
      
       <Aboutme/>
       <footer>
       <Footer />
       </footer>
     </div>
   
  );
};

const Portfolio =()=>{
  return(
    <div className='background'>

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      
       <Navbar />  
      
       <Portfoliodes />
       <footer>
       <Footer />
       </footer>
     </div>
   
  );
};

const Services =()=>{
  return(
    <div className='background'>

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      
       <Navbar />  
      
       <Service />
       <footer>
       <Footer />
       </footer>
     </div>
   
  );
};

const Hire =()=>{
  return(
    <div className='background'>

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      
       <Navbar />  
      
       <Hireme />
       <footer>
       <Footer />
       </footer>
     </div>
   
  );
};




const App = () => {
  return  <Routes>

    <Route path="/portfolio" element={<Portfolio/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/hireme" element={<Hire/>} />
  

    </Routes>;
  
};





export default App;
