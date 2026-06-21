"use client" ;
import { authClient, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookNowButton = ({room}) => {
     const {data:session, isPending} = useSession();
     const router = useRouter();
         const [startTime, setStartTime] = useState("");
const [endTime, setEndTime] = useState("");

const hours = Number(endTime) - Number(startTime);
const totalCost = hours > 0 ? hours * (room?.["Hourly Rate"] || 0) : 0;
    const handleBook = async (e)=>{
        e.preventDefault();
        const {data : jwtData} = await authClient.token();
        const token =jwtData?.token;
        if(!token ){
            toast.error("Authentication Failed! Booking Not Added.")
            return;
        }
        if(totalCost<= 0){
            toast.error("Please select Valid start and end times")
            return;
        }
        const updatedData = {
            userId : session?.user?.id,
            studentName : session?.user?.name,
            studentEmail : session?.user?.email,
            roomTitle : room?.["Room Name"],
            thumbnail : room?.Image
        }

      const res =  await fetch (`${process.env.NEXT_PUBLIC_API_URL}/bookings/${room?._id}`,{
            method: "PATCH",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${token}`
            },
            body : JSON.stringify(updatedData)
        })

        const data= await res.json();
        if (!res.ok) {
    toast.error("Something Went Wrong!");
    return;
}
        router.refresh();
        router.push("/my-bookings")
    }
   


    return (
  <div>
    <button className="btn w-full bg-amber-900 text-white" onClick={() => {
        document.getElementById('booking_modal').showModal();
    }}>Book Now</button>

    <dialog id="booking_modal" className="modal">
        <div className="modal-box bg-white border border-amber-100">

            
            <button
                type="button"
                onClick={() => document.getElementById('booking_modal').close()}
                className="btn btn-sm btn-circle absolute right-3 top-3 bg-amber-100 text-amber-900 border-none hover:bg-amber-200"
            >
                ✕
            </button>

            <h2 className="text-2xl font-bold text-amber-900 text-center mb-6">
                Room Booking
            </h2>

            <form onSubmit={handleBook} className="flex flex-col gap-4">

                <div>
                    <label className="text-amber-900 font-medium">Date</label>
                    <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="input input-bordered w-full mt-1 border-amber-200"
                    />
                </div>

                <div>
                    <label className="text-amber-900 font-medium">Start Time</label>
                    <select
                        required
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="select select-bordered w-full mt-1 border-amber-200"
                    >
                        <option value="">Select start time</option>
                        {[8,9,10,11,12,13,14,15,16,17,18,19,20].map(h => (
                            <option key={h} value={h}>{h}:00</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="text-amber-900 font-medium">End Time</label>
                    <select
                        required
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="select select-bordered w-full mt-1 border-amber-200"
                    >
                        <option value="">Select end time</option>
                        {[9,10,11,12,13,14,15,16,17,18,19,20].map(h => (
                            <option key={h} value={h}>{h}:00</option>
                        ))}
                    </select>
                </div>

                <div className="bg-amber-50 rounded-lg p-3 flex justify-between">
                    <span className="text-amber-900 font-medium">Total Cost</span>
                    <span className="font-bold text-amber-800">${totalCost}</span>
                </div>

                <div>
                    <label className="text-amber-900 font-medium">Special Note</label>
                    <textarea
                        className="textarea textarea-bordered w-full mt-1 border-amber-200"
                        placeholder="Any special requests..."
                    />
                </div>

                <button
                    type="submit"
                    className="btn bg-amber-900 hover:bg-amber-800 text-white border-none"
                >
                    Confirm Booking
                </button>

            </form>

        </div>

        {/* ✅ replaced backdrop form with plain button */}
        <button
            onClick={() => document.getElementById('booking_modal').close()}
            className="modal-backdrop"
        >
            close
        </button>

    </dialog>
</div>
    );
};

export default BookNowButton;