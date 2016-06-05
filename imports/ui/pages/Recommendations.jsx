import React from 'react';
import { Link } from 'react-router';

import HotelsList from '../components/HotelsList.jsx';
import Tours from '../components/Tours.jsx';
import CitiesList from '../components/CitiesList/CitiesList.jsx';

export default class Recommendations extends React.Component {
  render() {
    return (
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
              <h1>Visitas en la región</h1>
            </div>
          </div>
        </section>

        <CitiesList />

        <Tours />

      </div>
    );
  }
}
