"use server";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const addRoom = async (formData) => {

    const {token} = await auth.api.getToken({
        headers: await headers(),
    });
    
    const session = await auth.api.getSession({  
        headers: await headers(),
    });
    const raw = Object.fromEntries(formData.entries());
    const amenities = formData.getAll('amenities');  // checkboxes need getAll, not get

    const modifiedData = {
        "Room Name": raw.name,
        "Description": raw.description,
        "Image": raw.image,
        "Floor": raw.floor,
        "Capacity": Number(raw.capacity),
        "Hourly Rate": Number(raw.hourlyRate),
        "Amenities": amenities,
        userId: session?.user?.id,
    };

    const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`,{
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${token}`,
        },
        body : JSON.stringify(modifiedData),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data;
};

export const deleteBooking = async (id) => {
    const {token} = await auth.api.getToken({
        headers: await headers(),
});

const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`, {
    method : 'DELETE',
    headers :{
        
            Authorization : `Bearer ${token}`,
    },
});

if(!res.ok) return null;
const data = await res.json();
    return data;

};

export const deleteRoom = async (id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`,{
        method : "DELETE"
    })
    const data = await res.json();
    if(!res.ok) return;
    revalidatePath("/my-listings")
    return data;
}

export const updateRoom = async (id, formData) =>{
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });
    const raw = Object.fromEntries(formData.entries())
    const amenities = formData.getAll('amenities');
    const modifiedData = {
        "Room Name": raw.name,
        "Description": raw.description,
        "Image": raw.image,
        "Floor": raw.floor,
        "Capacity": Number(raw.capacity),
        "Hourly Rate": Number(raw.hourlyRate),
        "Amenities": amenities,
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`, {
        method: 'PATCH',
        headers : {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${token}`},
            body : JSON.stringify(modifiedData),

    })
    const data = await res.json();
    if(!res.ok) return;
    revalidatePath("/rooms");
     revalidatePath("/my-listings");
    return data;
}