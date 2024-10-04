import React from 'react'
import '../What is f1/what is f1.css'
import Sponsers from "../../Common Components/Sponsers Details/Sponser";
import headImage from "../What is f1/Images/RocketScience_1920x1080.png"


const WhatIsF1 = () =>{

    return(
        <div className='what-is-f1-container'>
            <div className='header-section'>
                <div className='image-overlay'></div>
                <img className='head-image' src={headImage} alt="" />   

                <div className='components-within-header-image'>
                    <div className='heading-in-head-image'>What is f1 ?</div>
                    <div className='description-in-head-image'>"Timeouts? We don’t even have time for those. A big game? We race 24 times a year. This isn’t just a sport. This is Formula 1"</div>
                    <div className='click-here-button-in-header'><a href="https://www.youtube.com/watch?v=Q-jjZMMxbZs">Watch Video</a></div>
                </div>             

            </div>



            <div className="sponser-section-in-what-is-f1"><Sponsers /></div>
        </div>
    );
} 
export default WhatIsF1;