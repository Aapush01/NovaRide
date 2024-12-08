import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  const [ pickup, setPickup ] = useState('')
  const [ destination, setDestination ] = useState('')
  const [pannelOpen, setPannelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)


  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(() => {
    if (pannelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }else{
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [pannelOpen])



  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-20 mb-2 rounded-full absolute left-5 top-5' src="https://files.oaiusercontent.com/file-LDiGuUPyYcgY1qUEbgGkQS?se=2024-12-01T15%3A51%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D59ab5e02-66b4-4f64-8839-510abb7ad9a5.webp&sig=ytbTH7d5/uOAQfVR7N9I2YjljJeFUDpc0gYUKoHetAU%3D" alt="NoraRide_logo" />
      <div>
        <img className='h-screen w-full object-cover ' src="https://files.oaiusercontent.com/file-FS64VtFM9SfMYgrSXGXPDy?se=2024-12-07T16%3A20%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0db7b789-4dff-497c-b37d-828527ad71a7.webp&sig=4oJtG4rW/cfLPJ9%2B7eO2plGgMY1BGlISPxSFxKdBWZM%3D" alt="" />

      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setPannelOpen(false)
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
              setPannelOpen(true)
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
              setPannelOpen(true)
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
        <div ref={panelRef}  className=' h-[0%] bg-red-500'>

        </div>
      </div>
    </div>
  )
}

export default Home
