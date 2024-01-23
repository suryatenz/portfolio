import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <>
      <section id='id' className=''>
        <div className="jk">
        <div className="na">
          <nav className="navbar navbar-expand-lg navbar-dark gap-1 me-10">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-auto me-5">
                <a className="nav-link text-white" href="#id">HOME</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link text-white" href="#fi">PROJECTS</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link text-white" href="#sk">SKILLS</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link text-white" href="#sec">ABOUTME</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-center font-serif text-5xl text-slate-400 px-2 py-2 mt-20 ml-8">
          <h3 className='hh text-red-500 mr-3'>I'am</h3>
          <h3 className=' text-white mr-2'>Eatha</h3> <h3 className='text-red-500 mr-2'>Surya </h3><h3 className='text-white'>Prajyesh</h3>
        </div>
        <div className="flex justify-center ml-11">
        <p className=' text-sm text-red-500'>-- Chair Climate change CII(YUVA) VIIT @ Young Indians <br/> | Python Developer | Aspiring Full stack developer | Aspiring Data science learner</p>
        </div>
        </div>
      </section>
    </>
  )
}
