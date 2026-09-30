import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import Brooklyn from "@/components/sections/Brooklyn/Brooklyn";
import Colonia from "@/components/sections/Colonia/Colonia";
import ElClub from "@/components/sections/ElClub/ElClub";
import Golf from "@/components/sections/Golf/Golf";
import Hero from "@/components/sections/Hero/Hero";
import Quincho from "@/components/sections/Quincho/Quincho";
import Socios from "@/components/sections/Socios/Socios";
import Pileta from "@/components/sections/Pileta/Pileta";
import Padel from "@/components/sections/Padel/Padel";

// Se regenera una vez por día para que "Próximos torneos" se actualice solo
export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <main>
        <ElClub />
        <Golf />
        <Padel />
        <Pileta />
        <Brooklyn />
        <Colonia />
        <Socios />
        <Quincho />
      </main>
      <Footer />
    </>
  );
}
