import { Providers } from "./providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Space_Grotesk } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata = {
  title: "SaltGIS",
  description: "SaltGIS builds AI-powered software for geospatial intelligence -turning satellite, sensor, and location data into decisions for agriculture, infrastructure, and urban planning.",
  keywords: ["AI", "Machine Learning", "GIS", "Geospatial Software", "Location Intelligence", "Spatial Data", "SaltGIS"],
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
    title: "SaltGIS",
    description: "AI-powered software for geospatial intelligence.",
    url: "https://saltgis.eu",
    siteName: "SaltGIS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaltGIS",
    description: "AI-powered software for geospatial intelligence.",
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

      <body
        className={`bg-[#FCFCFC] font-sans dark:bg-black ${inter.variable} ${spaceGrotesk.variable}`}
      >
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
 