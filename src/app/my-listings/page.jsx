import React from "react";
import Image from "next/image";
import Link from "next/link";
import { headers } from 'next/headers';
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import DeleteModal from "@/components/DeleteModal";
import { Button } from "@heroui/react";

export const metadata = {
    title: "StudyNook - My Listings",
};

const MyListingsPage = async () => {
  const { token } = await auth.api.getToken({
          headers: await headers(),
      })
  
      const session = await auth.api.getSession({
          headers: await headers(),
         
      });
  
      if(!session?.user || !token){
          redirect("/login")
      }
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/${session?.user?.id}`, {
          headers: {
              Authorization: `Bearer ${token}`
          },
          cache : "no-store"
      })
  
      const myRooms = await res.json() || [];
      console.log("myRooms:", myRooms);


  return (
    <div>
        
                    {myRooms?.length === 0 ? (

                        <div className="bg-white border flex items-center justify-center h-[450px] border-amber-100 rounded-xl p-10 text-center">
                            <p className="text-xl font-semibold text-amber-900">
                                You have no Listings yet.
                            </p>
                        </div>

                    ) : (

                        <div className="min-h-screen bg-amber-50 px-6 md:px-20 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-10">
        My Listings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myRooms?.map((room) => (
          <div
            key={room?._id}
            className="bg-white border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={room?.Image}
                alt="room"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-amber-900">
                {room["Room Name"]}
              </h2>

              <p className="text-gray-500 text-sm">{room?.Description}</p>
<div className="flex justify-between">
              <div className="flex flex-col text-sm text-gray-600 mt-2">
                <span>📍{room?.Floor}</span>
                <span>⚙️Capacity: {room.Capacity}</span>
              

              <p className="text-amber-800 font-bold mt-1">
                💰{room["Hourly Rate"]}/hr
              </p></div>
              
                            <div className=" p-4 rounded-xl">
                                <p className="text-sm text-gray-500">
                                    Booking Count
                                </p>

                                <p className="font-semibold text-amber-900">
                                    {room?.bookCount || 0}
                                </p>
                            </div>
              </div>

              
          <div className="flex flex-wrap gap-2 mt-4">
            {room.Amenities?.map((amenity, index) => (
              <span
                key={index}
                className="text-xs bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-200"
              >
                {amenity}
              </span>
            ))}
</div>

              <div className="flex gap-3 mt-4">
                <Link href={`/rooms/${room._id}/edit`}><Button className="flex-1 bg-white px-[20px] border border-amber-900 text-amber-900 py-2 rounded-lg hover:bg-amber-50 transition">
                  Update
                </Button></Link>
<DeleteModal roomId = {room._id}></DeleteModal>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>)}

    </div>
    
  );
};

export default MyListingsPage;