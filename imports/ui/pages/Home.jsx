import React, { Component } from 'react';

import Banner from '../components/Banner.jsx';
import Countdown from '../components/Countdown.jsx';
import Couple from '../components/Couple.jsx';
import Events from '../components/Events.jsx';
import Forecast from '../components/Forecast.jsx';
import Hotel from '../components/Hotel.jsx';
import Stat from '../components/Stat.jsx';
import RSVP from '../components/RSVP.jsx';

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
          </div>
        </section>

        <section id="rsvp">
          <div className="ui container">
            <RSVP />
          </div>
        </section>

        <section id="hotels">
          <div className="ui container">
            <div className="ui three column stackable grid">
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

        <section id="gifts">
          <div className="ui container">
            <h2>Regalos</h2>
            <p>
              Afortunadamente la vida nos ha bendecido y no necesitamos nada; su presencia el día
              de la boda es el mejor regalo que podamos recibir, y valoramos mucho el esfuerzo en
              tiempo y recursos que nos brindan al acompañarnos en ese Día tan especial, se lo
              decimos de todo corazón.
            </p>
          </div>
        </section>
      </div>
    );
  }
}
