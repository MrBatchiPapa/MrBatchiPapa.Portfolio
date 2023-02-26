import React from "react";
import './index.css'
import { MyComponent } from "../../Components/Birds/birds.js";
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
    return (

        <section className='hero'>
            <div className="heading">
                <h2>Hey there, I'm <span class="name">Kevin.</span></h2>
                <TypeAnimation
                    sequence={[
                        'I am an aspiring Software developer based in Auckland New Zealand.',
                        2000,
                        'I am a Software developer based in Auckland New Zealand :)',
                        5000,

                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                />
                
            </div>
        </section>

    )
}

export default Hero;