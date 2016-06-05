import React from 'react';
import { Link } from 'react-router';
import HotelsList from '../components/HotelsList.jsx';

const Hotels = () => (
  <div id="recommendations">
    <Link
      id="main-menu"
      to="/"
      className="ui dropdown icon pointing secondary button"
    >
      <i className="home icon"/> Inicio
    </Link>

    <section id="banner">
      <div className="ui center aligned grid">
        <div className="four column">
          <h1>Hoteles recomendados</h1>
        </div>
      </div>
    </section>

    <HotelsList />

  </div>
);

export default Hotels;