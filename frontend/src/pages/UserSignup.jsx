import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div className=''>
      <img className='w-20 mb-2 rounded-full' src="https://files.oaiusercontent.com/file-LDiGuUPyYcgY1qUEbgGkQS?se=2024-12-01T15%3A51%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D59ab5e02-66b4-4f64-8839-510abb7ad9a5.webp&sig=ytbTH7d5/uOAQfVR7N9I2YjljJeFUDpc0gYUKoHetAU%3D" alt="NoraRide_logo" />
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
      <h3 className='text-xl mb-2'>What is your name?</h3>
      <div className='flex gap-2'>
      <input
        required 
        className='bg-[#efefef] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        type="text" 
        placeholder='First Name' 
      />
      <input
        required 
        className='bg-[#efefef] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        type="text" 
        placeholder='Last Name' 
      />
      </div>
      <h3 className='text-xl mb-2'>What is your email ?</h3>
      <input
        required 
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className='bg-[#efefef] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="email" 
        placeholder='your@gmail.com' 
      />
      <h3 className='text-xl mb-2'>Enter Password</h3>
      <input
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        className='bg-[#efefef] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="password" 
        placeholder='password' 
      />
      <button
         className='bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-base'
      >
         Signup
      </button>
        <p
         className='text-center'
        >
          Already have an account ? 
          <Link
            to={'/login'}
            className='pl-1 text-blue-600'
          >
             Login
          </Link>
        </p>
      </form>
      </div>
      <div>
        <Link
          to={'/captain-signup'}
          className='bg-[#af8a4fe9] flex items-center justify-center text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg'
        >
          Signup as a Captain
        </Link>
      </div>
    </div>
  )
}

export default UserSignup
