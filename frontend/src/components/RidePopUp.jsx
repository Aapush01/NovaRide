import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
                props.setRidePopUpPanel(false)
            }} ><i className="text-3xl text-gray-600 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-4'>New Ride Available!</h3>
            <div className='flex items-center justify-between mt-4 bg-yellow-400 rounded-lg p-3'>
                <div className='flex items-center gap-3'>
                    <img className='w-16 h-16 rounded-full object-cover' src="https://imgs.search.brave.com/xkaxx3IhWSDjuuaMfGzJQnejF3vct-cSVuih64ZLmGs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL0hhcHB5/LUdpcmwtRnJlZS1Q/TkctSW1hZ2UucG5n" alt="" />
                    <h2 className='text-xl font-medium'>{props.ride?.user.fullName.firstName + " " + props.ride?.user.fullName.lastName}</h2>
                </div>
                <h5 className='text-lg font-medium'>1.4 KM</h5>
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
                <div className='flex gap-10 mt-4'>
                    <div>
                        <button onClick={() => {
                            props.setRidePopUpPanel(false)
                        }} className='w-full bg-gray-600 p-2 px-8 text-white text-lg font-semibold rounded-lg'>
                            Ignore
                        </button>
                    </div>
                    <div>
                        <button onClick={() => {
                            props.setConfirmRidePopUp(true)
                            props.confirmRide()
                        }} className='w-full bg-green-600 p-2 px-8 text-white text-lg font-semibold rounded-lg'>
                            Accept
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RidePopUp
