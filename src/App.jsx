import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"



function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  // const [count, setCount] = useState(0)
  const [info, setinfo] = useState({ email: '', password: '' })

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className='bg-white w-100 p-5 border-2 border-black'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-black font-bold font-serif'>Login</h1>
          <div className='m-5'>
            <div className='text-left'>
              <label>Email Address

                <input type="text" {...register("email", { required: { value: true, message: "required" }, minLength: { value: 3, message: "min lenght is 3" }, maxLength: { value: 25, message: "max lenght is 25" } })} name='email' placeholder='enter your email id' className='border-2 p-1 rounded-lg w-72 ' />
                {errors.email && <div className='text-red-700'>{errors.email.message}</div>}

              </label>
            </div>
            <div className='text-left'>
              <label className=''>Password
                <input type="password" name='password' placeholder='enter your Password' {...register("password", { required: { value: true, message: "required" }, minLength: { value: 3, message: "min lenght is 3" }, maxLength: { value: 10, message: "max lenght is 10" } })} className='border-2 p-1 rounded-lg w-72' />
                {errors.password && <div className='text-red-700'>{errors.password.message}</div>}
              </label>
            </div>
          </div>
          <div>
            <button className='w-60' >
              <input type="submit" />
            </button>
          </div>
        </form>
        <div className='flex justify-between p-5'> 
          <span>Forgot Password?</span>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default App
