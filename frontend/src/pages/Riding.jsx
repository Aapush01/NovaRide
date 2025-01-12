import React, { useEffect, useContext} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'



const Riding = () => {
  const location = useLocation()
  const { ride } = location.state || {}
  const { socket } = useContext(SocketContext)
  const navigate = useNavigate()
  
  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-xl font-bold ri-home-4-line"></i>
      </Link>
      <div className='h-1/2'>
        <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/d0X_YC5CTyk2e7Z2I4gVmfhZ5OBQ7iXVkKPJLoa8XqM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL01pbmRv/cmtzT3BlblNvdXJj/ZS9VYmVyLUNhci1B/bmltYXRpb24tQW5k/cm9pZC9yYXcvbWFz/dGVyL2Fzc2V0cy9o/b3ctdG8tYWRkLXVi/ZXItY2FyLWFuaW1h/dGlvbi1pbi1hbmRy/b2lkLWFwcC1naWYu/Z2lm.gif" alt="map" />
      </div>
      <div className='h-1/2 p-4'>
        <div className='bg-white'>
          <div className='flex items-center justify-between'>
            <img className='h-14' src="https://imgs.search.brave.com/KqcCNA9kgrqbzMEJo0T2zTKiuk8pmfhbYwZKJMI8Keg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE3MTIw/MjczMDcvYXNzZXRz/LzQyL2ViODVjMy1l/MmRjLTRlOTUtYTcw/ZC0yMmVlNGYwODAx/NWYvb3JpZ2luYWwv/U2NyZWVuc2hvdC0y/MDI0LTA0LTAxLWF0/LTkuMDguMDdwLm0u/LnBuZw" alt="car" />
            <div className='text-right pr-2'>
              <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullName.firstName}</h2>
              <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
              <p className='text-lg font-semibold'>Maruti Suzuki Alto</p>
            </div>
          </div>

          <div className='flex flex-col justify-between items-center gap-2'>
            <div className='w-full mt-5'>

              <div className='flex items-center gap-3 p-2 border-b-2'>
                <i className="text-lg ri-map-pin-line"></i>
                <div>
                  <h3 className='text-lg font-semibold'>432/14-A</h3>
                  <p className='text-sm -mt-1 text-gray-600'>{ride?.destination}</p>
                </div>
              </div>
              <div className='flex items-center gap-3 p-2 border-b-2'>
                <i className="text-lg ri-currency-line"></i>
                <div>
                  <h3 className='text-lg font-semibold'>₹{ride?.fare}</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <button className='w-full mt-7 bg-green-500 p-1 text-white text-lg font-semibold rounded-lg'>Make a payment</button>
      </div>
    </div>
  )
}

export default Riding
