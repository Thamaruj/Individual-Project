import hamiltonImage from '../Drivers/Driver Images/hamilton.png'
import rusellImage from '../Drivers/Driver Images/russell.png'
import mercedesCar from '../Teams/Team Images/mercedes.png'
import mercedesLogo from '../Teams/Team Images/mercedes-logo.png'


import carlosImage from '../Drivers/Driver Images/leclerc.png'
import sainzImage from '../Drivers/Driver Images/sainz.png'
import ferrariCar from '../Teams/Team Images/ferrari.png'
import ferrariLogo from '../Teams/Team Images/ferrari-logo.png'


import piastriImage from '../Drivers/Driver Images/piastri.png'
import norrisImage from '../Drivers/Driver Images/norris.png'
import mcLarenCar from '../Teams/Team Images/mclaren.png'
import mcLarenLogo from '../Teams/Team Images/mclaren-logo.png'


import verstappenImage from '../Drivers/Driver Images/verstappen.png'
import perezImage from '../Drivers/Driver Images/perez.png'
import redBullCar from '../Teams/Team Images/red-bull-racing.png'
import redBullLogo from '../Teams/Team Images/red-bull-racing-logo.png'


import magnessenImage from '../Drivers/Driver Images/magnussen.png'
import hulkenbergImage from '../Drivers/Driver Images/hulkenberg.png'
import haasCar from '../Teams/Team Images/haas.png'
import haasLogo from '../Teams/Team Images/haas-logo.png'


import colopintoImage from '../Drivers/Driver Images/colapinto.png'
import albonImage from '../Drivers/Driver Images/albon.png'
import williamsCar from '../Teams/Team Images/williams.png'
import williamsLogo from '../Teams/Team Images/williams-logo.png'


import zhouImage from '../Drivers/Driver Images/zhou.png'
import bottasImage from '../Drivers/Driver Images/bottas.png'
import kickSauberCar from '../Teams/Team Images/kick-sauber.png'
import kickSauberLogo from '../Teams/Team Images/kick-sauber-logo.png'


import lawsonImage from '../Drivers/Driver Images/lawson.png'
import tsunodaImage from '../Drivers/Driver Images/tsunoda.png'
import rbCar from '../Teams/Team Images/rb.png'
import rbLogo from '../Teams/Team Images/rb-logo.png'


import alonsoImage from '../Drivers/Driver Images/alonso.png'
import strollImage from '../Drivers/Driver Images/stroll.png'
import astonMartinCar from '../Teams/Team Images/aston-martin.png'
import astonMartinLogo from '../Teams/Team Images/aston-martin-logo.png'


import oconImage from '../Drivers/Driver Images/ocon.png'
import gaslyImage from '../Drivers/Driver Images/gasly.png'
import alphineCar from '../Teams/Team Images/alpine.png'
import alphineLogo from '../Teams/Team Images/alpine-logo.png'

