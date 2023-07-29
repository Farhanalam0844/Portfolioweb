import React from 'react'
export default function resume() {
  return (
    <>   
     <div className='resume' id='resume'>
      <h1 className="heading1">
        Resume
      </h1>
      <section className="education">
      <h1>Education</h1>
        <article className="college">
        <p className='year'>2017-2019</p>
        <h1><strong> I.Cs </strong></h1>
        <h6>(Intermediate in Computer Science)</h6>
        <h2>Government University Lahore <strong> (GCU)</strong></h2>
        <p>
        I did my intermediate in Computer Science from Government College University Lahore.</p>
        </article>
        
        <article className="university">
        <p className='year'>2021-2025(continued)</p>
        <h1> <strong>BSCS</strong> </h1>
        <h6>(Bachelors in Computer Science)</h6>
        <h2>Quaid e Azam University Isalambad <strong> (QAU)</strong></h2>
        <p>I am pursuing Bachelors in Computer Science from Quaid e Azam University Islamabad.</p>
        </article>
        
      </section>
      <section className='experience'>
        <h1>Experience</h1>
         <article className="college">
        <p className='year'>2021-2023</p>
        <h1><strong> Fiverr </strong></h1>
        <h6>React developer</h6>
        <p>Front-end developer using React.js javaScript HTML5 & CSS3</p>
        </article>
        <article className="university">
        <p className='year'>2023-2023(continued)</p>
        <h1><strong>Dot Software House</strong> </h1>
        <h6> Lahore</h6>
        <p>Front-end developer SEO and content writer</p>
        </article>



      </section>
    </div>
    </>

  )
}
