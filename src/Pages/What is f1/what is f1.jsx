import React from 'react'
import '../What is f1/what is f1.css'
import Sponsers from "../../Common Components/Sponsers Details/Sponser";
import headImage from "../What is f1/Images/RocketScience_1920x1080.png"
import thisIsFormula1Video from ".//Videos/This Is Formula 1_1080pHF.mp4"
import meetDrivers from "./Videos/Meet The 2024 Formula 1 Drivers_360P.mp4"


const WhatIsF1 = () =>{

    return(
        <div className='what-is-f1-container'>
            <div className='header-section'>
                <div className='image-overlay'></div>
                <img className='head-image' src={headImage} alt="" />   

                <div className='components-within-header-image'>
                    <div className='heading-in-head-image'>What is F1 ?</div>
                    <div className='description-in-head-image'>"Timeouts? We don’t even have time for those. A big game? We race 24 times a year. This isn’t just an ordinary sport. This is Formula 1"</div>
                    <div className='click-here-button-in-header'><a href="https://www.youtube.com/watch?v=Q-jjZMMxbZs">Watch Video</a></div>
                </div>             

            </div>

            <div className='what-is-f1-contents-main-container'>

                <div className='what-is-f1-contents-sub-container'>
                    <div className='sub-container-variant1'>
                        <div className='sub-container-variant1-left'>
                            <div className='sub-container-variant1-left-heading'>Wake up! It's Race Time
                                <div className='sub-container-variant1-left-sub--heading'>"This isn't for ordinary humans—it's a realm where engines scream and surfaces blaze as hot as the sun. Defying the laws of physics, they call it a sport, but this is Formula 1!" </div>
                            </div>
                        </div>
                        <div className='sub-container-variant1-right'>
                            <div>
                                <video className='sub-container-variant1-right-video' src={thisIsFormula1Video} controls autoPlay muted playsInline loop></video>
                            </div>
                        </div>
                    </div>

                        <div className='sub-container-variant1-bottom'>
                            <div className='sub-container-variant1-bottom-descriptions'>
                                <div>
                                    Formula 1, often referred to as F1, is the pinnacle of motorsport, where cutting-edge technology meets unparalleled speed. The thrill lies not only in the high-speed races but also in the intricate strategies and team dynamics. With races held in stunning locations from Monaco to Suzuka, F1 captivates millions of fans worldwide. It’s more than just a sport; it’s a community united by a shared passion for speed and skill
                                </div>

                                <div>
                                F1 is not just about watching cars race; it’s about experiencing the culture, the excitement, and the emotion of the sport. Fans engage with F1 through social media, live events, and fan zones, creating a vibrant community that celebrates each race together. The connection between fans and drivers adds an emotional layer to every competition
                                </div>

                                <div>
                                It is increasingly embracing diversity, with initiatives aimed at promoting inclusion across all levels of the sport. From driver academies to engineering roles, F1 is committed to creating opportunities for underrepresented groups, ensuring that the sport reflects the global community of fans it serves
                                </div>
                            </div>


                        </div>

                    <div className='sub-container-variant2'>
                        <div className='sub-container-variant2-left'>
                            <div>
                                <video className='sub-container-variant2-left-video' src={meetDrivers} controls playsInline></video>                                
                            </div>
                        </div>

                        <div className='sub-container-variant2-right'>
                            <div className='sub-container-variant2-right-heading'>Meet the Drivers
                                <div className='sub-container-variant2-right-sub--heading'>Extreme g-forces. Daring decisions made in the blink of an eye – and at 370km/h. Dramatically battling to be the best, Formula 1 drivers are more like fighter pilots than sportspeople. Only 20 get the chance to compete, and they push themselves – and their incredible machines – to the very limit</div>
                            </div>
                        </div>
                    </div>

                        <div className='sub-container-variant2-bottom'>
                            <div className='sub-container-variant1-bottom-descriptions'>
                                <div>
                                    Formula 1 drivers are among the most elite athletes in the world, blending precision, skill, and split-second decision-making. Each race weekend, they push themselves and their cars to the absolute limit, enduring extreme G-forces and maintaining intense focus through every corner. From rookies aiming to make their mark to world champions defending their legacy, F1 drivers represent the pinnacle of motorsport talent
                                </div>

                                <div>
                                    F1 drivers are the embodiment of speed, precision, and determination. Behind the wheel of the most advanced racing machines on the planet, they navigate tight corners, high-speed straights, and ever-changing conditions with unparalleled skill. It takes years of dedication and a unique combination of mental and physical strength to become a Formula 1 driver
                                </div>

                                <div>
                                    These drivers are not just skilled behind the wheel; they are supreme athletes. The physical demands of driving a Formula 1 car at high speeds—dealing with intense G-forces, heat, and the need for razor-sharp reflexes—require drivers to maintain peak physical and mental fitness year-round. Their training regimens rival those of any top athlete
                                </div>
                            </div>


                        </div>

                </div>

            </div>



            <div className="sponser-section-in-what-is-f1"><Sponsers /></div>
        </div>
    );
} 
export default WhatIsF1;