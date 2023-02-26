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
                    <div className='contactText'>
                        Contact me 
                    </div>


                </div>

                <div data-aos="fade-right" className='emailBox'>
                    <div className='messageText'>
                        Or send me a message
                    </div>
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




