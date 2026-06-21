"use client";

import { deleteBooking } from '@/lib/rooms/action';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const CancelBookingButton = ({bookingId}) => {
    const router = useRouter();

    const handleDeleteBooking = async()=>{
        const data = await deleteBooking(bookingId);

        if(data?.deletedCount) {
            router.refresh();
            router.push("/my-bookings")
            toast.success("Booking Cancelled");
        }
    }

    return (
        <div>

            <button
                onClick={() => document.getElementById(`cancel_modal_${bookingId}`).showModal()}
                className="absolute top-3 right-3 text-amber-900 font-semibold text-sm hover:underline"
            >
                Cancel
            </button>


            <dialog id={`cancel_modal_${bookingId}`} className="modal">

                <div className="modal-box bg-white border border-amber-100">

                    <h3 className="font-bold text-xl text-amber-900 text-center">
                        Confirm Cancellation
                    </h3>

                    <p className="py-4 text-gray-600 text-center">
                        Do you want to cancel this booking?
                    </p>


                    <div className="flex justify-center gap-4 mt-4">

                        <form method="dialog">
                            <button className="btn bg-amber-100 text-amber-900 border-none hover:bg-amber-200">
                                Keep Booking
                            </button>
                        </form>


                        <button
                            onClick={handleDeleteBooking}
                            className="btn bg-amber-900 hover:bg-amber-800 text-white border-none"
                        >
                            Confirm
                        </button>

                    </div>

                </div>


                <form method="dialog" className="modal-backdrop">
                    <button>
                        close
                    </button>
                </form>

            </dialog>

        </div>
    );
};

export default CancelBookingButton;