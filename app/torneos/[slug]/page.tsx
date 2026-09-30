import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import PageHeader from "@/components/layout/PageHeader/PageHeader";
import TorneoResultados from "@/components/sections/TorneoResultados/TorneoResultados";
import { formatFecha, getTorneo, torneos } from "@/data/torneos";

// Solo tienen página los torneos que ya tienen resultados cargados
export const dynamicParams = false;

export function generateStaticParams() {
  return torneos
    .filter((torneo) => torneo.resultados)
    .map((torneo) => ({ slug: torneo.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/torneos/[slug]">): Promise<Metadata> {
  const torneo = getTorneo((await params).slug);
  return {
    title: `${torneo?.nombre ?? "Torneo"} | Golf Country Club`,
    description: `Resultados del ${torneo?.nombre} por categoría.`,
  };
}

export default async function TorneoPage({
  params,
}: PageProps<"/torneos/[slug]">) {
  const torneo = getTorneo((await params).slug);
  if (!torneo?.resultados) notFound();

  const { completa } = formatFecha(torneo.fecha);

  return (
    <>
      <Navbar variant="page" />
      <main>
        <PageHeader
          eyebrow={`Resultados · ${completa}`}
          title={torneo.nombre}
          back={{ href: "/torneos", label: "Calendario de torneos" }}
        >
          {torneo.hoyos && `${torneo.hoyos} hoyos · `}
          {torneo.resultados.length} categorías
        </PageHeader>
        <TorneoResultados
          resultados={torneo.resultados}
          premios={torneo.premios}
        />
      </main>
      <Footer />
    </>
  );
}
