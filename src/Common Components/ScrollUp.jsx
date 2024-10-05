import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollUp = () =>{
    const {pathname} = useLocation();

    useEffect (() =>{
        window.scrollTo(0,0); // Scrolls to the top whenever pathname changes
    }, [pathname]);


    return null;    
}

export default ScrollUp;