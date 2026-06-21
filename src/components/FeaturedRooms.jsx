import { fetchFeaturedRooms, fetchRooms } from '@/lib/rooms/data';
import React from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedRooms = async ({room}) => {
    const rooms =await fetchFeaturedRooms()
    return (
        <div>
             <div className='text-4xl text-center pt-[60px] font-bold text-amber-900'>Featured Rooms</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[30px] px-[20px] md:px-[100px] gap-[40px]'>
                {
                    rooms?.map(room=><FeaturedCard key={room?._id} room={room}/>)
                }
            </div>
        </div>
    );
};

export default FeaturedRooms;