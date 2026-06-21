import React from 'react';
import { FaBookOpen, FaCalendarCheck, FaGraduationCap, FaHome } from 'react-icons/fa';

const Stats = () => {
    return (
        <div className="relative py-25 px-6 md:px-20 text-white overflow-hidden">

            
            <div className="absolute inset-0 bg-gradient-to-r bg-amber-900" />

            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

                
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <FaBookOpen className="text-2xl text-amber-100" />
                        <h2 className="text-3xl font-bold text-amber-100">500+</h2>
                    </div>
                    <p className="text-gray-200 mt-2">Study Rooms Listed</p>
                </div>

                
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <FaCalendarCheck className="text-2xl text-amber-100" />
                        <h2 className="text-3xl font-bold text-amber-100">2,000+</h2>
                    </div>
                    <p className="text-gray-200 mt-2">Successful Bookings</p>
                </div>

                
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <FaGraduationCap className="text-2xl text-amber-100" />
                        <h2 className="text-3xl font-bold text-amber-100">1,200+</h2>
                    </div>
                    <p className="text-gray-200 mt-2">Happy Students</p>
                </div>

                
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <FaHome className="text-2xl text-amber-100" />
                        <h2 className="text-3xl font-bold text-amber-100">100+</h2>
                    </div>
                    <p className="text-gray-200 mt-2">Verified Hosts</p>
                </div>

            </div>

        </div>
    );
};

export default Stats;