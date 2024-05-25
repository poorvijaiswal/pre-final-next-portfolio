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
    <>
      <main className="flex max-h-screen flex-col items-center justify-between relative">
        {/* <Image priority={true} src={bg} alt="BackgroundImage" fill className="w-full h-screen object-cover object-center " /> */}
        <FireFliesBg />
        <div className="w-full h-screen z-50 relative ">
          <div className="text-center md:hidden">
            <span className=" py-4 text-2xl lg:text-3xl tracking-wide md:text-2xl">HELLO WORLD!!</span>
            <span className="blog-title-emoji text-2xl lg:text-3xl md:text-2xl py-4">👋</span><br />
          </div>
          <Navigation />
          {/* <Suspense fallback={null} unstable_expectedLoadTime={8}> */}
          <RenderModel className={"w-full h-screen"}>
            <HomeModel />
          </RenderModel>
          {/* </Suspense> */}
        </div>
        <div className="md:absolute md:top-1/3 z-50 min-w-80 md:right-2 -translate-y-1/2 bg-transparent p-4 hidden md:block lg:left-[680px] xl:left-[780px]">
          <div className="py-6">
            <span className=" py-4 text-2xl lg:text-3xl tracking-wide md:text-2xl">HELLO WORLD!!</span>
            <span className="blog-title-emoji text-2xl lg:text-3xl md:text-2xl py-4">👋</span><br />
          </div>
          <div className='mt-4'>
            <span className="tracking-wide py-4 text-4xl md:text-3xl">I&apos;m </span>
            <span><Link href={'/about'} className="tracking-wide cursor-pointer py-4 text-4xl md:text-3xl text-color-brand-orange font-extrabold">Pawan Kumar Gupta</Link></span>
          </div>
          <div>
            <h1 className=" py-4 text-3xl text-color-brand-orange h-2 md:text-2xl"><span className='text-3xl text-white'>I am a</span> {typeEffect}<Cursor cursorColor='text-color-brand-orange' /></h1>
          </div>
        </div>
      </main >
      <div className=" w-full h-52 min-w-80 bg-transparent p-4 block md:hidden text-center mb-8">
        <div className='mt-4'>
          <span className="tracking-wide py-4 text-3xl md:text-3xl">I&apos;m </span>
          <span><Link href={'/about'} className="tracking-wide cursor-pointer py-4 text-3xl md:text-3xl text-color-brand-orange font-extrabold">Pawan Kumar Gupta</Link></span>
        </div>
        <div>
          <h1 className=" py-4 text-2xl text-color-brand-orange h-2 md:text-2xl"><span className='text-2xl text-white'>I am a</span> {typeEffect}<Cursor cursorColor='text-color-brand-orange' /></h1>
        </div>
      </div>
    </>

  );
}