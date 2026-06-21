import BookNowButton from '@/components/BookNowButton';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const fetchSingleRoom = async(id, token)=>{
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`, {
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    })
    const data = await res.json();
    return data || {};
}

const RoomDetails = async ({params}) => {
    
    const {id} = await params;
    const {token} = await auth.api.getToken({
           
            headers : await headers()
        });
        //console.log(token);
    const room = await fetchSingleRoom(id, token);

    const {
        "Room Name": roomName,
        _id,
        bookCount,
        Description,
        Image: roomImage,
        Floor,
        Capacity,
        Amenities,
        "Hourly Rate": hourlyRate
    } = room;

    //console.log(room)

    return (
        <div className="py-16 px-6 md:px-20 bg-base-100">

            <div className="max-w-7xl mx-auto">

               <h1 className="text-2xl md:text-4xl font-bold text-amber-900 mb-6">
    {roomName}
</h1>


                <div className="grid md:grid-cols-5 gap-10 items-center">


                    <div className="md:col-span-3 relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">

                        <Image
                            src={roomImage}
                            alt="room image"
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                            priority
                            className="object-cover"
                        />

                    </div>



                    <div className="md:col-span-2 space-y-6">


                        <div>

                            <h2 className="text-2xl font-bold text-amber-900">
                                Room Overview
                            </h2>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                {Description}
                            </p>

                        </div>



                        <div className="grid grid-cols-2 gap-4">


                            <div className="bg-amber-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-500">
                                    Floor
                                </p>

                                <p className="font-semibold text-amber-900">
                                    {Floor}
                                </p>
                            </div>



                            <div className="bg-amber-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-500">
                                    Capacity
                                </p>

                                <p className="font-semibold text-amber-900">
                                    {Capacity} People
                                </p>
                            </div>



                            <div className="bg-amber-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-500">
                                    Hourly Rate
                                </p>

                                <p className="font-semibold text-amber-900">
                                    ${hourlyRate}/hr
                                </p>
                            </div>



                            <div className="bg-amber-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-500">
                                    Booking Count
                                </p>

                                <p className="font-semibold text-amber-900">
                                    {bookCount || 0}
                                </p>
                            </div>


                        </div>




                        <div>

                            <h3 className="font-semibold text-amber-900 mb-3">
                                Amenities
                            </h3>


                            <div className="flex flex-wrap gap-2">

                                {Amenities?.map((amenity, index) => (

                                    <span
                                        key={index}
                                        className="bg-amber-900 text-white text-sm px-4 py-2 rounded-full"
                                    >
                                        {amenity}
                                    </span>

                                ))}

                            </div>


                        </div>




                        <BookNowButton room={room}/>


                    </div>


                </div>


            </div>


        </div>
    );
};

export default RoomDetails;