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
                    <h2>Project 1</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur malesuada risus, in sodales velit mollis id. Maecenas sit amet faucibus tellus. Nullam a ligula et mauris maximus ornare fringilla non felis. Donec congue suscipit ex, id finibus diam. Nullam tincidunt elit non ex vulputate laoreet. Mauris cursus cursus ante blandit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed dapibus urna.</h3>
            </div>

            <div data-aos="fade-up" className='Box2'>
                <h2>Project 2</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur malesuada risus, in sodales velit mollis id. Maecenas sit amet faucibus tellus. Nullam a ligula et mauris maximus ornare fringilla non felis. Donec congue suscipit ex, id finibus diam. Nullam tincidunt elit non ex vulputate laoreet. Mauris cursus cursus ante blandit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed dapibus urna.</h3>
            </div>

            <div data-aos="fade-up" className='Box1'>
                <h2>Project 3</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur malesuada risus, in sodales velit mollis id. Maecenas sit amet faucibus tellus. Nullam a ligula et mauris maximus ornare fringilla non felis. Donec congue suscipit ex, id finibus diam. Nullam tincidunt elit non ex vulputate laoreet. Mauris cursus cursus ante blandit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed dapibus urna.</h3>
            </div>
        </div>
    )
}

export default Projects;