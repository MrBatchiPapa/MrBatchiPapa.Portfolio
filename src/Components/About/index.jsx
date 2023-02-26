import React, { useEffect } from 'react'
import './index.css'
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaJs, FaReact, FaPython, FaHtml5, FaCss3Alt, FaAndroid, FaGit, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const About = () => {

    const [ref, inView] = useInView({
        threshold: 0.5,
    });

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
                    <h3>I am a student at the University Of Auckland, beginning my third year of studies as a software engineer and aspiring to be a full stack developer. I love to keep myself active with sports like badminton, table tennis, kickboxing or simply just gaming. <br /><br />To me the most important part of a company is its work environment, as I believe a close knit and trusting team is a successful one.  </h3>
                    <div className='info'>
                        <a href="https://www.linkedin.com/in/kevin-jin-055037233/">
                            <FaLinkedin className="icons1 Linkedin" />
                        </a>

                        <a href="https://github.com/MrBatchiPapa">
                            <FaGithub className="icons1 Github" />
                        </a>

                        <a href="https://www.instagram.com/kebinjin/">
                            <FaInstagram className="icons1 Instagram" />
                        </a>

                    </div>
                </div>

            </div>

            <div data-aos="fade-left" className='skillsBox'>
                <div className='skillsText'>
                    <h1>My tech stack</h1>
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

                    <h1>My experience</h1>
                    <h3>During my first year of study I learnt how to use MATLAB and C. During my second year of study, I primarily did all coding and programming in Java making it my most proficient language. As such I am also familiar with object oriented programming. <br /><br />I have developed multiple web apps throughout my time at high school and University using HTML, CSS along with JavaScript (mostly React.js).<br /><br />  During my internship and OPPO I ran Python test scripts using Android Debugging Bridge to test mobile devices and have learnt how to write my own scripts.</h3>


                    <div ref={ref}>
                        <div className='stats'>
                            <div className='experience'><h1>{inView ? <CountUp start={0} end={3} duration={2} /> : null}</h1> <br /> <h3>Years of <br />experience</h3></div>
                            <div className='commits'><h1>{inView ? <CountUp start={0} end={334} duration={2} /> : null}</h1> <br /><h3>Commits on <br />github</h3></div>
                            <div className='offers'><h1>{inView ? <CountUp start={0} end={0} duration={2} /> : null}</h1> <br /> <h3>Offers from<br /> Atlassian :(</h3></div>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    )
}

export default About;