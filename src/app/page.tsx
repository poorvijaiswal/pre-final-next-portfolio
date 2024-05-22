"use client"
import Navigation from '../app/portcomponents/Navigation/index'
import RenderModel from '../app/portcomponents/RenderModel'
const HomeModel = React.lazy(() => import('../portmodels/homemodel'));
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import FireFliesBg from "./portcomponents/FireFliesBg";
import React, { Suspense } from "react";



export default function Home() {
  const [typeEffect] = useTypewriter({
    words: ['Web Developer', 'Web Designer', 'UI/UX Designer'],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 40,
    delaySpeed: 1500,
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* <Image priority={true} src={bg} alt="BackgroundImage" fill className="w-full h-screen object-cover object-center " /> */}
      <FireFliesBg />
      <div className="w-full h-screen z-50 ">
        <Navigation />
        {/* <Suspense fallback={null} unstable_expectedLoadTime={8}> */}
        <RenderModel className={"w-full h-full"}>
          <HomeModel />
        </RenderModel>
        {/* </Suspense> */}
      </div>
      <div className="absolute top-1/3 z-50 min-w-80 left-[780px] -translate-y-1/2 bg-transparent p-4">
        <div className="py-6">
          <span className=" py-4 text-3xl tracking-wide">HELLO WORLD!!</span>
          <span className="blog-title-emoji text-3xl py-4">👋</span><br />
        </div>
        <div className='mt-4'>
          <span className="tracking-wide py-4 text-4xl">I&apos;m </span>
          <span><Link href={'/about'} className="tracking-wide cursor-pointer py-4 text-4xl text-color-brand-orange font-extrabold">Pawan Kumar Gupta</Link></span>
        </div>
        <div>
          <h1 className=" py-4 text-3xl text-color-brand-orange h-2"><span className='text-3xl text-white'>I am a</span> {typeEffect}<Cursor cursorColor='text-color-brand-orange' /></h1>
        </div>
      </div>
    </main >
  );
}