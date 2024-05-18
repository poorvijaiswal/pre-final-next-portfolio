"use client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from "next/font/google";
import "./IDEglobals.css";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <ToastContainer />
      <div className={inter.className}>
        {children}
      </div>
    </RecoilRoot>
  );
}
