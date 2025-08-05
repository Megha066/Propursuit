import UserLogin from '/src/pages/UserLogin'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Assessment from './pages/Assessment'
import Routetree from './pages/Routetree'
import ResetPassword from './pages/ResetPassword'
import Mentorship from './pages/Mentorship'      
import { Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Circle from './components/Circle'



function App() {
  return (
    <>
    <ToastContainer/>
      <Navbar />
       
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/Assessment' element={<Assessment/>} />
        <Route path='/Routetree' element={<Routetree/>} />
        <Route path='/Mentorship' element={<Mentorship/>} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
      <Circle/>
      <Footer/>
    </>

  )
}

export default App
