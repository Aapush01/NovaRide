import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
    if(response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    setEmail('');
    setPassword('');
    
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-20 mb-2 rounded-full' src="https://files.oaiusercontent.com/file-LDiGuUPyYcgY1qUEbgGkQS?se=2024-12-01T15%3A51%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D59ab5e02-66b4-4f64-8839-510abb7ad9a5.webp&sig=ytbTH7d5/uOAQfVR7N9I2YjljJeFUDpc0gYUKoHetAU%3D" alt="NoraRide_logo" />
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
         Login
      </button>
        <p
         className='text-center'
        >
          New here ? 
          <Link
            to={'/signup'}
            className='pl-1 text-blue-600'
          >
             Create new Account
          </Link>
        </p>
      </form>
      </div>
      <div>
        <Link
          to={'/captain-login'}
          className='bg-[#af8a4fe9] flex items-center justify-center text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg'
        >
          Signin as a Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
