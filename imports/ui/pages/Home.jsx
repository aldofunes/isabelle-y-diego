import React from 'react';
import { Parallax } from 'react-parallax';
import i18n from 'meteor/universe:i18n';

import Banner from '../components/Banner.jsx';
import Countdown from '../components/Countdown.jsx';
import Children from '../components/Children.jsx';
import Couple from '../components/Couple.jsx';
import DressCode from '../components/DressCode.jsx';
import Events from '../components/Events.jsx';
import Forecast from '../components/Forecast.jsx';
import Gallery from '../components/Gallery.jsx';
import Gifts from '../components/Gifts.jsx';
import HotelCards from '../components/HotelCards.jsx';
import Menu from '../components/Menu.jsx';
import RSVP from '../components/RSVP.jsx';
import TourCards from '../components/TourCards.jsx';
import WitnessList from '../components/WitnessList.jsx';
import WideImage from '../components/WideImage.jsx';

export default class Home extends React.Component {
  render() {
    i18n.setLocale('es');
    return (
      <div id="home">

        <Menu />

        <Banner />

        <Countdown
          givenDate="2016-08-13 15:30:00"
          timeZone="Europe/Paris"
        />

        <Couple />

        <WideImage
          image="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/isabelle-diego1.jpg"
          alt="Isabelle y Diego"
          text="El amor es grandioso"
        />

          <Children />

          <WideImage
            image="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/familia.jpg"
            alt="Hollywood"
            text="Juntos nos encanta viajar, descubrir nuevos lugares y vivir nuevas experiencias,
            ver en la televisión o asistir a los partidos de futbol (pero solo de los Dallas Cowboys
            o del Real Madrid), y festejar juntos los acontecimientos familiares: cumpleaños,
            Navidad,etc."
          />

        <WitnessList />

        <img
          src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/isabelle-diego2.jpg"
          alt="Isabelle y Diego"
          className="ui fluid image"
        />

        <DressCode />

        <Events />

        <img
          src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/isabelle-diego3.jpg"
          alt="Isabelle y Diego"
          className="ui fluid image"
        />

        <Gifts />

        <RSVP />

        <Forecast />

        <HotelCards />

        <TourCards />

        <Gallery />

      </div>
    );
  }
}
