"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchBar = () => {
    const [search, setSearch] =useState();
    const router =useRouter();
    const searchParams =useSearchParams();

    const handleSearch =(e)=>{
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString())
            if(search){
                params.set("searchTerm", search)
            } else {
                params.delete("searchTerm")
            }
            router.push(`/rooms?${params.toString()}`)
    }
    return (
        <div>
            <div >
                <form onSubmit={handleSearch}>
                                    <label className="input bg-amber-50 focus-within:outline-none">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search" />
</label>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;