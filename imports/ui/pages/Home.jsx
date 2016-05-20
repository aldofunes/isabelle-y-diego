import React from 'react';
import { Parallax } from 'react-parallax';

import Banner from '../components/Banner.jsx';
import Countdown from '../components/Countdown.jsx';
import Couple from '../components/Couple.jsx';
import DressCode from '../components/DressCode.jsx';
import Events from '../components/Events.jsx';
import Forecast from '../components/Forecast.jsx';
import Gallery from '../components/Gallery.jsx';
import Gifts from '../components/Gifts.jsx';
import HotelCards from '../components/HotelCards.jsx';
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

        <Parallax
          bgImage="http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/isabelle-diego2.jpg"
          strength={200}
          className="ui center aligned"
        />

        <DressCode />

        <Events />

        <Parallax
          bgImage="http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/isabelle-diego3.jpg"
          strength={200}
          className="ui center aligned"
        />

        <Gifts />

        <RSVP />

        <Forecast />

        <HotelCards />

        <Gallery />

      </div>
    );
  }
}
