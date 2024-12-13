import React, { useState, useContext } from 'react'
import NovaRide_logo from '../assets/NovaRide_logo.webp'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({})

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div className=''>
        {/* <img className='w-20 mb-2 rounded-full absolute left-5 top-5' src={NovaRide_logo} alt="NovaRide_logo" /> */}
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
            Create Account
          </button>
          <p
            className='text-center'
          >
            Already have an account ?
            <Link
              to={'/login'}
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

export default UserSignup
