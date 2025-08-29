import React, { useState } from 'react'

const ResetPassword = () => {

  const [email,setEmail] = useState('')

  return (
    <div className='flex justify-center items-center my-10 '>
      <div className='text-white
      mt-20 p-5 text-center rounded-bl-3xl rounded-tr-3xl bg-slate-500 '>
        <form action="resetPassword" method="post">
          <div>
            <h1 className="text-3xl mb-4">Reset Password</h1>
            <p className="mb-4">Enter your 6-digit OTP sent to your email</p></div>
            <input className='bg-white text-black w-[95%] my-2 p-3 rounded-full border-2 border-black' type="email" placeholder='enter your email'
            value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
          <button className='bg-slate-700 w-[80%] py-2 rounded-full hover:bg-slate-900 border border-black hover:scale-105 cursor-pointer'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
