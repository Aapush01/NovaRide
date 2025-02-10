/* eslint-disable react/prop-types */
import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
                props.setVehiclePanel(false)
            }} ><i className="text-3xl text-gray-600 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-4'>choose a vehicle:</h3>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('car')
            }} className='w-full flex items-center justify-between border-2  active:border-black rounded-xl mb-2'>
                <img className='h-16' src="https://imgs.search.brave.com/KqcCNA9kgrqbzMEJo0T2zTKiuk8pmfhbYwZKJMI8Keg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE3MTIw/MjczMDcvYXNzZXRz/LzQyL2ViODVjMy1l/MmRjLTRlOTUtYTcw/ZC0yMmVlNGYwODAx/NWYvb3JpZ2luYWwv/U2NyZWVuc2hvdC0y/MDI0LTA0LTAxLWF0/LTkuMDguMDdwLm0u/LnBuZw" alt="car" />
                <div className='bg-white w-1/2 p-3'>
                    <h4 className='font-medium'>NovaGo <span><i className="ri-user-3-line"></i>4</span></h4>
                    <h5 className='text-sm font-semibold'>2 mins away</h5>
                    <p className='text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold p-1'>₹{props.fare.car}</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('auto')
            }} className='w-full flex items-center justify-between border-2 active:border-black rounded-xl mb-2'>
                <img className='h-16' src="https://imgs.search.brave.com/P1cOCPx2Jfydlcyj49zAI-ErmYLFvTxtC_MQ3CV2GAY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9BdXRv/LVJpY2tzaGF3LVBO/Ry1QaG90by5wbmc" alt="auto" />
                <div className='bg-white w-1/2 p-3'>
                    <h4 className='font-medium'>miniAuto <span><i className="ri-user-3-line"></i>2</span></h4>
                    <h5 className='text-sm font-semibold'>5 mins away</h5>
                    <p className='text-xs text-gray-600'>Affordable, auto rides</p>
                </div>
                <h2 className='text-lg font-semibold p-1'>₹{props.fare.auto}</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('bike')
            }} className='w-full flex items-center justify-between border-2 active:border-black rounded-xl mb-2'>
                <img className='h-16' src="https://imgs.search.brave.com/G-zaqrlXYIDWeHFCueZGXBBTfGli0QZXga5a2JIgzoA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMi9Nb3Rv/cmN5Y2xlLUJpa2Ut/UE5HLUhpZ2gtUXVh/bGl0eS1JbWFnZS5w/bmc" alt="bike" />
                <div className='bg-white w-1/2 p-3'>
                    <h4 className='font-medium'>Bike <span><i className="ri-user-3-line"></i>1</span></h4>
                    <h5 className='text-sm font-semibold'>3 mins away</h5>
                    <p className='text-xs text-gray-600'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold p-1'>₹{props.fare.bike}</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
