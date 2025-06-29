import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="top-0 left-0 right-0 z-50 flex justify-between bg-gray-300 w-full p-5">
      <div>
        <p className="text-4xl font-serif">PROPURSUIT</p>
        <p className='text-xs'>An AI-driven career insights where your IQ, interests, and passion align with the perfect path.
        </p>
      </div>
      <div>
        <ul className='flex gap-5'>
          <Link to="/" ><li>Home</li></Link>
          <Link to="/Assessment" ><li>Assessment</li></Link>
          <Link to="/Routetree" ><li>Route Tree</li></Link>
          <Link to="/Mentorship" ><li>Mentorship</li></Link>
          <Link to="/login" ><li>Sign up</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
