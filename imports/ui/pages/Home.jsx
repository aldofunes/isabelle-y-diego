import React from 'react';
import i18n from 'meteor/universe:i18n';
import { Parallax } from 'react-parallax';
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
  componentDidMount() {
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

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

        <WideImage
          image="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/isabelle-diego1.jpg"
          alt={i18n.__('home.wideImage1.alt')}
          text={i18n.__('home.wideImage1.text')}
        />

          <Children />

          <WideImage
            image="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/familia.jpg"
            alt={i18n.__('home.wideImage2.alt')}
            text={i18n.__('home.wideImage2.text')}
          />

        <WitnessList />

        <img
          src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/isabelle-diego2.jpg"
          alt={i18n.__('home.wideImage3.alt')}
          className="ui fluid image"
        />

        <DressCode />

        <Events />

        <img
          src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/isabelle-diego3.jpg"
          alt={i18n.__('home.wideImage4.alt')}
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
