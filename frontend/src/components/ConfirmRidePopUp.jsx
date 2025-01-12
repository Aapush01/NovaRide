import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault()

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }
    };

    return (
        <div>
            <h5
                className="p-1 text-center w-[93%] absolute top-0"
                onClick={() => {
                    props.setConfirmRidePopUp(false);
                }}
            >
                <i className="text-3xl text-gray-600 ri-arrow-down-wide-fill"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to Start</h3>
            <div className="flex items-center justify-between mt-4 bg-yellow-400 rounded-lg p-3">
                <div className="flex items-center gap-3">
                    <img
                        className="w-16 h-16 rounded-full object-cover"
                        src="https://imgs.search.brave.com/xkaxx3IhWSDjuuaMfGzJQnejF3vct-cSVuih64ZLmGs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL0hhcHB5/LUdpcmwtRnJlZS1Q/TkctSW1hZ2UucG5n"
                        alt=""
                    />
                    <h2 className="text-xl font-medium capitalize">{props.ride?.user.fullName.firstName}</h2>
                </div>
                <h5 className="text-lg font-medium">1.4 KM</h5>
            </div>

            <div className="flex flex-col justify-between items-center gap-2">
                <div className="w-full mt-5">
                    <div className="flex items-center gap-3 p-2 border-b-2">
                        <i className="text-lg ri-user-location-line"></i>
                        <div>
                            <h3 className="text-lg font-semibold">432/14-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 border-b-2">
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className="text-lg font-semibold">432/14-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 border-b-2">
                        <i className="text-lg ri-currency-line"></i>
                        <div>
                            <h3 className="text-lg font-semibold">₹{props.ride?.fare}</h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <form onSubmit={submitHandler} className="w-full">
                        <input
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            type="text"
                            placeholder=" Enter OTP"
                            className="bg-[#efefef] rounded mt-4 px-8 py-2 border w-full text-lg placeholder:text-base"
                        />
                        {/* {error && <p className="text-red-600 text-sm mt-2">{error}</p>} */}
                        <button
                            type="submit"
                            className="w-full mt-5 flex justify-center bg-green-600 p-3 text-white text-xl font-semibold rounded-lg"
                        >
                            Confirm
                        </button>
                        <button
                            onClick={() => {
                                props.setConfirmRidePopUp(false);
                                props.setRidePopUpPanel(false);
                            }}
                            className="w-full mt-4 bg-zinc-600 p-3 text-white text-xl font-semibold rounded-lg"
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmRidePopUp;
