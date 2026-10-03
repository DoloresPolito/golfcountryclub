import type { Metadata } from "next";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import PageHeader from "@/components/layout/PageHeader/PageHeader";
import Comision from "@/components/sections/Comision/Comision";
import { PERIODO } from "@/data/comision";

export const metadata: Metadata = {
  title: "Comisión directiva | Golf Country Club",
  description: `Integrantes de la comisión directiva del Golf Country Club, período ${PERIODO}.`,
};

export default function ComisionPage() {
  return (
    <>
      <Navbar variant="page" />
      <main>
        <PageHeader
          eyebrow={`El club · Período ${PERIODO}`}
          title="Comisión directiva"
          back={{ href: "/#el-club", label: "Volver al club" }}
        >
          Las personas que llevan adelante el club y trabajan para que
          socios y visitantes lo disfruten todo el año.
        </PageHeader>
        <Comision />
      </main>
      <Footer />
    </>
  );
}
