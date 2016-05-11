import React, { Component } from 'react';

import Banner from '../components/Banner.jsx';
import Children from '../components/Children.jsx';
import Countdown from '../components/Countdown.jsx';
import Couple from '../components/Couple.jsx';
import DressCode from '../components/DressCode';
import Events from '../components/Events.jsx';
import Forecast from '../components/Forecast.jsx';
import Gifts from '../components/Gifts.jsx';
import Hotels from '../components/Hotels.jsx';
import RSVP from '../components/RSVP.jsx';

export default class Home extends Component {
  render() {
    return (
      <div id="home">

        <Banner />

        <Countdown
          givenDate="2016-08-13 15:30:00"
          timeZone="Europe/Paris"
        />

        <Couple />

        <DressCode />

        <Events />

        <Forecast />

        <RSVP />

        <Hotels />

        <Gifts />

      </div>
    );
  }
}
