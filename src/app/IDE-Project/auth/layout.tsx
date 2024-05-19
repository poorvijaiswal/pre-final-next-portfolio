"use client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from "next/font/google";
// import "./IDEglobals.css";
import { RecoilRoot } from "recoil";
import clsx from 'clsx';

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
    <body className={clsx(inter.variable, "bgGradient text-foreground")}>
      <RecoilRoot>
        <ToastContainer />
        <div className={clsx(inter.variable, "bgGradient text-foreground")}>
          {children}
        </div>
      </RecoilRoot></body>
  );
}
