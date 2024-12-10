import NovaRide_logo from '../assets/NovaRide_logo.webp'
import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import Vehiclepanel from '../components/Vehiclepanel'
import ConfirmRide from '../components/ConfirmRide'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])



  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-20 mb-2 rounded-full absolute left-5 top-5' src={NovaRide_logo} alt="NovaRide_logo" />
      <div>
        <img className='h-screen w-full object-cover ' src="https://files.oaiusercontent.com/file-FS64VtFM9SfMYgrSXGXPDy?se=2024-12-07T16%3A20%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0db7b789-4dff-497c-b37d-828527ad71a7.webp&sig=4oJtG4rW/cfLPJ9%2B7eO2plGgMY1BGlISPxSFxKdBWZM%3D" alt="" />

      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute right-5 top-3 text-xl font-bold'>
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-14 w-1 left-10 top-[45%] bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 rounded-lg w-full mt-5 text-base font-medium'
              type="text"
              placeholder='Add a pick-up location' />
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 rounded-lg w-full mt-3 text-base font-medium'
              type="text"
              placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />

        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 px-3 py-12'>
        <Vehiclepanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />

      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 px-3 py-6 pt-12'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} />

      </div>
    </div>
  )
}

export default Home
