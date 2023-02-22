import React, { useEffect } from 'react'
import './index.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { FaJava, FaJs, FaReact, FaPython, FaHtml5, FaCss3Alt, FaAndroid, FaGit } from 'react-icons/fa'

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    return (
        <div className='aboutBody'>
            <div data-aos="fade-right" className='aboutBox'>
                <div className='pfp'>
                    <img src={require('../../Assets/pfp.jpg')} />
                </div>
                <div className='aboutText'>
                    <h1>A bit about myself</h1>
                    <br />
                    <h3>I am a student at the University Of Auckland, beginning my third year of studies as a software engineer and aspiring to be a full stack developer. I find interest in machine learning and overcoming problems with a well engineered thought process.  </h3>

                </div>

            </div>

            <div data-aos="fade-left" className='skillsBox'>
                <div className='skillsText'>
                    <h1>My tech stack</h1>
                    <br />
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur malesuada risus, in sodales velit mollis id. Maecenas sit amet faucibus tellus. Nullam a ligula et mauris maximus ornare fringilla non felis. Donec congue suscipit ex, id finibus diam. Nullam tincidunt elit non ex vulputate laoreet. Mauris cursus cursus ante blandit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed dapibus urna.</h3>
                    <div className='stack'>
                        <FaJava className="icons Java" />
                        <FaJs className="icons Js" />
                        <FaReact className="icons React" />
                        <FaPython className="icons Python" />
                        <FaHtml5 className="icons Html" />
                        <FaCss3Alt className="icons Css" />
                        <FaAndroid className="icons Android" />
                        <FaGit className="icons Git" />
                    </div>

                </div>
            </div>

        </div>

    )
}

export default About;