import Additional1 from "@/components/Addional1";

import Banner from "@/components/Banner";
import FeaturedRooms from "@/components/FeaturedRooms";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Banner></Banner>
    <FeaturedRooms></FeaturedRooms>
    <Stats></Stats>
    <Additional1></Additional1>
    
  </div>
  );
}
