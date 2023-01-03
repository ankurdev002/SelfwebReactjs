import React from 'react'
import './Portfolio.css';
import project from "./images/project.jpg";

const Portfoliodes = () => {
  return (
    <>
    <div className='headingmain'>Projects</div>
    <div class="container1">
    <div class="box box-1">
        <div class="cover"><img src={project} class="sizeimg" alt="" /></div>
        <button><div></div></button>
    </div>
    <div class="box box-2">
        <div class="cover"><img src={project} class="sizeimg" alt="" /></div>
        <button><div></div></button>
    </div>
    <div class="box box-3">
        <div class="cover"><img src={project} class="sizeimg" alt="" /></div>
        <button><div></div></button>
    </div>
    <div class="box box-4">
        <div class="cover"><img src={project} class="sizeimg" alt="" /></div>
        <button><div></div></button>
    </div>

</div>

<a href="https://dribbble.com/YancyMin" class="dr-url" target="_blank"/><img class="dr" src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png" alt="" />
</>
  )
};

export default Portfoliodes;