import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const form = useRef();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fvgbw1c', 'template_6h6ei9y', form.current, 'rNv2o_B-6L83tcCLh')
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setError(true);
          setTimeout(() => setError(false), 5000);
        }
      );

    form.current.reset();
  };

  return (
    <div className='contactBody'>
      <div className='contact'>
        <div data-aos='fade-left' className='contactBox'>
          {/* <div className='contactText'>
            Contact me
            <div className='contactDetails'>
              <p>Email: kevink314159@gmail.com</p>
              <p>Phone: +64 221667599</p>
              <p>Instagram: kebinjin</p>
              <p>Discord: </p>
            </div>
          </div> */}
        </div>

        <div data-aos='fade-right' className='emailBox'>
          <div className='messageText'>Send me a message :)</div>
          <form ref={form} onSubmit={sendEmail}>
            <div className='emailName'>
              <label htmlFor='user_name'>Name</label>
              <br />
              <input type='text' id='user_name' name='user_name' placeholder='Name' style={{backgroundColor: '#ECECEC'}} />
            </div>

            <div className='email'>
              <label htmlFor='user_email'>Email</label>
              <br />
              <input type='email' id='user_email' name='user_email' placeholder='Email' style={{backgroundColor: '#ECECEC'}} />
            </div>

            <div className='message'>
              <label htmlFor='message'>Message</label>
              <br />
              <textarea id='message' name='message' placeholder='Message' style={{backgroundColor: '#ECECEC'}} />
            </div>

            <input type='submit' value='Send' />
          </form>

          {success && <div className='successMsg'>Message sent successfully. Thank you!</div>}
          {error && <div className='errorMsg'>There was an error. Please try again.</div>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
