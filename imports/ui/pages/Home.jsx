import React, { Component } from 'react';

import Banner from '../components/Banner.jsx';
import Countdown from '../components/Countdown.jsx';
import Couple from '../components/Couple.jsx';
import Events from '../components/Events.jsx';
import Location from '../components/Location.jsx';
import Stat from '../components/Stat.jsx';

export default class Home extends Component {
  render() {
    return (
      <div id="home">

        <Banner />

        <section id="countdown">
          <div className="ui container">
            <Countdown givenDate="2016-08-13 15:30:00" timeZone="Europe/Paris"/>
          </div>
        </section>

        <section id="couple">
          <div className="ui container">
            <Couple />
          </div>
        </section>

        <section id="dress-code">
          <div className="ui container">
            <div className="ui two statistics">
              <Stat label="Hombres" value="Formal"/>
              <Stat label="Mujeres" value="Cocktail"/>
            </div>
          </div>
        </section>

        <div className="ui container">
          <Events />
        </div>

        <section id="location">
          <div className="ui container center aligned">
            <Location />
          </div>
        </section>
      </div>
    );
  }
}
