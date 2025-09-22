"use client";
import { useState, useEffect } from "react";
import './hero.css';


function HeroSec() {
  const words = ["Editor", "Developer","Youtuber"];
  const [index, setIndex] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000); // change every 2s
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="hero" className="hero">
      {/* Left Side: Text */}
      <div className="hero-text">
        <h1>Hi,Its</h1>
        <h1 className="nam">Babu</h1>
        <h1 className="anime">I'm a {words[index]}</h1>
        <p className="about">I develop 3D visuals, user interfaces and web applications</p>
      </div>

   
    </section>
  );
}

export default HeroSec;
