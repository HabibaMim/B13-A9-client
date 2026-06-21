import Image from 'next/image';
import React from 'react';
import banner from "../../public/assets/banner.jpg";
import Link from 'next/link';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

const Banner = () => {
    return (
        <div className="flex justify-center">

           

            
            <div className="relative w-full h-[450px] md:h-[500px] lg:h-screen">

                <Image
                    src={banner}
                    alt="banner"
                    fill
                    className="object-cover"
                />

                
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                
                <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 md:px-16 text-white">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-xl leading-tight">
                        Find Your Perfect Study Room
                    </h1>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-lg">
                        Browse and book quiet, private study rooms in your library.
                        List your own room and earn.
                    </p>

                    <Link
                        href="/rooms"
                        className="mt-5 flex justify-center gap-[6px] items-center sm:mt-6 bg-amber-900 hover:bg-amber-700 transition px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold w-fit text-sm sm:text-base"
                    >
                       <HiOutlineArrowTopRightOnSquare /> Explore Rooms
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Banner;