import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Mohamed - Computer & Communications Engineer",
  description: "Computer & Communications Engineering student interested in Artificial Intelligence, Machine Learning, Computer Vision, Data Science, and Robotics.",
keywords: [
  "Ali Mohamed",
  "Computer Engineering",
  "Communications Engineering",
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Data Science",
  "Robotics",
  "Python",
  "ROS 2",
  "YOLO",
  "Portfolio",
],
  authors: [{ name: "Ali Mohamed" }],
  creator: "Ali Mohamed",
  publisher: "Ali Mohamed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ali-mohamed.com",
    title: "Ali Mohamed - Computer & Communications Engineer",
    description: "Computer & Communications Engineering student interested in Artificial Intelligence, Machine Learning, Computer Vision, Data Science, and Robotics.",    siteName: "Ali Mohamed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Mohamed - Computer & Communications Engineer",
    description: "Computer & Communications Engineering student interested in Artificial Intelligence, Machine Learning, Computer Vision, Data Science, and Robotics.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ibiimemon.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
