import React from "react";
import "./Prices.css";

const Prices = () => {
  return (
    <section id="prices">
      <h2>Nos tarifs</h2>
      <div className="container prices__container">
        <article className="prices__details">
          <div>
            <h3>1h Découverte du quad</h3>
            <h4>40€</h4>
          </div>
          <p>
            Randonnée quad découverte entre forêts et chemins ( niveau facile à
            moyen, 20 à 30 km).
          </p>
        </article>
        <hr></hr>
        <article className="prices__details">
          <div>
            <h3>2h Découverte du quad</h3>
            <h4>50€</h4>
          </div>
          <p>
            Randonnée quad découverte entre forêts et chemins ( niveau facile à
            moyen, 20 à 30 km).
          </p>
        </article>
        <hr></hr>
        <article className="prices__details">
          <div>
            <h3>1/2 journée randonnée</h3>
            <h4>60€</h4>
          </div>
          <p>
            Randonnée quad découverte entre forêts et chemins ( niveau facile à
            moyen, 20 à 30 km).
          </p>
        </article>
        <hr></hr>
        <article className="prices__details">
          <div>
            <h3>1 journée randonnée</h3>
            <h4>120€</h4>
          </div>
          <p>
            Randonnée quad découverte entre forêts et chemins ( niveau facile à
            moyen, 20 à 30 km).
          </p>
        </article>
        <hr></hr>
        <article className="prices__details">
          <div>
            <h3>Week-end randonnées</h3>
            <h4>200€</h4>
          </div>
          <p>
            Randonnée quad découverte entre forêts et chemins ( niveau facile à
            moyen, 20 à 30 km).
          </p>
        </article>
        <hr></hr>
        <article className="prices__details">
          <div>
            <h3>Evénements spéciaux</h3>
            <h4>250€</h4>
          </div>
          <p>
            Randonnée quad découverte entre forêts et chemins ( niveau facile à
            moyen, 20 à 30 km).
          </p>
        </article>
      </div>
    </section>
  );
};

export default Prices;
