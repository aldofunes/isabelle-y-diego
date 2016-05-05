import React, { Component } from 'react';

import Banner from '../components/Banner.jsx';
import Countdown from '../components/Countdown.jsx';
import Couple from '../components/Couple.jsx';
import Events from '../components/Events.jsx';
import Forecast from '../components/Forecast.jsx';
import Hotel from '../components/Hotel.jsx';
import Location from '../components/Location.jsx';
import Stat from '../components/Stat.jsx';

export default class Home extends Component {
  render() {
    return (
      <div id="home">

        <Banner />

        <section id="countdown">
          <div className="ui container">
            <Countdown
              givenDate="2016-08-13 15:30:00"
              timeZone="Europe/Paris"
            />
          </div>
        </section>

        <section id="couple">
          <div className="ui container center aligned">
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

        <section id="events">
          <div className="ui container">
            <Events />
          </div>
        </section>

        <section id="location">
          <div className="ui container center aligned">
            <Forecast />

            <Location
              name="Manoir de la garde"
              address="170 impasse de la Garde, 69640 Jarnioux, France"
              googleMaps="https://www.google.com/maps/dir/Current+Location/Manoir+de+la+Garde,+170+impasse+de+la+Garde,+69640+Jarnioux,+France/"
              waze="https://waze.to/lr/hu05m90pkp"
            />
          </div>
        </section>

        <section id="hotels">
          <div className="ui container">
            <div className="ui three column grid">
              <div className="column">
                <Hotel />
              </div>
              <div className="column">
                <Hotel />
              </div>
              <div className="column">
                <Hotel />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
