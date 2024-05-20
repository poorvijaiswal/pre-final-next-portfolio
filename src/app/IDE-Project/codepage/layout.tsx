"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/IDE-Components/Sidebar/Sidebar";
import Topbar from "@/IDE-Components/Topbar/Topbar";
import clsx from "clsx";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className={clsx(inter.variable, "bgGradient text-foreground")}>
                <div className="bg-color-dark-layer-2">
                    <Topbar />
                    <Sidebar />
                    <div className="ml-64 mt-[50px] px-2 py-3 w-[calc(100% - 16rem)] bg-color-dark-layer-2 text-color-dark-gray-7">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}