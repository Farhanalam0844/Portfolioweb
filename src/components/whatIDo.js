import React from 'react'
import cv from '../images/my-cv_1.pdf'
export default function whatIDo() {

  return (
    <>
    <div className="whatido" id='skills'>
    <div>
     <h1 className='heading'> My Skills</h1>
<ul>
  <li >
    <span className="sweb">
    Web design
    </span>
    
    <hr className='web' />
    <span>90%</span>
    
  </li>
  <li>
    <span className="shtml">

    HTML & CSS
    </span>
    <hr className='html' />
    <span>95%</span>
  </li>
  <li>
    <span className="sjs">

    javaScript 
    </span>
    <hr className='js' />
    <span>80%</span>
  </li>
  <li>
    <span className="sreact">

    React.js 
    </span>
    <hr className='react' />
    <span>80%</span>
  </li>
  <li>
    <span className="sseo">

    SEO
    </span>
    <hr className='seo' />
    <span>70%</span>
  </li>
  <li>
    <span className="sdm">

    Digital Marketing
    </span>
    <hr className='dm' />
    <span>60%</span>
  </li>
</ul>
<a href={cv} download="resume"><button className='btn'>Download CV</button></a> 

    </div>
    </div>
    </>
  )
}
