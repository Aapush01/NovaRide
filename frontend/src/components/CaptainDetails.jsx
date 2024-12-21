import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext)
    return (
        <div className='bg-white p-4'>
            <div className='flex items-center justify-between'>
                <img className='h-14' src="https://imgs.search.brave.com/j2fI4d10RdfOLz5s73SL4QXmfT1jvFDS4nwimkWSYEg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvOC9Zb3Vu/Zy1NYW4tUE5HLUlt/YWdlLnBuZw" alt="captain" />
                <h2 className='text-lg font-medium capitalize'>{captain.fullName.firstName + " " + captain.fullName.lastName}</h2>
                <div className='text-right'>
                    <h4 className='text-lg font-semibold -mt-1 -mb-1'>₹1245.25</h4>
                    <p className='text-sm font-semibold text-gray-600'>Earned</p>
                </div>
            </div>

            <div className='flex mt-12 justify-between items-center gap-2'>
                <div className='w-20 h-20 bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
                    <div>
                        <i className="text-xl font-bold ri-timer-2-line"></i>
                    </div>
                    <div>
                        <p className='text-sm font-semibold'>Time</p>
                    </div>
                </div>
                <div className='w-20 h-20 bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
                    <div>
                        <i className="text-xl font-bold ri-speed-up-line"></i>
                    </div>
                    <div>
                        <p className='text-sm font-semibold'>Speed</p>
                    </div>
                </div>
                <div className='w-20 h-20 bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
                    <div>
                        <i className="text-xl font-bold ri-wallet-3-line"></i>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-sm font-semibold'>Money</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails
