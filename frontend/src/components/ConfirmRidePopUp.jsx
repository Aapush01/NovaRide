import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
        props.setConfirmRidePopUp(false)
    }} ><i className="text-3xl text-gray-600 ri-arrow-down-wide-fill"></i></h5>
    <h3 className='text-2xl font-semibold mb-4'>Confirm New Ride!</h3>
    <div className='flex items-center justify-between mt-4 bg-yellow-400 rounded-lg p-3'>
        <div className='flex items-center gap-3'>
            <img className='w-16 h-16 rounded-full object-cover' src="https://imgs.search.brave.com/xkaxx3IhWSDjuuaMfGzJQnejF3vct-cSVuih64ZLmGs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL0hhcHB5/LUdpcmwtRnJlZS1Q/TkctSW1hZ2UucG5n" alt="" />
            <h2 className='text-xl font-medium'>Aishwarama</h2>
        </div>
        <h5 className='text-lg font-medium'>3.4 KM</h5>
    </div>

    <div className='flex flex-col justify-between items-center gap-2'>
        <div className='w-full mt-5'>
            <div className='flex items-center gap-3 p-2 border-b-2'>
                <i className="text-lg ri-user-location-line"></i>
                <div>
                    <h3 className='text-lg font-semibold'>432/14-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Vashi, Navi Mumbai</p>
                </div>
            </div>
            <div className='flex items-center gap-3 p-2 border-b-2'>
                <i className="text-lg ri-map-pin-line"></i>
                <div>
                    <h3 className='text-lg font-semibold'>432/14-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Vashi, Navi Mumbai</p>
                </div>
            </div>
            <div className='flex items-center gap-3 p-2 border-b-2'>
                <i className="text-lg ri-currency-line"></i>
                <div>
                    <h3 className='text-lg font-semibold'>₹195.50</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
            </div>
        </div>
        <Link to={'/captain/riding'} className='text-center w-full mt-12 bg-green-600 p-1 text-white text-lg font-semibold rounded-lg'>
           Confirm
        </Link>
        <button onClick={() => {
            props.setConfirmRidePopUp(false)
            props.setRidePopUpPanel(false)
        }} className='w-full mt-2 bg-zinc-600 p-1 text-white text-lg font-semibold rounded-lg'>
           Cancel
        </button>
    </div>
</div>
  )
}

export default ConfirmRidePopUp
