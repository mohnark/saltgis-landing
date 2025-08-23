import { Providers } from "./providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SaltGIS — Software for Advanced Location Technologies in Geographic Information Systems",
  description: "SaltGIS develops innovative software that transforms complex spatial data into clear, actionable intelligence. Our mission is to equip organizations with tools that make land, infrastructure, and resource management smarter, faster, and more precise.",
  keywords: ["GIS", "Geographic Information Systems", "Location Intelligence", "Spatial Data", "SaltGIS", "Geospatial Software"],
  authors: [{ name: "SaltGIS" }],
  creator: "SaltGIS",
  publisher: "SaltGIS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://saltgis.eu"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/LogoRectangleClipped.png",
    shortcut: "/images/LogoRectangleClipped.png",
    apple: "/images/LogoRectangleClipped.png",
  },
  openGraph: {
    title: "SaltGIS — Software for Advanced Location Technologies in Geographic Information Systems",
    description: "SaltGIS develops innovative software that transforms complex spatial data into clear, actionable intelligence.",
    url: "https://saltgis.eu",
    siteName: "SaltGIS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaltGIS — Software for Advanced Location Technologies in Geographic Information Systems",
    description: "SaltGIS develops innovative software that transforms complex spatial data into clear, actionable intelligence.",
    creator: "@saltgis",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
