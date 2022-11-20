import React, { useEffect } from 'react'
import './index.css'
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    return (
        <div className='aboutBody'>
            <div data-aos="fade-right" className='aboutBox'>
                <img src={require('../../Assets/pfp.jpg')} />
                <h2>About me</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur malesuada risus, in sodales velit mollis id. Maecenas sit amet faucibus tellus. Nullam a ligula et mauris maximus ornare fringilla non felis. Donec congue suscipit ex, id finibus diam. Nullam tincidunt elit non ex vulputate laoreet. Mauris cursus cursus ante blandit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed dapibus urna.</h3>
            </div>

            <div data-aos="fade-left" className='skillsBox'>
                <h2>My skills and tech stack</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur malesuada risus, in sodales velit mollis id. Maecenas sit amet faucibus tellus. Nullam a ligula et mauris maximus ornare fringilla non felis. Donec congue suscipit ex, id finibus diam. Nullam tincidunt elit non ex vulputate laoreet. Mauris cursus cursus ante blandit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed dapibus urna.</h3>
            </div>

        </div>

    )
}

export default About;