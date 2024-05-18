"use client";
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'
import CanvasLoader from '../../portmodels/Loader';

const RenderModel = ({ children, className }) => {
    return (
        <div className=' w-full h-full'>
            <Canvas
                className={clsx("w-screen -z-10 h-screen relative", className)}
            >
                <Suspense fallback={<CanvasLoader />}>
                    {children}
                </Suspense>
                <Environment preset='dawn' />
            </Canvas>
        </div>
    )
}

export default RenderModel
