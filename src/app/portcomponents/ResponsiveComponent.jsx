"use client";

import React from "react";
import useScreenSize from "./hooks/useScreenSize";

const ResponsiveComponent = ({ children }) => {
    const size = useScreenSize();
    // console.log(size, "responsive size");
    return <>
        {children(size)}
    </>;
}

export default ResponsiveComponent;