export const driverList = [
    {   
        driverId: 1,
        driverTeamId:1,
        driverNumber:44,
        team: 'Mercedes',
        teamImage: mercedesCar,
        teamLogo: mercedesLogo,
        driverName: 'Lewis Hamilton',
        driverImage:hamiltonImage,
        country: 'United Kingdom',
        podiums: 201,
        grandprixEntered: 350,
        worldChampisonships: 7,
        highestRaceFinish:1,
        highestRaceFinishTimes:10

    },
    {   
        driverId: 2,
        driverTeamId:1,
        driverNumber:63,
        team: 'Mercedes',
        teamImage: mercedesCar,
        teamLogo: mercedesLogo,
        driverName: 'George Rusell',
        driverImage:rusellImage,
        country: 'United Kingdom',
        podiums: 14,
        grandprixEntered: 122,
        worldChampisonships: 0,
        highestRaceFinish:1,
        highestRaceFinishTimes:2        
    },

    /*<<<<<<<<<<<<<<<<<<<<<<Ferrari >>>>>>>>>>>>>>>>>>>>>>>>>>>*/

    {
        driverId: 3,
        driverTeamId:2,
        driverNumber:16,
        team: 'Ferrari',
        teamImage: ferrariCar,
        teamLogo: ferrariLogo,
        driverName: 'Charles Leclerc',
        driverImage:carlosImage,
        country: 'Monaco',
        podiums: 39,
        grandprixEntered: 143,
        worldChampisonships: 0,
        highestRaceFinish:1,
        highestRaceFinishTimes:7
    },
    {
        driverId: 4,
        driverTeamId:2,
        team: 'Ferrari',
        driverNumber:55,
        teamImage: ferrariCar,
        teamLogo: ferrariLogo,
        driverName: 'Carlos Sainz',
        driverImage:sainzImage,
        country: 'Spain',
        podiums: 23,
        grandprixEntered: 202,
        worldChampisonships: 0,
        highestRaceFinish:1,
        highestRaceFinishTimes:3
    },

    /*<<<<<<<<<<<<<<<<<<<<<< Mclaren >>>>>>>>>>>>>>>>>>>>>>>>>>>*/

    {
        driverId: 5,
        driverTeamId:3,
        team: 'McLaren',
        driverNumber:81,
        teamImage: mcLarenCar,
        teamLogo: mcLarenLogo,
        driverName: 'Oscar Piastri',
        driverImage:piastriImage,
        country: 'Australia',
        podiums: 9,
        grandprixEntered: 40,
        worldChampisonships: 0,
        highestRaceFinish:1,
        highestRaceFinishTimes:2
    },
    {
        driverId: 6,
        driverTeamId:3,
        team: 'McLaren',
        driverNumber:4,
        teamImage: mcLarenCar,
        teamLogo: mcLarenLogo,
        driverName: 'Lando Norris',
        driverImage:norrisImage,
        country: 'United Kingdom',
        podiums: 24,
        grandprixEntered: 122,
        worldChampisonships: 0,
        highestRaceFinish:3,
        highestRaceFinishTimes:2
    },  

    /*<<<<<<<<<<<<<<<<<<<<<< RedBull >>>>>>>>>>>>>>>>>>>>>>>>>>>*/

    {
        driverId: 7,
        driverTeamId:4,
        team: 'Red Bull Racing',
        driverNumber:1,
        teamImage: redBullCar,
        teamLogo: redBullLogo,
        driverName: 'Max Verstappen',
        driverImage:verstappenImage,
        country: 'Netherlands',
        podiums: 109,
        grandprixEntered: 203,
        worldChampisonships: 3,
        highestRaceFinish:1,
        highestRaceFinishTimes:61
    },
    {
        driverId: 8,
        driverTeamId:4,
        team: 'Red Bull Racing',
        driverNumber:1,
        teamImage: redBullCar,
        teamLogo: redBullLogo,
        driverName: 'Sergio Perez',
        driverImage:perezImage,
        country: 'Mexico',
        podiums: 39,
        grandprixEntered: 276,
        worldChampisonships: 0,
        highestRaceFinish:1,
        highestRaceFinishTimes:6
    },

    /*<<<<<<<<<<<<<<<<<<<<<< Haas >>>>>>>>>>>>>>>>>>>>>>>>>>>*/
    {
        driverId: 9,
        driverTeamId:5,
        team: 'Haas',
        driverNumber:20,
        teamImage: haasCar,
        teamLogo: haasLogo,
        driverName: 'Nico Hulkenberg',
        driverImage:hulkenbergImage,
        country: 'Germany',
        podiums: 0,
        grandprixEntered: 224,
        worldChampisonships: 0,
        highestRaceFinish:4,
        highestRaceFinishTimes:3
    },
    {
        driverId: 10,
        driverTeamId:5,
        team: 'Haas',
        driverNumber:27,
        teamImage: haasCar,
        teamLogo: haasLogo,
        driverName: 'Kevin Magnessen',
        driverImage:magnessenImage,
        country: 'Denmark',
        podiums: 1,
        grandprixEntered: 181,
        worldChampisonships: 0,
        highestRaceFinish:2,
        highestRaceFinishTimes:1
    },

    /*<<<<<<<<<<<<<<<<<<<<<< Williams >>>>>>>>>>>>>>>>>>>>>>>>>>>*/

    {
        driverId: 11,
        driverTeamId:6,
        team: 'Williams Racing',
        driverNumber:23,
        teamImage: williamsCar,
        teamLogo: williamsLogo,
        driverName: 'Alex Albon',
        driverImage:albonImage,
        country: 'Thailand',
        podiums: 2,
        grandprixEntered: 99,
        worldChampisonships: 0,
        highestRaceFinish:3,
        highestRaceFinishTimes:2
    },
    {
        driverId: 12,
        driverTeamId:6,
        team: 'Williams Racing',
        driverNumber:43,
        teamImage: williamsCar,
        teamLogo: williamsLogo,
        driverName: 'Franco Colapinto',
        driverImage:colopintoImage,
        country: 'Argentina',
        podiums: 0,
        grandprixEntered: 3,
        worldChampisonships: 0,
        highestRaceFinish:8,
        highestRaceFinishTimes:1
    },

    /*<<<<<<<<<<<<<<<<<<<<<< Kick Sauber >>>>>>>>>>>>>>>>>>>>>>>>>>>*/    

    {
        driverId: 13,
        driverTeamId:7,
        team: 'Kick Sauber',
        driverNumber:77,
        teamImage: kickSauberCar,
        teamLogo: kickSauberLogo,
        driverName: 'Franco Colapinto',
        driverImage:bottasImage,
        country: 'Finland',
        podiums: 67,
        grandprixEntered: 240,
        worldChampisonships: 0,
        highestRaceFinish:1,
        highestRaceFinishTimes:10
    },
    {
        driverId: 14,
        driverTeamId:7,
        team: 'Kick Sauber',
        driverNumber:24,
        teamImage: kickSauberCar,
        teamLogo: kickSauberLogo,
        driverName: 'Zhou Guanya',
        driverImage:zhouImage,
        country: 'China',
        podiums: 0,
        grandprixEntered: 62,
        worldChampisonships: 0,
        highestRaceFinish:8,
        highestRaceFinishTimes:5
    },

    /*<<<<<<<<<<<<<<<<<<<<<< RB >>>>>>>>>>>>>>>>>>>>>>>>>>>*/    

    {
        driverId: 15,
        driverTeamId:8,
        team: 'RB',
        driverNumber:22,
        teamImage: rbCar,
        teamLogo: rbLogo,
        driverName: 'Yuki Tsunoda',
        driverImage:tsunodaImage,
        country: 'Japan',
        podiums: 0,
        grandprixEntered: 84,
        worldChampisonships: 0,
        highestRaceFinish:4,
        highestRaceFinishTimes:1
    },
    {
        driverId: 16,
        driverTeamId:8,
        team: 'RB',
        driverNumber:30,
        teamImage: rbCar,
        teamLogo: rbLogo,
        driverName: 'Liam Lawson',
        driverImage:lawsonImage,
        country: 'New Zealand',
        podiums: 0,
        grandprixEntered: 5,
        worldChampisonships: 0,
        highestRaceFinish:10,
        highestRaceFinishTimes:1
    },

    /*<<<<<<<<<<<<<<<<<<<<<< Aston Martin >>>>>>>>>>>>>>>>>>>>>>>>>>>*/    
    {
        driverId: 17,
        driverTeamId:9,
        team: 'Aston Martin',
        driverNumber:18,
        teamImage: astonMartinCar,
        teamLogo: astonMartinLogo,
        driverName: 'Lance Stroll',
        driverImage:strollImage,
        country: 'Canada',
        podiums: 3,
        grandprixEntered: 161,
        worldChampisonships: 0,
        highestRaceFinish:3,
        highestRaceFinishTimes:3
    },
    {
        driverId: 18,
        driverTeamId:9,
        team: 'Aston Martin',
        driverNumber:14,
        teamImage: astonMartinCar,
        teamLogo: astonMartinLogo,
        driverName: 'Fernando Alonso',
        driverImage:alonsoImage,
        country: 'Spain',
        podiums: 106,
        grandprixEntered: 161,
        worldChampisonships: 2,
        highestRaceFinish:1,
        highestRaceFinishTimes:32
    },


    /*<<<<<<<<<<<<<<<<<<<<<< Alphine >>>>>>>>>>>>>>>>>>>>>>>>>>>*/      

    {
        driverId: 19,
        driverTeamId:10,
        team: 'Alphine',
        driverNumber:31,
        teamImage: alphineCar,
        teamLogo: alphineLogo,
        driverName: 'Esteban Ocon',
        driverImage:oconImage,
        country: 'France',
        podiums: 3,
        grandprixEntered: 151,
        worldChampisonships: 0,
        highestRaceFinish:1,
        highestRaceFinishTimes:1
    },
    {
        driverId: 20,
        driverTeamId:10,
        team: 'Alphine',
        driverNumber:31,
        teamImage: alphineCar,
        teamLogo: alphineLogo,
        driverName: 'Pierre Gasly',
        driverImage:gaslyImage,
        country: 'France',
        podiums: 4,
        grandprixEntered: 148,
        worldChampisonships: 0,
        highestRaceFinish:1,
        highestRaceFinishTimes:1
    },

];







