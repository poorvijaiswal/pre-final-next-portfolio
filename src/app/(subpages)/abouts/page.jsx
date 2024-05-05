"use client"
import { Canvas } from '@react-three/fiber'
import React from 'react'
import AboutModel from "../../../portmodels/AboutModel"

const Abouts = () => {
    return (
        <>
            <div>hey!!</div>
            <Canvas>
                <AboutModel />
            </Canvas>
        </>
    )
}

export default Abouts
