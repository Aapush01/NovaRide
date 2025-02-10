import React, { useRef, useState } from 'react'
import NovaRide_logo from '../assets/NovaRide_logo.webp'
import { Link, useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import FinishRide from '../components/FinishRide'
import gsap from 'gsap'

const CaptainRiding = (props) => {
  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)
  const location = useLocation()
  const rideData = location.state?.ride


  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [finishRidePanel])


  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16 rounded-full' src={NovaRide_logo} alt="NovaRide_logo" />
        <Link to={'/captain-home'} className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className='text-lg font-medium ri-logout-box-r-line'></i>
        </Link>

      </div>
      <div className='h-4/5'>
        {/* <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/d0X_YC5CTyk2e7Z2I4gVmfhZ5OBQ7iXVkKPJLoa8XqM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL01pbmRv/cmtzT3BlblNvdXJj/ZS9VYmVyLUNhci1B/bmltYXRpb24tQW5k/cm9pZC9yYXcvbWFz/dGVyL2Fzc2V0cy9o/b3ctdG8tYWRkLXVi/ZXItY2FyLWFuaW1h/dGlvbi1pbi1hbmRy/b2lkLWFwcC1naWYu/Z2lm.gif" alt="map" /> */}
        <Map />
      </div>
      <div onClick={() => {
        setFinishRidePanel(true)
      }} className='bg-yellow-400 h-1/5 relative flex  items-center justify-between p-6'>
        <h5 className='p-1 text-center w-[90%] absolute top-0'>
          <i className="text-3xl text-black ri-arrow-up-wide-fill"></i>
        </h5>
        <h4 className='text-xl font-semibold'>3 KM away</h4>
        <button className='bg-black text-white w-100 h-10 p-2 rounded-xl px-4'>Ride Completed!</button>
      </div>
      <div ref={finishRidePanelRef} className='fixed w-full bottom-0'>
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  )
}

export default CaptainRiding
