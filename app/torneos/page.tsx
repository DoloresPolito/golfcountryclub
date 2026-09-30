import type { Metadata } from "next";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import PageHeader from "@/components/layout/PageHeader/PageHeader";
import Torneos from "@/components/sections/Torneos/Torneos";
import { TEMPORADA } from "@/data/torneos";

export const metadata: Metadata = {
  title: "Torneos | Golf Country Club",
  description: `Calendario de torneos de golf ${TEMPORADA} y resultados por categoría.`,
};

// Se regenera una vez por día para que los torneos pasen solos a "Jugados"
export const revalidate = 86400;

export default function TorneosPage() {
  return (
    <>
      <Navbar variant="page" />
      <main>
        <PageHeader
          eyebrow={`Golf · Temporada ${TEMPORADA}`}
          title="Calendario de torneos"
          back={{ href: "/#golf", label: "Volver a golf" }}
        >
          Todos los torneos del año. Cuando termina cada fecha, publicamos los
          resultados por categoría.
        </PageHeader>
        <Torneos />
      </main>
      <Footer />
    </>
  );
}
