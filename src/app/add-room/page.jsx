import { addRoom } from "@/lib/rooms/action";
import { redirect } from "next/navigation";
import React from "react";


const CATEGORIES = [
                                "Whiteboard",
                                "Projector",
                                "Wi-Fi",
                                "Power Outlets",
                                "Quiet Zone",
                                "Air Conditioning"
                            ]
const AddRoomPage = async () => {
    const handleAddRoom = async(formData)=> {
    "use server"
    const data = await addRoom (formData)
    if(data?.insertedId) {

        redirect("/my-listings")
    }
    }
    return (
        <div className="min-h-screen bg-amber-50 py-12 px-6 md:px-20">

            <div className="max-w-2xl mx-auto bg-white border border-amber-100 rounded-2xl shadow-md p-8">

                <h1 className="text-3xl font-bold text-amber-900 text-center mb-8">
                    Add Study Room
                </h1>

                <form action={handleAddRoom} className="flex flex-col gap-5">

                    <div>
                        <label className="text-amber-900 font-semibold">
                            Room Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            required
                            placeholder="Enter room name"
                            className="input input-bordered w-full mt-2 border-amber-200"
                        />
                    </div>

                    <div>
                        <label className="text-amber-900 font-semibold">
                            Description
                        </label>
                        <textarea
                            name="description"
                            required
                            placeholder="Describe the room"
                            className="textarea textarea-bordered w-full mt-2 border-amber-200 h-28"
                        />
                    </div>

                    <div>
                        <label className="text-amber-900 font-semibold">
                            Image URL
                        </label>
                        <input
                            name="image"
                            type="url"
                            placeholder="https://example.com/image.jpg"
                            className="input input-bordered w-full mt-2 border-amber-200"
                        />
                    </div>

                    <div>
                        <label className="text-amber-900 font-semibold">
                            Floor
                        </label>
                        <input
                            name="floor"
                            type="text"
                            placeholder="Example: 3rd Floor"
                            className="input input-bordered w-full mt-2 border-amber-200"
                        />
                    </div>

                    <div>
                        <label className="text-amber-900 font-semibold">
                            Capacity
                        </label>
                        <input
                            name="capacity"
                            type="number"
                            placeholder="Example: 4"
                            className="input input-bordered w-full mt-2 border-amber-200"
                        />
                    </div>

                    <div>
                        <label className="text-amber-900 font-semibold">
                            Hourly Rate ($)
                        </label>
                        <input
                            name="hourlyRate"
                            type="number"
                            placeholder="Example: 5"
                            className="input input-bordered w-full mt-2 border-amber-200"
                        />
                    </div>

                    <div>

                        <label className="text-amber-900 font-semibold">
                            Amenities
                        </label>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">

                            {[
                                "Whiteboard",
                                "Projector",
                                "Wi-Fi",
                                "Power Outlets",
                                "Quiet Zone",
                                "Air Conditioning"
                            ].map((amenity) => (

                                <label
                                    key={amenity}
                                    className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-lg p-3"
                                >

                                    <input
                                        type="checkbox"
                                        name="amenities"
                                        value={amenity}
                                        className="checkbox checkbox-sm"
                                    />

                                    <span className="text-gray-700">
                                        {amenity}
                                    </span>

                                </label>

                            ))}

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="btn bg-amber-900 hover:bg-amber-800 text-white border-none mt-4"
                    >
                        Add Room
                    </button>

                </form>

            </div>

        </div>
    );
};

export default AddRoomPage;