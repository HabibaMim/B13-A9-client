import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedCard = ({room}) => {

    const {"Room Name": roomName , _id, Description, Image :roomImage, Floor, Capacity, Amenities, "Hourly Rate":hourlyRate} = room;

    return (
        <div>
            
        
      <div
        key={room._id}
        className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col h-full"
      >
        
        <div className="relative w-full h-52 overflow-hidden">
          <Image
            src={roomImage}
            alt="room image"
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        
        <div className="p-5 flex flex-col flex-1">
          
          
          <h2 className="text-lg font-bold text-amber-900">
            {roomName}
          </h2>

          
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {room.Description}
          </p>

          
          <div className="mt-3 space-y-1 text-sm text-gray-700">
            <p>📍 {room.Floor}</p>
            <p>⚙️ Capacity: {room.Capacity} people</p>
            <p className="font-semibold text-amber-800">
              💰 ${hourlyRate}/hr
            </p>
          </div>

          
          <div className="flex flex-wrap gap-2 mt-4">
            {room.Amenities?.slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="text-xs bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-200"
              >
                {amenity}
              </span>
            ))}

            {room.Amenities?.length > 3 && (
              <span className="text-xs bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-200">
                +{room.Amenities.length - 3} more
              </span>
            )}
          </div>

          
          <div className="mt-auto pt-5">
            <Link
              href={`/rooms/${room._id}`}
              className="w-full inline-block text-center bg-amber-900 hover:bg-amber-800 text-white py-2 rounded-lg font-medium transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
     
  
        </div>
    );
};

export default FeaturedCard;