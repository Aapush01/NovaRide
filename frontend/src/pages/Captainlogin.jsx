import NovaRide_logo from '../assets/NovaRide_logo.webp'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';


const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        {/* <img className='w-20 mb-2 rounded-full absolute left-5 top-5' src={NovaRide_logo} alt="NovaRide_logo" /> */}
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-xl mb-2'>What is your Email?</h3>
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
            Login as a Captain
          </button>
          <p
            className='text-center'
          >
            New here ?
            <Link
              to={'/captain-signup'}
              className='pl-1 text-blue-600'
            >
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={'/login'}
          className='bg-[#af8a4fe9] flex items-center justify-center text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg'
        >
          Login as a user
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin
