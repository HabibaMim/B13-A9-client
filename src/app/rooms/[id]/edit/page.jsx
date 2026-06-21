import EditRoomForm from '@/components/EditRoomForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const fetchRoom = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`, {
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    });
    const data = await res.json();
    return data;
};

const EditRoomPage = async ({ params }) => {
    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const room = await fetchRoom(id, token);


    return (
        <div>
            <EditRoomForm room={room} />
        </div>
    );
};

export default EditRoomPage;