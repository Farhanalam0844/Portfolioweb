import React from 'react'

export default function contact() {
var send =()=>{
setInterval(() => {
  document.getElementById('submit').style.display="none";
}, 2000);
document.getElementById('submit').style.display="block";
}  
  return (
    <>
    <div className='contact' id='contact'>
      <h1 className='heading'>Contact Me</h1>
    <div >
      <section className="sec1">
        <h2 className='head'> Address</h2>
        <ul>
          <li>Muridke</li>
          <li>Rehmanpure</li>
          <li> <a href='/' className="phone-icon">&#9742;</a> 03187592869
    </li>
          <li><a className="email-icon" href="mailto:contact@example.com">&#9993;</a>farhanalam0407@gmail.com</li>
        </ul>
        <h2 className='head'>Follow Me</h2>
        <ul className="list2">              
                    <li className="fb"><a href="https://www.facebook.com/farhanalam0844/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                    <li className="Li"><a href="https://www.linkedin.com/in/muhammad-farhan-alam-2a77a8236/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li className="Gh">  <a href="https://github.com/Farhanalam0844" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
</li>
                   <li> <a href="https://twitter.com/farhanalam0844" target="_blank" rel="noreferrer"> <i className="fab fa-twitter"></i></a></li>

                </ul>
          
      </section>
      <section className="sec2">
        <form action="message" method='post'></form>
        <div className="namemail">
          <input className='name' type="name" placeholder='Name' />
          <input className='email' type="email" placeholder='abc@gmail.com' />
        </div>
        <textarea className='text' type="text" placeholder='write the message' rows={7}  />
        <div>
        <button onClick={send} className='btn'>Send Message</button>
        <p id='submit'>Response has been submitted</p>
        </div>
      </section>
      </div>
    </div>
    <div className="wrapper">
      </div>      

    </>
  )
}
