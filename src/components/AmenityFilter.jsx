"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const amenitiesList = ["Wi-Fi", "Power Outlets", "Quiet Zone", "Air Conditioning", "Whiteboard", "Projector"];

const AmenityFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selected, setSelected] = useState(
        searchParams.get("amenities")?.split(',').filter(Boolean) || []
    );

    const toggleAmenity = (amenity) => {
        const updated = selected.includes(amenity)
            ? selected.filter(a => a !== amenity)
            : [...selected, amenity];

        setSelected(updated);

        const params = new URLSearchParams(searchParams.toString());
        if (updated.length > 0) {
            params.set("amenities", updated.join(','));
        } else {
            params.delete("amenities");
        }
        router.push(`/rooms?${params.toString()}`);
    };

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
                Amenities {selected.length > 0 && `(${selected.length})`}
                <svg className="h-[1em] opacity-75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7 10l5 5 5-5z" />
                </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-white border border-amber-100 rounded-box z-10 w-56 p-3 shadow-lg gap-1">
                {amenitiesList.map((amenity) => (
                    <li key={amenity}>
                        <label className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-amber-50">
                            <input
                                type="checkbox"
                                checked={selected.includes(amenity)}
                                onChange={() => toggleAmenity(amenity)}
                                className="checkbox checkbox-sm"
                            />
                            <span className="text-sm text-gray-700">{amenity}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AmenityFilter;