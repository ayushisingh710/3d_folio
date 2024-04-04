import Image from "next/image";
import bg from "../../public/background/home.jpg";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import { Earth } from "@/components/models/Earth";
import Astronaut1 from "@/components/models/Astronaut1";





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority sizes="100vw" src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25" />
    <div className="w-full h-screen">
    {/* navigation and 3d model */}
    <Navigation/>
    <RenderModel>
   
    
    <Earth/>
    <Astronaut1/>
    </RenderModel>
    </div>

    </main>
  );
}
