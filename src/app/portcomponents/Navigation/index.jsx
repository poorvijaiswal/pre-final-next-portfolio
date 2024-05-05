"use client";
import { BtnList } from '@/app/data';
import React from 'react'
import NavButton from './NavButton';

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;
    return (
        <div className='fixed h-screen w-full flex items-center justify-center -left-72'>
            <div className='flex w-max items-center justify-center relative animate-spin-slow hover:pause group'>
                {
                    BtnList.map((btn, index) => {
                        const angleRad = (index * angleIncrement * Math.PI) / 180;
                        const radius = `calc(20vw - 1rem)`;
                        const x = `calc(${radius}*${Math.cos(angleRad)})`;
                        const y = `calc(${radius}*${Math.sin(angleRad)})`;
                        // console.log(index, angleRad, radius, x, y);

                        return <NavButton key={btn.label} x={x} y={y} {...btn} />
                    })
                }
            </div>
        </div>
    )
}

export default Navigation
