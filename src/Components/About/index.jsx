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
                        <FaLinkedin className="icons1 Linkedin" />
                        <FaGithub className="icons1 Github" />
                        <FaInstagram className="icons1 Instagram" />
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
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur malesuada risus, in sodales velit mollis id. Maecenas sit amet faucibus tellus. Nullam a ligula et mauris maximus ornare fringilla non felis. Donec congue suscipit ex, id finibus diam. Nullam tincidunt elit non ex vulputate laoreet. Mauris cursus cursus ante blandit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed dapibus urna.</h3>


                    <div ref={ref}>
                        <div className='stats'>
                            <div className='experience'><h1>{inView ? <CountUp start={0} end={3} duration={2} /> : null}</h1> <br /> <h3>Years of experience</h3></div>
                            <div className='commits'><h1>{inView ? <CountUp start={0} end={334} duration={2} /> : null}</h1> <br /><h3>Commits on github</h3></div>
                            <div className='offers'><h1>{inView ? <CountUp start={0} end={0} duration={2} /> : null}</h1> <br /> <h3>Offers from Atlassian :(</h3></div>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    )
}

export default About;