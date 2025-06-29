import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { AppContent } from '../context/appContext';
import axios from 'axios'
import { toast } from 'react-toastify';

function UserLogin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  //state variables-->
  const navigate = useNavigate();

  const pass = watch("password");


  const [state, setState] = useState('Sign Up');

  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent)


  const submitHandler = async (formData) => {

    try {

      axios.defaults.withCredentials = true;

      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/auth/register', {
          name: formData.username,
          email: formData.email,
          password: formData.password,
        })

        if (data.success) {
          alert("Logged in successfully");
          setIsLoggedin(true);
          getUserData();
          navigate('/');
        } else {
          console.log("Login failed:", data.message);
          toast.error(data.message)
        }
      }
      else {
        const { data } = await axios.post(backendUrl + '/api/auth/login', {
          email: formData.email,
          password: formData.password,
        })

        if (data.success) {
          alert("Logged in successfully");
          setIsLoggedin(true);
          getUserData();
          navigate('/');
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }

  }


  return (
    <>
      <div className='flex justify-center items-center my-10 '>
        <div className='bg-green-200 w-100 p-5 border-2 border-black rounded-lg'>

          {/* Form */}
          <form onSubmit={handleSubmit(submitHandler)}>
            <h1 className='text-3xl font-bold font-serif text-center'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h1>
            <p className='text-center p-3'>{state === 'Sign Up' ? '..Create New Account..' : '..Login to your Existing Account..'}</p>
            <div className='m-5'>

              {/* Username on;y for sign up */}
              {state === 'Sign Up' && (
                <div className='text-left m-2'>
                  <label>Username
                    <input type="text" {...register("username", { required: { value: true, message: "required" }, minLength: { value: 3, message: "min lenght is 3" }, maxLength: { value: 25, message: "max lenght is 25" } })} name='username' placeholder='enter your Username' className='border-2 p-1 rounded-lg w-72 ' />
                    {errors.username && <div className='text-red-700'>{errors.username.message}</div>}
                  </label>
                </div>
              )}


              {/* Email Address */}
              <div className='text-left m-2'>
                <label>Email Address
                  <input type="text" {...register("email", { required: { value: true, message: "required" }, minLength: { value: 3, message: "min lenght is 3" }, maxLength: { value: 25, message: "max lenght is 25" } })} name='email' placeholder='enter your email id' className='border-2 p-1 rounded-lg w-72 ' />
                  {errors.email && <div className='text-red-700'>{errors.email.message}</div>}
                </label>
              </div>


              {/* Password */}
              <div className='text-left m-2'>
                <label>Password
                  <input type="password" name='password' placeholder='enter your Password' {...register("password", { required: { value: true, message: "required" }, minLength: { value: 3, message: "min lenght is 3" }, maxLength: { value: 10, message: "max lenght is 10" } })} className='border-2 p-1 rounded-lg w-72' />
                  {errors.password && <div className='text-red-700'>{errors.password.message}</div>}
                </label>
              </div>


              {/* Confirm Password */}
              {state === 'Sign Up' && (
                <div className='text-left m-2'>
                  <label>confirm Password
                    <input type="password" name='password' placeholder='confirm Password' {...register("confirm_password", {
                      required: { value: true, message: "required" }, minLength: { value: 3, message: "min lenght is 3" }, maxLength: { value: 10, message: "max lenght is 10" },
                      validate: value => value === pass || "Passwords do not match"
                    })} className='border-2 p-1 rounded-lg w-72' />
                    {errors.confirm_password && <div className='text-red-700'>{errors.confirm_password.message}</div>}
                  </label>
                </div>)}


              {/* Forgot Password */}
              {state === 'Login' && (<Link to="/reset-password"><span className='text-blue-800 text-sm hover:text-blue-950'>Forgot Password?</span></Link>)}
            </div>


            {/* Form submit */}
            <div className='text-center'>
              <button type='submit' className='w-60 bg-blue-800 p-2 rounded-full cursor-pointer text-white hover:scale-105 transition-transform md:scale-110' >
                {state}
              </button>
            </div>
          </form>
          {/* End Of Form */}


          {/* If in Sign up Page switch to Login */}
          {state === 'Sign Up' && (<div className='text-xs flex justify-center items-center p-5 gap-3 '>
            <span>Already Have An Account?</span>
            <button className='text-blue-600 cursor-pointer underline hover:text-blue-800' onClick={() => { setState('Login') }}>Login Here</button>
          </div>)}

          {/* If in Login Page switch to Sign Up */}
          {state === 'Login' &&
            (
              <div className='text-xs flex justify-center items-center p-5 gap-3'>
                <span>Don't Have Account?</span>
                <button className='text-blue-600 cursor-pointer underline hover:text-blue-800' onClick={() => { setState('Sign Up') }}>Sign Up Here</button>
              </div>
            )}
        </div>
      </div>
    </>
  )
}

export default UserLogin
