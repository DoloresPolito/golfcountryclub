import type { Metadata } from "next";
import { Anton, IBM_Plex_Mono, Manrope } from "next/font/google";
import Parallax from "@/components/layout/Parallax/Parallax";
import ScrollReveal from "@/components/layout/ScrollReveal/ScrollReveal";
import SmoothScroll from "@/components/layout/SmoothScroll/SmoothScroll";
import "@/styles/globals.scss";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Golf Country Club",
  description: "Golf Country Club",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // El script de <head> agrega la clase `reveal` antes de pintar
    <html
      lang="es"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if("IntersectionObserver"in window)document.documentElement.classList.add("reveal")`,
          }}
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body>
        {children}
        <ScrollReveal />
        <Parallax />
        <SmoothScroll />
      </body>
    </html>
  );
}
