import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-custom-bg bg-cover object-contain bg-center h-screen pt-8  flex justify-between flex-col w-full'>
      <img className='w-20 ml-8 rounded-full' src="https://files.oaiusercontent.com/file-LDiGuUPyYcgY1qUEbgGkQS?se=2024-12-01T15%3A51%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D59ab5e02-66b4-4f64-8839-510abb7ad9a5.webp&sig=ytbTH7d5/uOAQfVR7N9I2YjljJeFUDpc0gYUKoHetAU%3D" alt="NoraRide_logo" loading="lazy" />
      <div className='bg-white py-4 px-4 pb-5'>
        <h2 className='text-[30px] text-center font-bold '>Get Started with NovaRide</h2>
        <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2 font-medium text-lg'>Continue</Link>
      </div>
    </div>
  )
}

export default Start
