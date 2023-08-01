import React from 'react'
import { HashLink as Link } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

export default function home() {
  return (
    <main className='home' id='home'>
      <section className='headings'>
      <h1 className='heading1'>Welcome</h1>
      <h1 className='heading2 '>I am </h1>
       <h1 className='heading2 h22'> Muhammad Farhan Alam</h1>
      <h2 className='heading3'>Front-end React developer </h2>
       <Link smooth to="#contact"> <button className='btn'>Hire Me</button></Link>
      </section>
     
    </main>
  )
}
