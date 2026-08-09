import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Keron Premier Properties | Luxury Real Estate Kenya",
  description:
    "Keron Premier Properties connects buyers, renters, investors and short-stay guests to premium homes, apartments, land and commercial property across Kenya.",
  metadataBase: new URL("https://keronpremierproperties.com"),
  openGraph: {
    title: "Keron Premier Properties",
    description:
      "Where Dreams Find an Address — premium real estate and luxury short stay bookings across Kenya.",
    type: "website",
    url: "https://keronpremierproperties.com",
    siteName: "Keron Premier Properties",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keron Premier Properties",
    description:
      "Luxury property sales, rentals and short-stay stays in Mombasa, Diani, Vipingo and beyond.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full bg-[radial-gradient(circle_at_top,_rgba(4,29,82,.18),_transparent_30%),linear-gradient(180deg,_#fff,_#f8f9fa)] text-slate-950 font-sans">
        {children}
      </body>
    </html>
  );
}
