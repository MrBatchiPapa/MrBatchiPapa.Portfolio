import React, { useEffect, useRef } from 'react'
import './index.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';


const Contact = () => {


    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fvgbw1c', 'template_6h6ei9y', form.current, 'rNv2o_B-6L83tcCLh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contactBody'>


            <div className='contact'>
                <div data-aos="fade-left" className='contactBox'>

                    <div className='aboutText'>
                        <h1>A bit about myself</h1>
                        <br />
                        <h3>I am a student at the University Of Auckland, beginning my third year of studies as a software engineer and aspiring to be a full stack developer. I love to keep myself active with sports like badminton, table tennis, kickboxing or simply just gaming. <br /><br />To me the most important part of a company is its work environment, as I believe a close knit and trusting team is a successful one.  </h3>

                    </div>

                </div>

                <div data-aos="fade-right" className='emailBox'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='emailName'>
                            <label>Name</label>
                            <br />
                            <input type="text" name="user_name" />
                        </div>

                        <div className='email'>
                            <label>Email</label>
                            <br />
                            <input type="email" name="user_email" />
                        </div>

                        <div className='message'>
                            <label>Message</label>
                            <br />
                            <textarea name="message" />
                        </div>

                        <input type="submit" value="Send" />
                    </form>
                </div>

            </div>
        </div>

    )
}

export default Contact;




