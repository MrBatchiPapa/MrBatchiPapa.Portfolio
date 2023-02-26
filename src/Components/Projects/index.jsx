import React, { useEffect } from 'react'
import './index.css'
import Aos from "aos";
import "aos/dist/aos.css";


const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])


    return (
        <div className='ProjectContainer'>
            <h1>Here are my projects</h1>
            <div data-aos="fade-up" className='Box1'>
                <img src={require('../../Assets/quickDraw.jpg')} />
                <div className="information">
                    <h2 class="projectTitle">Quick Draw</h2>
                    <br /><br />
                    <p class="projectBody">Family friendly drawing game based off of Google's Quick draw. Designed to stir up the artistic skills of teenages as well as keep them entertained through a variety of unique gamemodes including Standard, Blitz, Zen and Hidden mode. <br /><br />Coded in Java and styled using CSS </p>
                </div>
            </div>

            <div data-aos="fade-up" className='Box1'>
                <img src={require('../../Assets/productify.jpg')} />
                <div className="information">
                    <h2 class="projectTitle">Productify</h2>
                    <br /><br />
                    <p class="projectBody">Day to day productivity and planning app designed on figma and coded up using HTML, CSS and JavaScript. Presented with a task to design an application that provides happiness, this application aims to do so by reducing the stress put on students by helping them manage their schedule and spacing their work evenly by providing visual representations.</p>
                </div>
            </div>

            <div data-aos="fade-up" className='Box1'>
                <img src={require('../../Assets/blackJack.jpg')} />
                <div className="information">
                    <h2 class="projectTitle">BlackJack</h2>
                    <br /><br />
                    <p class="projectBody">A good'ol game of BlackJack! This app allows the user to interact through a CLI to play against 2 Bots and a Dealer AI, where risk/playstyle of the bots can be set to match what the user wants. Objected Oriented Programming principles such as but not limited to abstraction, polymorphism and encapsulation were used to create the logic behind the AI. This application was coded using Java</p>
                </div>
            </div>

            <div data-aos="fade-up" className='Box1'>
                <img src={require('../../Assets/a4a.jpg')} />
                <div className="information">
                    <h2 class="projectTitle">Action for Agriculture</h2>
                    <br /><br />
                    <p class="projectBody">A web application for an non profit Austrlian company to promote Agriculture as a career path for highschool and univeristy students alike. The website had multiple pages including Home, About us, Programs, Career pathways, Contact us. <br /><br />This application's was built using MERN stack with its frontend was coded entirely using React Js and backend database using MongoDB. </p>
                </div>
            </div>
        </div>
    )
}

export default Projects;