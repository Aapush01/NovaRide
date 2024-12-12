import NovaRide_logo from '../assets/NovaRide_logo.webp'
import React, {useState, useRef} from 'react'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'


const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const ridePopUpPanelRef = useRef(null)
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false)
  const confirmRidePopUpRef = useRef(null)

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  },[ridePopUpPanel])

  useGSAP(() => {
    if (confirmRidePopUp) {
      gsap.to(confirmRidePopUpRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopUpRef.current, {
        transform: 'translateY(100%)'
      })
    }
  },[confirmRidePopUp])


  return (
    <div className='h-screen'>
       <img className='w-20 mb-2 rounded-full absolute left-5 top-5' src={NovaRide_logo} alt="NovaRide_logo" />
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/d0X_YC5CTyk2e7Z2I4gVmfhZ5OBQ7iXVkKPJLoa8XqM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL01pbmRv/cmtzT3BlblNvdXJj/ZS9VYmVyLUNhci1B/bmltYXRpb24tQW5k/cm9pZC9yYXcvbWFz/dGVyL2Fzc2V0cy9o/b3ctdG8tYWRkLXVi/ZXItY2FyLWFuaW1h/dGlvbi1pbi1hbmRy/b2lkLWFwcC1naWYu/Z2lm.gif" alt="map" />
      </div>
      <div className='h-2/5 p-6'>
       <CaptainDetails />
      </div>
      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUp={setConfirmRidePopUp}/>
      </div>
      <div ref={confirmRidePopUpRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
         <ConfirmRidePopUp setConfirmRidePopUp={setConfirmRidePopUp} setRidePopUpPanel={setRidePopUpPanel} />
      </div>
    </div>
  )
}

export default CaptainHome
