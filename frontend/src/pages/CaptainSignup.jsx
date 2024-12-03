import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
    setFirstName('');
    setLastName('');
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
      <h3 className='text-base font-medium mb-2'>What is your name?</h3>
      <div className='flex gap-2'>
      <input
        required 
        className='bg-[#efefef] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
        type="text" 
        placeholder='First Name' 
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value)
        }}
      />
      <input
        required 
        className='bg-[#efefef] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
        type="text" 
        placeholder='Last Name' 
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value)
        }}
      />
      </div>
      <h3 className='text-base font-medium mb-2'>What is your email ?</h3>
      <input
        required 
        className='bg-[#efefef] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
        type="email" 
        placeholder='your@gmail.com' 
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <h3 className='text-base font-medium mb-2'>Enter Password</h3>
      <input
        required
        className='bg-[#efefef] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
        type="password" 
        placeholder='password' 
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <button
         className='bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-sm'
      >
         Create account as a Captain 
      </button>
        <p
         className='text-center'
        >
          Already have an account ? 
          <Link
            to={'/captain-login'}
            className='pl-1 text-blue-600'
          >
             Login here
          </Link>
        </p>
      </form>
      </div>
      <div>
       <p className='text-[10px] leading-tight font-normal'>By proceeding, you consent to receive emails, including automated ones, from NovaRide and its affiliates at the email address provided.</p>
      </div>
       
    </div>
  )
}

export default CaptainSignup
