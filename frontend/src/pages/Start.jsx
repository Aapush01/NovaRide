import React from 'react'
import NovaRide_logo from '../assets/NovaRide_logo.webp'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-custom-bg bg-cover object-contain bg-center h-screen pt-8  flex justify-between flex-col w-full'>
      <img className='w-20 ml-8 rounded-full' src={NovaRide_logo} alt="NoraRide_logo" loading="lazy" />
      <div className='bg-white py-4 px-4 pb-5'>
        <h2 className='text-[30px] text-center font-bold '>Get Started with NovaRide</h2>
        <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2 font-medium text-lg'>Continue</Link>
      </div>
    </div>
  )
}

export default Start
