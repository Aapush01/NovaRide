/* eslint-disable react/prop-types */
import React from 'react'

const WaitingForDriver = (props) => {
    return (
        <div className='bg-white'>
            <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
                props.waitingForDriver(false)
            }} ><i className="text-3xl text-gray-600 ri-arrow-down-wide-fill"></i></h5>

            <div className='flex items-center justify-between'>
                <img className='h-14' src="https://imgs.search.brave.com/KqcCNA9kgrqbzMEJo0T2zTKiuk8pmfhbYwZKJMI8Keg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE3MTIw/MjczMDcvYXNzZXRz/LzQyL2ViODVjMy1l/MmRjLTRlOTUtYTcw/ZC0yMmVlNGYwODAx/NWYvb3JpZ2luYWwv/U2NyZWVuc2hvdC0y/MDI0LTA0LTAxLWF0/LTkuMDguMDdwLm0u/LnBuZw" alt="car" />
                <div className='text-right pr-2'>
                  <h2 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
                  <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
                  <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                  <h1 className='text-lg font-semibold'>  {props.ride?.otp} </h1>
                </div>
            </div>

            <div className='flex flex-col justify-between items-center gap-2'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-user-location-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>432/14-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>432/14-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>₹{props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WaitingForDriver
