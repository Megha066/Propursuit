import React from 'react'

const ResetPassword = () => {
  return (
    <div className='flex justify-center items-center my-10 '>
      <div className='w-100 text-white
     flex flex-col justify-center items-center mt-20 p-2 h-50 bg-blue-500'>
        <form action="resetPassword" method="post">
          <div><h1 className="text-center text-3xl mb-4">Reset Password</h1>
            <p>Enter your 6-digit OTP sent to your email</p></div>
            <input  className='m-5 p-3 rounded-full border-2 border-black' type="email" placeholder='enter your email'/>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
