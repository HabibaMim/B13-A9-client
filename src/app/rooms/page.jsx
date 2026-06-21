import AmenityFilter from '@/components/AmenityFilter';
import RoomCard from '@/components/RoomCard';
import SearchBar from '@/components/SearchBar';
import { fetchRooms } from '@/lib/rooms/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const RoomsPage = async ({searchParams}) => {

    const sParams = await searchParams;

    const rooms = await fetchRooms(sParams?.searchTerm || "", sParams?.amenities || "");
    
    return (
        <div>
            <div className='flex justify-end items-end gap-[10px] flex-col mt-[20px] mx-[100px]'>
            <SearchBar></SearchBar>
            <AmenityFilter></AmenityFilter>
            </div>
            <div className='text-4xl text-center font-bold text-amber-900'>All Rooms</div>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[30px] px-[20px] md:px-[100px] gap-[40px]'>
                {
  rooms?.map((room) => <RoomCard key={room._id} room={room}></RoomCard>
                )}
            </div>
        </div>
   </div>

)}
export default RoomsPage;