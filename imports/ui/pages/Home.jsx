import React from 'react';

import Banner from '../components/Banner.jsx';
import Countdown from '../components/Countdown.jsx';
import Couple from '../components/Couple.jsx';
import DressCode from '../components/DressCode';
import Events from '../components/Events.jsx';
import Forecast from '../components/Forecast.jsx';
import Gallery from '../components/Gallery.jsx';
import Gifts from '../components/Gifts.jsx';
import Hotels from '../components/Hotels.jsx';
import Menu from '../components/Menu.jsx';
import RSVP from '../components/RSVP.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div id="home">

        <Menu />
        
        <Banner />

        <Countdown
          givenDate="2016-08-13 15:30:00"
          timeZone="Europe/Paris"
        />

        <Couple />

        <DressCode />

        <Events />

        <Gifts />

        <RSVP />

        <Forecast />

        <Hotels />

        <Gallery />

      </div>
    );
  }
}
