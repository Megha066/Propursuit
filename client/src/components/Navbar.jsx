import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburgerIcon from '../assets/hamburger.svg'; // ensure it's in src/assets

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-gray-300 w-full p-2 items-center">
        <div>
          <div>
            <img width={200} src="./images/claripath_brain_transparent.svg" alt="" />
          </div>
          <p className="text-xs hidden">
            An AI-driven career insights where your IQ, interests, and passion align with the perfect path.
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-5 font-medium p-5">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Assessment">Assessment</Link></li>
          <li><Link to="/Routetree">Route Tree</Link></li>
          <li><Link to="/Mentorship">Mentorship</Link></li>
          <li><Link to="/login">Sign up</Link></li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={hamburgerIcon} alt="Menu" className="w-8 h-8" />
        </button>
      </div>

      {/* Spacer to push content below navbar */}
      <div className="h-[70px] sm:h-[100px]"></div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[70%] bg-black text-white z-40 p-6 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="text-white text-3xl absolute top-4 right-5"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <ul className="block mt-16 space-y-6 text-lg">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Assessment" onClick={() => setMenuOpen(false)}>Assessment</Link></li>
          <li><Link to="/Routetree" onClick={() => setMenuOpen(false)}>Route Tree</Link></li>
          <li><Link to="/Mentorship" onClick={() => setMenuOpen(false)}>Mentorship</Link></li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Sign up</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
