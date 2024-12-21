/* eslint-disable react/prop-types */
import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
                props.setConfirmRidePanel(false)
            }} ><i className="text-3xl text-gray-600 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-4'>Confirm your ride</h3>

            <div className='flex flex-col justify-between items-center gap-2'>
                <img className='h-20' src="https://imgs.search.brave.com/KqcCNA9kgrqbzMEJo0T2zTKiuk8pmfhbYwZKJMI8Keg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE3MTIw/MjczMDcvYXNzZXRz/LzQyL2ViODVjMy1l/MmRjLTRlOTUtYTcw/ZC0yMmVlNGYwODAx/NWYvb3JpZ2luYWwv/U2NyZWVuc2hvdC0y/MDI0LTA0LTAxLWF0/LTkuMDguMDdwLm0u/LnBuZw" alt="car" />
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-user-location-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>432/14-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>432/14-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>₹{props.fare[props.vehicleType]}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    props.setVehicleFound(true)
                    props.setConfirmRidePanel(false)
                }} className='w-full mt-5 bg-green-500 p-1 text-white text-lg font-semibold rounded-lg'>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default ConfirmRide
