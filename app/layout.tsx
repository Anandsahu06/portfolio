import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingAnimation from "@/components/LoadingAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Premium 3D Portfolio | Web & AI Developer",
    description: "Modern 3D developer portfolio built with Next.js, Three.js, and Framer Motion.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.className} antialiased bg-slate-950 text-slate-50`}>
                <LoadingAnimation />
                <CustomCursor />
                <ScrollProgress />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
