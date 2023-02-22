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
                    <p class="projectBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur malesuada risus, in sodales velit mollis id. Maecenas sit amet faucibus tellus. Nullam a ligula et mauris maximus ornare fringilla non felis. Donec congue suscipit ex, id finibus diam. Nullam tincidunt elit non ex vulputate laoreet. Mauris cursus cursus ante blandit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed dapibus urna.</p>
                </div>
            </div>

            <div data-aos="fade-up" className='Box1'>
                <img src={require('../../Assets/snakeGame.jpg')} />
                <div className="information">
                    <h2 class="projectTitle">Snake Game</h2>
                    <p class="projectBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur malesuada risus, in sodales velit mollis id. Maecenas sit amet faucibus tellus. Nullam a ligula et mauris maximus ornare fringilla non felis. Donec congue suscipit ex, id finibus diam. Nullam tincidunt elit non ex vulputate laoreet. Mauris cursus cursus ante blandit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed dapibus urna.</p>
                </div>
            </div>

            <div data-aos="fade-up" className='Box1'>
                <img src={require('../../Assets/blackJack.jpg')} />
                <div className="information">
                    <h2 class="projectTitle">BlackJack</h2>
                    <p class="projectBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur malesuada risus, in sodales velit mollis id. Maecenas sit amet faucibus tellus. Nullam a ligula et mauris maximus ornare fringilla non felis. Donec congue suscipit ex, id finibus diam. Nullam tincidunt elit non ex vulputate laoreet. Mauris cursus cursus ante blandit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed dapibus urna.</p>
                </div>
            </div>

            <div data-aos="fade-up" className='Box1'>
                <img src={require('../../Assets/a4a.jpg')} />
                <div className="information">
                    <h2 class="projectTitle">Action for Agriculture</h2>
                    <p class="projectBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur malesuada risus, in sodales velit mollis id. Maecenas sit amet faucibus tellus. Nullam a ligula et mauris maximus ornare fringilla non felis. Donec congue suscipit ex, id finibus diam. Nullam tincidunt elit non ex vulputate laoreet. Mauris cursus cursus ante blandit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed dapibus urna.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;