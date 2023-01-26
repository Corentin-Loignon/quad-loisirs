import React from "react";
import Hero from "./../../assets/hero.jpg";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero__container">
      <img src={Hero} alt="test" className="imgHero" />
      <h1>Bienvenue chez Quad Loisirs</h1>
      <p>Découverte du quad, randonnées</p>
      <div className='cta'>
        <a href='/' className='btn btn-primary'>Réserver</a>
        <a href="/contact" className='btn'>Nous contacter</a>
    </div>
    </div>
  );
}

export default HeroSection;
