import React from "react";
import './Main page.css';
import { Link } from "react-router-dom";
import Sponsers from "../../Common Components/Sponsers Details/Sponser";
import riccardoWin from "../Main Page/Images/Riccardo.png"
import riccardoVideo from "../Main Page/Videos/Riccardo_vid.mp4"
import adrianVideo from "../Main Page/Videos/Adrian.mp4"
import alphineVideo from "../Main Page/Videos/Alphine.mp4"
import kimiAntoneli from "../Main Page/Images/Kimi.png"
import riccardoCollage from "../Main Page/Images/ricciardo_vid_26092024.png"
import austinTrack from "../Main Page/Images/Austin.png"
import singaporeTrack from "../Main Page/Images/Singapore.png"
import adrianInAston from "../Main Page/Images/AdrianPhoto.png"
import ferrari from "../Main Page/Images/ferrari.png"

const MainPage = () => {

    return(
        <div>
            <div className="content-container-without-sponsers-and-driver-standings">
                <div className="top-latest-updates-container">
                    <div className="latest-updates-top-one-left">
                        <div className="latest-updates-top-one-left-heading">"It Wasnt't the greatest decision of my life"- Riccardo reflects on his sliding doors move away from Red Bull in 2018</div>
                        <div><img className="latest-updates-top-one-left-image" src={riccardoWin} alt="" /></div>
                        <div>I can certainly look back on it and say, ‘okay’… I think at the time obviously in my head everything made sense, but was it the best decision of my career? Of course you could argue, ‘no it wasn’t. Look, I’m okay with that. It’s one of those ones. Also, there’s no guarantee that if I stayed I would have done amazing and won this and that, so you never know But, of course, I’m not going to stand here and say that was the greatest decision of my life, but you live and you learn, and obviously it eventually brought me back into the family.</div>
                    </div>


                    <div className="latest-updates-top-one-right">
                        <div className="latest-updates-top-one-right-slot">
                            <div><video className="video-slot" autoPlay loop muted playsInline src={riccardoVideo}></video></div>
                            <div className="video-slot-description">How one-of-a-kind Ricciardo left a permanent mark on F1, both on and off the track</div>
                        </div>

                        <div className="latest-updates-top-one-right-slot">
                            <div><video className="video-slot" autoPlay loop muted playsInline src={adrianVideo}></video></div>
                            <div className="video-slot-description">From March to Red Bull – How long did it take Newey to make an impact at his previous F1 teams?</div>
                        </div>

                        <div className="latest-updates-top-one-right-slot">
                            <div><video className="video-slot" autoPlay loop muted playsInline src={alphineVideo}></video></div>
                            <div className="video-slot-description">ANALYSIS: What next for Alpine after Renault announce the end of F1 works engine programme?</div>
                        </div>

                        <div className="latest-updates-top-one-right-slot">
                            <div><video className="video-slot" autoPlay loop muted playsInline src={kimiAntoneli}></video></div>
                            <div className="video-slot-description">Antonelli ready to deal with F1 pressure – but insists he doesn’t want to be seen as Hamilton’s ‘replacement</div>
                        </div>


                    </div>
                </div>

                <div className="middle-latest-updates-container">

                    <div className="middle-latest-updates-sub-container-one">

                        <div className="sub-container-one-quote">
                            <div>Daniel Ricciardo and RB part ways</div>
                            <div className="sub-container-one-quote-varient-1">Take a look back at the highs and lows of Daniel Ricciardo's career, one of the most popular and exciting drivers ever to grace the sport
                            <div ><a href="https://www.youtube.com/watch?v=6E6wxQE2Nz4"><button className="video-play-button">Watch now</button></a></div>
                            </div>
                            
                        </div>

                        <div className="sub-container-one-image-box"><img className="sub-container-one-image" src={riccardoCollage} alt="" /></div>

                    </div>

                </div>


                <div className="middle-latest-updates-container">

                    <div className="middle-latest-updates-sub-container-one">

                        <div className="sub-container-one-quote">
                            <div>The best moments from the streets of Singapore</div>
                            <div className="sub-container-one-quote-varient-1"> The 2024 Singapore Grand Prix showcased thrilling battles and strategic brilliance on the challenging Marina Bay circuit. Max Verstappen’s dominant win, combined with dramatic overtakes and intense midfield action, made it a spectacular night of Formula 1 racing
                            <div ><a href="https://www.youtube.com/watch?v=slCskHrI_Vg&t=1s"><button className="video-play-button">Watch now</button></a></div>
                            </div>
                            
                        </div>

                        <div className="sub-container-one-image-box"><img className="sub-container-one-image" src={singaporeTrack} alt="" /></div>
                    </div>

                </div>


                <div className="middle-latest-updates-container">

                    <div className="middle-latest-updates-sub-container-one">

                        <div className="sub-container-one-quote">
                            <div>Adrian Newey Joins Aston Martin</div>
                            <div className="sub-container-one-quote-varient-1"> A bold move, Lawrence Stroll has brought legendary designer Adrian Newey from Red Bull to Aston Martin. Known for his innovative aerodynamic designs, Newey’s arrival marks a significant step towards enhancing the team’s competitiveness in Formula 1 and reshaping their future on the grid
                            <div ><a href="https://www.youtube.com/watch?v=geEwok-Osfk"><button className="video-play-button">Watch now</button></a></div>
                            </div>
                            
                        </div>

                        <div className="sub-container-one-image-box"><img className="sub-container-one-image" src={adrianInAston} alt="" /></div>
                    </div>

                </div>


                <div className="middle-latest-updates-container">

                    <div className="middle-latest-updates-sub-container-one">

                        <div className="sub-container-one-quote">
                            <div>Sainz sets a goal before leaving Ferrari</div>
                            <div className="sub-container-one-quote-varient-1"> ‘It’s at the top of my list’ – Sainz sets out final goal as a Ferrari driver before moving to Williams.“It’s in my head, not because I’m leaving at the end of the year with Ferrari, but because I always try to win every race that I go to.
                            <div ><a href="https://www.youtube.com/watch?v=Yvq0fxb_mL4"><button className="video-play-button">Watch now</button></a></div>
                            </div>
                            
                        </div>

                        <div className="sub-container-one-image-box"><img className="sub-container-one-image" src={ferrari} alt="" /></div>
                    </div>

                </div>


          

            </div>


            <div className="sponser-section"><Sponsers /></div>
        </div>

    )
}

export default MainPage ;