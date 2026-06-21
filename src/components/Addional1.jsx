import React from 'react';
import { FaSearch, FaCalendarCheck, FaDoorOpen, FaUserPlus, FaHome, FaMoneyBillWave } from 'react-icons/fa';

const HowItWorks = () => {
    return (
        <div className="py-20 px-6 md:px-20 bg-base-100">

            
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                    How It Works
                </h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    Find, book, and use quiet study rooms in just a few simple steps.
                </p>
            </div>


            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="p-6 rounded-xl shadow-md bg-white text-center hover:shadow-xl transition">
                    <FaSearch className="text-4xl mx-auto text-orange-500" />
                    <h3 className="text-xl font-semibold mt-4">Search Rooms</h3>
                    <p className="text-gray-500 mt-2">
                        Browse available study rooms by location, price, and availability.
                    </p>
                </div>


                <div className="p-6 rounded-xl shadow-md bg-white text-center hover:shadow-xl transition">
                    <FaCalendarCheck className="text-4xl mx-auto text-orange-500" />
                    <h3 className="text-xl font-semibold mt-4">Book Instantly</h3>
                    <p className="text-gray-500 mt-2">
                        Select your preferred time and confirm your booking in seconds.
                    </p>
                </div>


                <div className="p-6 rounded-xl shadow-md bg-white text-center hover:shadow-xl transition">
                    <FaDoorOpen className="text-4xl mx-auto text-orange-500" />
                    <h3 className="text-xl font-semibold mt-4">Start Studying</h3>
                    <p className="text-gray-500 mt-2">
                        Walk in and enjoy a quiet, distraction-free study environment.
                    </p>
                </div>

            </div>


            
            <div className="flex items-center gap-4 my-14">
                <div className="flex-1 h-px bg-gray-300"></div>

                <span className="font-semibold text-gray-500">
                    OR
                </span>

                <div className="flex-1 h-px bg-gray-300"></div>
            </div>


            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="p-6 rounded-xl shadow-md bg-white text-center border border-orange-100 hover:shadow-xl transition">
                    <FaUserPlus className="text-4xl mx-auto text-orange-500" />
                    <h3 className="text-xl font-semibold mt-4">Become Owner</h3>
                    <p className="text-gray-600 mt-2">
                        Join our platform and turn your unused space into a study room.
                    </p>
                </div>


                <div className="p-6 rounded-xl shadow-md bg-white text-center border border-orange-100 hover:shadow-xl transition">
                    <FaHome className="text-4xl mx-auto text-orange-500" />
                    <h3 className="text-xl font-semibold mt-4">List Your Room</h3>
                    <p className="text-gray-600 mt-2">
                        Add your room details, pricing, and availability for users.
                    </p>
                </div>


                <div className="p-6 rounded-xl shadow-md bg-white text-center border border-orange-100 hover:shadow-xl transition">
                    <FaMoneyBillWave className="text-4xl mx-auto text-orange-500" />
                    <h3 className="text-xl font-semibold mt-4">Start Earning</h3>
                    <p className="text-gray-600 mt-2">
                        Earn money by providing a comfortable study environment.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default HowItWorks;