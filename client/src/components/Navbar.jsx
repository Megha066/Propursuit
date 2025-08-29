// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import hamburgerIcon from '../assets/hamburger.svg'; // ensure it's in src/assets
// import { AppContent } from '../context/appContext';
// import axios from 'axios';



// // const showDetails = () => {
// //   return (
// //     <div className="absolute top-12 right-0 bg-white shadow-md rounded p-2 z-10">
// //       <ul className="space-y-2">
// //         <li
// //           className="cursor-pointer hover:bg-gray-200 p-2 rounded"
// //           onClick={logout}
// //         >
// //           Logout
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };


// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate=useNavigate();
//   const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);

//   const logout= async () => {
//   try {
//     axios.defaults.withCredentials=true;
//     const {data}=await axios.post(backendUrl + '/api/auth/logout');
//     data.success && setIsLoggedin(false)
//     data.success && setUserData(false)
//     navigate('/')
//   } catch (error) {
//     toast.error(error.message);
//   }
// }

// const showDetails = () => {
//   return (
//     <div className="absolute top-12 right-0 bg-white shadow-md rounded p-2 z-10">
//       <ul className="space-y-2">
//         <li
//           className="cursor-pointer hover:bg-gray-200 p-2 rounded"
//           onClick={logout}
//         >
//           Logout
//         </li>
//       </ul>
//     </div>
//   );
// };
//   return (
//     <>
//       {/* Main navbar */}
//       <div className="fixed top-0 left-0 right-0 z-50 flex justify-between shadow bg-white w-full px-2 items-center">
//         <div>
//           <div>
//             <img width={190} src="./images/claripath_brain_transparent.svg" alt="" />
//           </div>
//           <p className="text-xs hidden">
//             An AI-driven career insights where your IQ, interests, and passion align with the perfect path.
//           </p>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="justify-center items-center hidden sm:flex gap-5 font-medium p-5">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/Assessment">Assessment</Link></li>
//           <li><Link to="/Routetree">Route Tree</Link></li>
//           <li><Link to="/Mentorship">Mentorship</Link></li>
//           {userData ? (
//     <li className="relative">
//       <div
//         className="w-10 h-10 text-xl my-soul-regular text-white bg-blue-400 rounded-full flex justify-center items-center cursor-pointer"
//         onClick={() => setShowDropdown(prev => !prev)}
//       >
//         {userData.name[0].toUpperCase()}
//       </div>
//       {showDropdown && showDetails()}
//     </li>
//   ) : (
//     <li><Link to="/login">Sign up</Link></li>
//   )}
//         </ul >

//         {/* Hamburger Icon for Mobile */}
//         < button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)
//         }>
//           <img src={hamburgerIcon} alt="Menu" className="w-8 h-8" />
//         </button >
//       </div >

//       {/* Spacer to push content below navbar */}
//       < div className="h-[70px] sm:h-[100px]" ></div >

//       {/* Mobile Sidebar */}
//       < div
//         className={`md:hidden fixed top-0 left-0 h-full w-[70%] bg-black text-white z-40 p-6 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//       >
//         <button
//           className="text-white text-3xl absolute top-4 right-5"
//           onClick={() => setMenuOpen(false)}
//         >
//           &times;
//         </button>
//         <ul className="block mt-16 space-y-6 text-lg">
//           <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//           <li><Link to="/Assessment" onClick={() => setMenuOpen(false)}>Assessment</Link></li>
//           <li><Link to="/Routetree" onClick={() => setMenuOpen(false)}>Route Tree</Link></li>
//           <li><Link to="/Mentorship" onClick={() => setMenuOpen(false)}>Mentorship</Link></li>
//           <li><Link to="/login" onClick={() => setMenuOpen(false)}>Sign up</Link></li>
//         </ul>
//       </div >
//     </>
//   );
// }

// export default Navbar;
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // ⬅️ using NavLink instead of Link
import hamburgerIcon from '../assets/hamburger.svg';
import { AppContent } from '../context/appContext';
import axios from 'axios';
import { toast } from 'react-toastify'; // if using toast

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);

  const logout = async () => { 
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + '/api/auth/logout');
      if (data.success) {
        setIsLoggedin(false);
        setUserData(false);
        navigate('/');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const showDetails = () => (
    <div className="absolute top-12 right-0 bg-white shadow-md rounded p-2 z-10">
      <ul className="space-y-2">
        <li
          className="cursor-pointer hover:bg-gray-200 p-2 rounded"
          onClick={logout}
        >
          Logout
        </li>
      </ul>
    </div>
  );

  return (
    <>
      {/* Main navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between shadow bg-white w-full px-2 items-center">
        <div className='cursor-pointer' onClick={() => navigate("/")}>
          <img width={190} src="./images/claripath_brain_transparent.svg" alt="" />
        </div>

        {/* Desktop Menu */}
        <ul className="justify-center items-center hidden sm:flex gap-5 font-medium p-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Routetree"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }
            >
              Route Tree
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Assessment"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }
            >
              Assessment
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Mentorship"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }
            >
              Mentorship
            </NavLink>
          </li>
          {userData ? (
            <li className="relative">
              <div
                className="w-10 h-10 text-xl my-soul-regular text-white bg-blue-400 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                {userData.name[0].toUpperCase()}
              </div>
              {showDropdown && showDetails()}
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-500"
                }
              >
                Sign up
              </NavLink>
            </li>
          )}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={hamburgerIcon} alt="Menu" className="w-8 h-8" />
        </button>
      </div>

      {/* Spacer */}
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
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Routetree"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
              }
              onClick={() => setMenuOpen(false)}
            >
              Route Tree
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Assessment"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
              }
              onClick={() => setMenuOpen(false)}
            >
              Assessment
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Mentorship"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
              }
              onClick={() => setMenuOpen(false)}
            >
              Mentorship
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
              }
              onClick={() => setMenuOpen(false)}
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;