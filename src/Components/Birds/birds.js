import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
// import './birds.css'


export const MyComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          forceAnimate: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 400.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: "#7393B3",
          color2: "#7393B3",
          quantity: 3.00,
          backgroundColor: "#FFF",
          birdSize: 4,
          separation: 900,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef}>
      <p style={{ color: "#000000", paddingTop: "20px", textAlign:"center"}}>

      </p>
    </div>
  );
};

