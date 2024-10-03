import React from "react";
import './Sponsers.css'
import logoF1 from '../Sponsers Details/f1_logo.svg'
import pirelli from '../Sponsers Details/pirelli.png'
import aramco from '../Sponsers Details/aramco.png'
import rolex from '../Sponsers Details/rolex.png'
import msc from '../Sponsers Details/msc.png'
import salesforce from '../Sponsers Details/salesforce.png'
import crypto from '../Sponsers Details/crypto.png'
import dhl from '../Sponsers Details/dhl.png'
import quatar from '../Sponsers Details/qatar.png'
import aws from '../Sponsers Details/AWS GLOBAL.png'

import lasvegas from '../Sponsers Details/gold/las vegas.png'
import paramount from '../Sponsers Details/gold/Paramount.png'
import lenovo from './gold/lenovo.png'
import liquimoly from '../Sponsers Details/gold/liqui-moly.png'
import globant from '../Sponsers Details/gold/globant.png'

import  bet from '../Sponsers Details/silver/188.png'
import aggreko from '../Sponsers Details/silver/aggreko.png'
import amex from '../Sponsers Details/silver/Amex.png'
import bbs from '../Sponsers Details/silver/BBS.png'
import macdonalds from '../Sponsers Details/silver/mcdonalds.png'
import puma from '../Sponsers Details/silver/puma.png'
import tata from '../Sponsers Details/silver/TATA.png'
import workday from '../Sponsers Details/silver/Workday.png'




const Sponsers = () => {
    return(
        <div className="our-partners">
            <div className="sponser-section-title">
                <img className="f1-logo-sponser-section" src={logoF1} alt="" />
                Our Partners  </div>

            <div className="platinum-sponsers">
                <a href="https://www.rolex.com/en-us"><img className="platinum-sponsers-images" src={rolex} alt="Rolex Logo" /></a>
                <a href="https://www.pirelli.com/tyres/en-ww/motorsport/car/formula-1?utm_source=formula1.com&utm_medium=referral&utm_campaign=ww_motorsport_f1&utm_content=homepage"><img className="platinum-sponsers-images" src={pirelli} alt="" /></a>
                <a href="https://www.aramco.com/en"><img className="platinum-sponsers-images" src={aramco} alt="" /></a>
                <a href="https://www.dhl.com/lk-en/home.html?locale=true"><img className="platinum-sponsers-images" src={dhl} alt="" /></a>
                <a href="https://www.salesforce.com/ap/?ir=1"><img className="platinum-sponsers-images" src={salesforce} alt="" /></a>
                <a href="https://crypto.com/"><img className="platinum-sponsers-images" src={crypto} alt="" /></a>
                <a href="https://www.msccruises.com/int"><img className="platinum-sponsers-images" src={msc} alt="" /></a>
                <a href="https://www.qatarairways.com/en-lk/homepage.html"><img className="platinum-sponsers-images" src={quatar} alt="" /></a>
                <a href="https://aws.amazon.com/sports/f1/"><img className="platinum-sponsers-images" src={aws} alt="" /></a>

            </div>

            <div className="gold-sponsers">
                <a href="https://www.lasvegas.com/"><img className="platinum-sponsers-images" src={lasvegas} alt="" /></a>
                <a href="https://www.paramount.com/"><img className="platinum-sponsers-images" src={paramount} alt="" /></a>
                <a href="https://www.lenovo.com/us/en/?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOooF6IpKQfXrBFqqcvIQngwMJxV-H_s8OVQr9SEYFjefYDP5AGgl"><img className="platinum-sponsers-images" src={lenovo} alt="" /></a>
                <a href="https://www.liqui-moly.com/en/"><img className="platinum-sponsers-images" src={liquimoly} alt="" /></a>
                <a href="https://www.globant.com/"><img className="platinum-sponsers-images" src={globant} alt="" /></a>
                
            </div>


            <div className="silver-sponsers">
                <a href="https://www.188bet.com/en-gb">                <img className="platinum-sponsers-images" src={bet} alt="" /></a>
                <a href="https://www.workday.com/"><img className="platinum-sponsers-images" src={workday} alt="" /> </a>
                <a href="https://www.aggreko.com/en-us"><img className="platinum-sponsers-images" src={aggreko} alt="" /></a>
                <a href="https://www.americanexpress.com/"><img className="platinum-sponsers-images" src={amex} alt="" /></a>
                <a href="https://www.bbs-motorsport-gmbh.de/home/start-english/products/"><img className="platinum-sponsers-images" src={bbs} alt="" /></a>
                <a href="https://www.mcdonalds.com/us/en-us.html"><img className="platinum-sponsers-images" src={macdonalds} alt="" /></a>
                <a href="https://us.puma.com/us/en?srsltid=AfmBOoo6sP-J7_jYhsL6Y2THe_ctntIuJdGRBXg5MblIcBOT3I7ZtxKS"><img className="platinum-sponsers-images" src={puma} alt="" /></a>
                <a href="https://www.tatacommunications.com/"><img className="platinum-sponsers-images" src={tata} alt="" /></a>
               
            </div>


            <div className="main-links-section">
                <div className="main-links-section-column">
                    <div>Latest</div>
                    <div>What is F1</div>
                    <div>Video</div>
                    <div>Drivers</div>
                    <div>Teams</div>
                    <div>Schedule</div>
                </div>

                <div className="main-links-section-column">
                        <div>Results</div>
                        <div>2024 Season</div>
                        <div>Driver standings</div>
                        <div>Constructor standings</div>
                        <div>Archive 1950-2023</div>
                        <div>F1 Awards</div>
                </div>

                <div className="main-links-section-column">
                        <div>Gaming</div>
                        <div>ESports</div>
                        <div>F1 24</div>
                        <div>F1 Manager 24</div>
                        <div>F1 Play</div>
                        <div>F1 Mobile Racing</div>
                        <div>F1 Clash</div>
                </div>

                <div className="main-links-section-column">
                        <div>Live Timing</div>
                </div>

                <div className="main-links-section-column">
                        <div>Tickets</div>
                        <div>F1 Experience</div>
                        <div>Store</div>
                        <div>Paddock club</div>
                        <div>F1 TV</div>
                        <div>F1 Authentics</div>
                </div>

                <div className="main-links-section-column">
                        <div>Rules and Regulations</div>
                </div>
            </div>

            <div className="bottom-logo-and-wording">
                <div><img className="f1-logo-sponser-section" src={logoF1} alt="" /></div>
                <div> Formula One World Championship Limited (2003-2024)</div>
            </div>

        </div>
    )
} 
export default Sponsers

