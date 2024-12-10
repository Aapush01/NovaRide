import NovaRide_logo from '../assets/NovaRide_logo.webp'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 200) {
      localStorage.removeItem('token')
      navigate('/captain-login')
    }
  })

  return (
    <div>
      Captain-Logout
    </div>
  )
}

export default CaptainLogout
