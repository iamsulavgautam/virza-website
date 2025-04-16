import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Virza | App Development, Web Development, AI & ML Automation Services",
  description:
    "Virza is a leading tech company providing custom App Development, Web Development, and AI/ML Automation solutions. Developed by Sulav Gautam. Let's build the future, together.",
  keywords: [
    "Virza",
    "Virza Tech",
    "App Development",
    "Web Development",
    "AI Automation",
    "ML Automation",
    "Custom Software Development",
    "Next.js Developer",
    "iamsulavgautam",
    "Sulav Gautam",
    "Nepal Tech Company",
    "Software Services",
    "Full Stack Development",
  ],
  authors: [
    { name: "Sulav Gautam", url: "https://github.com/iamsulavgautam" },
    { name: "Sulav Gautam", url: "https://facebook.com/iamsulavgautam" },
    { name: "Sulav Gautam", url: "https://instagram.com/iamsulavgautam" },
  ],
  creator: "Sulav Gautam",
  publisher: "Virza Tech",
  metadataBase: new URL("https://virza.tech"),
  icons: {
    icon: "/favicon.ico", // ✅ Uses your public/favicon.ico
  },
  openGraph: {
    title: "Virza | App, Web, and AI/ML Automation Experts",
    description:
      "Scale your business with cutting-edge App, Web, and AI/ML Automation services from Virza. Founded and developed by Sulav Gautam.",
    url: "https://virza.tech",
    siteName: "Virza",
    images: [
      {
        url: "https://virza.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Virza - App, Web, and AI Automation Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virza | App, Web, and AI/ML Automation Experts",
    description:
      "Virza delivers high-quality App Development, Web Development, and AI/ML solutions tailored for startups and enterprises.",
    creator: "@iamsulavgautam",
    images: ["https://virza.tech/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23262626' fill-opacity='0.5'%3E%3Cpath d='M0 39L39 0H40V1L1 40H0V39Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px",
        }}
      >
        {children}
      </body>
    </html>
  );
}
