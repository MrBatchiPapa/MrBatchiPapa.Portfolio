import React from 'react'
import './index.css'
import { useRef } from "react";

const NavBar = () => {
    const about = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <section className='NavBody'>
            <h2>Kevin Jin</h2>
            <ul id ="item">
                <li onClick={()=> scrollToSection(about)} className="link">About</li>
                <li className="link">Projects</li>
                <li className="link">Contact</li>
            </ul>
        </section>

    )
}

export default NavBar;