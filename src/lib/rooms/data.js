export const fetchRooms = async(searchTerm = '', amenities = '') => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms?search=${searchTerm}&amenities=${amenities}`)
    const data = await res.json();
    return data || [];
}

export const fetchFeaturedRooms = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`)
    const data =await res.json();
    return data || [];
}