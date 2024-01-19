import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <>
      <section>
        <div className="jk">
        <div className="na">
          <nav className="navbar navbar-expand-lg navbar-dark gap-2 me-40">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-auto me-5">
                <a className="nav-link text-white" href="/">HOME</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link text-white" href="/">ABOUTME</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link text-white" href="/">PROJECTS</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link text-white" href="/">GAMES</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ti font-serif text-5xl text-slate-400">
          <h3 className='hh text-red-700'>I'am</h3>
          <h3>Eatha Surya Prajyesh</h3>
          <br />
          <p className=' text-sm text-red-500'>-- CSE student from VIIT</p>
          <br /><br /><br /><br /><br /><br/>
        </div>
        </div>
      </section>
    </>
  )
}
