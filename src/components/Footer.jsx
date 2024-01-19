import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white text-center py-3">
        <br />
      <div className="flex justify-center mb-4">
        <a href="https://www.instagram.com/surya_tenz/" className="mx-2">
          <FaInstagram className="text-white hover:text-blue-400 transition text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/surya-prajyesh-3053ab253/" className="mx-2">
          <FaLinkedin className="text-white hover:text-blue-400 transition text-2xl" />
        </a>
        <a href="https://github.com/suryatenz" className="mx-2">
          <FaGithub className="text-white hover:text-blue-400 transition text-2xl" />
        </a>
        <a href="mailto:sprajyesh@gmail.com" className="mx-2">
          <FaEnvelope className="text-white hover:text-blue-400 transition text-2xl" />
        </a>
        <a href="tel:+916300741147" className="mx-2">
          <FaPhone className="text-white hover:text-blue-400 transition text-2xl" />
        </a>
      </div>
      <hr/>
      <p className="mb-0 pt-3">All rights reserved &copy; 2023</p>
    </footer>
    </div>
  )
}
