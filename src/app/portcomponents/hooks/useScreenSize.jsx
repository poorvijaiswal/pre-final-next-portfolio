"use client"
import { useEffect, useState } from "react"

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {
        // Check if the code is running on the client-side
        if (typeof window !== "undefined") {
            // Initialize screen size
            setScreenSize({
                width: window.innerWidth,
                // height: window.innerHeight
            });

            const handleResize = () => {
                setScreenSize({
                    width: window.innerWidth,
                    // height: window.innerHeight
                })
            }

            window.addEventListener("resize", handleResize)
            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }
    }, [])

    return screenSize;
}

export default useScreenSize;
