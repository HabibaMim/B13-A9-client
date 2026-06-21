import CancelBookingButton from '@/components/CancelBookingButton';
import { auth } from '@/lib/auth';
import { Avatar } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const BookingsPage = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    })

    const session = await auth.api.getSession({
        headers: await headers(),
       
    });   console.log(session.user)

    if(!session?.user || !token){
        redirect("/login")
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${session?.user?.id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache : "no-store"
    })

    const bookings = await res.json() || [];

    return (
        <div className="min-h-screen bg-amber-50 py-12 px-6 md:px-20">

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                {/* LEFT - USER CARD (NO EXTRA TOP SPACE) */}
                <div className="lg:col-span-1">

                    <div className="bg-white border border-amber-100 rounded-2xl shadow-md px-6 py-12 flex flex-col items-center text-center">

                        <Avatar className="w-24 h-24 mb-4">
                            <Avatar.Image
                                alt="image"
                                src={session?.user?.image}
                                referrerPolicy="no-referrer"
                            />
                            <Avatar.Fallback>
                                {session?.user?.name?.charAt(0)}
                            </Avatar.Fallback>
                        </Avatar>

                        <h2 className="text-xl font-bold text-amber-900">
                            {session?.user?.name}
                        </h2>

                        <p className="text-gray-500 text-sm mt-1">
                            {session?.user?.email}
                        </p>

                    </div>

                </div>

                {/* RIGHT - BOOKINGS (WRAPPED SAME GRID ROW START) */}
                <div className="lg:col-span-3">

                    <h1 className="text-3xl font-bold text-amber-900 mb-6">
                        My Bookings
                    </h1>

                    {bookings?.length === 0 ? (

                        <div className="bg-white border flex items-center justify-center h-[450px] border-amber-100 rounded-xl p-10 text-center">
                            <p className="text-xl font-semibold text-amber-900">
                                You have no bookings yet.
                            </p>
                        </div>

                    ) : (

                        <div className="grid grid-cols-1 gap-6">

                            {bookings?.map((booking) => (

                                <div
                                    key={booking?._id}
                                    className="bg-white border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition w-full"
                                >

                                    <div className="flex gap-5 p-5 relative">

                                        <CancelBookingButton bookingId={booking?._id}></CancelBookingButton>

                                        <Image
                                            src={booking?.thumbnail}
                                            alt="thumbnail"
                                            width={110}
                                            height={110}
                                            className="w-[100px] h-[100px] object-cover rounded-xl border border-amber-100"
                                        />

                                        <div className="flex flex-col justify-center">

                                            <p className="text-amber-900 font-semibold text-lg">
                                                {booking?.roomTitle}
                                            </p>

                                            <p className="text-gray-500 text-sm mt-1">
                                                {new Date(booking?.bookedAt).toDateString()}
                                            </p>

                                            <span className="mt-3 w-fit bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                                                CONFIRMED
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default BookingsPage;