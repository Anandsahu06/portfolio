import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingAnimation from "@/components/LoadingAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Anand Kand Sahu — SaaS & AI Developer",
    description: "Freelance developer building SaaS tools, AI web apps and automation systems for startups and creators.",
    icons: {
        icon: "/favicon.svg",
    },
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
