import React from 'react'
import cv from '../images/my-cv_1.pdf'

export default function about() {
  
  return (
    <div className="about" id='about'>     
      <div className='aboutpara section'>
        <h3 className='heading3'>
          Know Me More
        </h3>
        <hr />
      <div className='sections'>
        <h2>Front end web developer with latest technologies <strong> React.js javaScript </strong></h2>
      <p>
I am passionate about creating dynamic and user-friendly websites that deliver exceptional user experiences. With expertise in HTML, CSS, and JavaScript, I am eager to leverage my front-end development skills to contribute to innovative web solutions. I am committed to staying updated with the latest technologies and best practices to ensure cutting-edge and responsive web developm</p>
      </div>
      <div className='section'>
      <ul>
        <li>Name : <strong> Muhammad Farhan Alam</strong></li>
        <li>Email : <strong> <a href="/" target='_blank'> farhanalam0407@gmail.com </a></strong></li>
        <li>Age : 20</li>
        <li>From : <strong> Muridke, Pakistan </strong></li>
      </ul>
     <a href={cv} download='resume'><button className='btn'>Download CV</button></a> 
      </div>
      </div>
    </div>
  )
}
