"use client";
import { BtnList } from '@/app/data';
import React from 'react'
import NavButton from './NavButton';
import useScreenSize from '../hooks/useScreenSize';
import ResponsiveComponent from '../ResponsiveComponent'

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;
    const size = useScreenSize();
    // console.log(size, "screen");
    const isLargeScreen = size.width > 1024;
    const isMediumScreen = size.width >= 768 && size.width <= 1024;
    const isSmallScreen = size.width < 768;
    return (
        <div className='fixed h-screen w-full flex items-center justify-center md:-left-60 lg:-left-72 -left-0'>

            <ResponsiveComponent>

                {({ width }) => {
                    // console.log(width, "width")
                    return width && width >= 768 ?
                        <div className='flex w-max items-center justify-center relative animate-spin-slow hover:pause group'>
                            {
                                BtnList.map((btn, index) => {
                                    const angleRad = (index * angleIncrement * Math.PI) / 180;
                                    const radius = isLargeScreen ? `calc(20vw - 1rem)` : isMediumScreen ? `calc(27vw - 2rem)` : isSmallScreen ? `calc(40vw - 1rem)` : '';
                                    const x = `calc(${radius}*${Math.cos(angleRad)})`;
                                    const y = `calc(${radius}*${Math.sin(angleRad)})`;
                                    // console.log(index, angleRad, radius, x, y);

                                    return <NavButton key={btn.label} x={x} y={y} {...btn} />
                                })
                            }
                        </div> : <>
                            <div className='flex justify-between items-center w-full px-2 sm:px-5'>
                                <div className='flex flex-col w-max items-start space-y-6 justify-center relative group'>
                                    {
                                        BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                                            const angleRad = (index * angleIncrement * Math.PI) / 180;
                                            const radius = isLargeScreen ? `calc(20vw - 1rem)` : isMediumScreen ? `calc(27vw - 2rem)` : isSmallScreen ? `calc(40vw - 1rem)` : '';
                                            const x = `calc(${radius}*${Math.cos(angleRad)})`;
                                            const y = `calc(${radius}*${Math.sin(angleRad)})`;
                                            // console.log(index, angleRad, radius, x, y);

                                            return <NavButton key={btn.label} x={x} y={y} {...btn} />
                                        })
                                    }
                                </div>
                                <div className='flex flex-col w-max items-center space-y-6 justify-end relative hover:pause group'>
                                    {
                                        BtnList.slice(BtnList.length / 2, BtnList.length).map((btn, index) => {
                                            const angleRad = (index * angleIncrement * Math.PI) / 180;
                                            const radius = isLargeScreen ? `calc(20vw - 1rem)` : isMediumScreen ? `calc(27vw - 2rem)` : isSmallScreen ? `calc(40vw - 1rem)` : '';
                                            const x = `calc(${radius}*${Math.cos(angleRad)})`;
                                            const y = `calc(${radius}*${Math.sin(angleRad)})`;
                                            // console.log(index, angleRad, radius, x, y);

                                            return <NavButton key={btn.label} x={x} y={y} {...btn} />
                                        })
                                    }
                                </div>
                            </div>
                        </>

                }}

            </ResponsiveComponent>
        </div>
    )
}

export default Navigation
