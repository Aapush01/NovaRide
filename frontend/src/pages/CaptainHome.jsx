import NovaRide_logo from '../assets/NovaRide_logo.webp'
import Home_Img from '../assets/Home_Img.webp'
import React, { useState, useRef, useEffect, useContext } from 'react'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'


const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(false)
  const ridePopUpPanelRef = useRef(null)
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false)
  const confirmRidePopUpRef = useRef(null)
  const [ ride, setRide ] = useState(null)

  const { socket } = useContext(SocketContext)
  const { captain } = useContext(CaptainDataContext)

  useEffect(() => {  
    socket.emit("join", { 
      userType: "captain",
      userId: captain._id
     })
     const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          socket.emit('update-location-captain', {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        })
      }
     }

     const locationInterval = setInterval(updateLocation, 10000)
     updateLocation()
  }, [])

  socket.on('new-ride', (data) => {
    setRide(data)
    setRidePopUpPanel(true)
  })

  async function confirmRide() {

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

        rideId: ride._id,
        captainId: captain._id,

    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    setRidePopupPanel(false)
    setConfirmRidePopupPanel(true)

}

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopUpPanel])

  useGSAP(() => {
    if (confirmRidePopUp) {
      gsap.to(confirmRidePopUpRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopUpRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopUp])


  return (
    <div className='h-screen'>
      <img className='w-20 mb-2 rounded-full absolute left-5 top-5' src={NovaRide_logo} alt="NovaRide_logo" />
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src={Home_Img} alt="map" />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
        <RidePopUp 
          ride={ride}
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUp={setConfirmRidePopUp}
          confirmRide={confirmRide}
        />
      </div>
      <div ref={confirmRidePopUpRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
        <ConfirmRidePopUp 
          ride={ride}
          setConfirmRidePopUp={setConfirmRidePopUp} 
          setRidePopUpPanel={setRidePopUpPanel} 
        />
      </div>
    </div>
  )
}

export default CaptainHome
