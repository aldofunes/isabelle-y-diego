import React from 'react';
import { Link } from 'react-router';

import Tours from '../components/Tours.jsx';

export default class Recommendations extends React.Component {
  render() {
    return (
      <div id="recommendations">
        <Link id="main-menu" to="/" className="item" className="ui dropdown icon top left pointing secondary button">
          <i className="home icon"/> Inicio
        </Link>

        <section id="banner">
          <div className="ui center aligned grid">
            <div className="four column">
              <h1>Jarnioux & Lyon</h1>
            </div>
          </div>
        </section>

        <section id="Lyon">

        </section>

        <Tours />

      </div>
    );
  }
}
