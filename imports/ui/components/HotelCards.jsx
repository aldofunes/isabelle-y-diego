import React from 'react';
import { Link } from 'react-router';
import i18n from 'meteor/universe:i18n';
import HotelCard from './HotelCard.jsx';

export default class HotelCards extends React.Component {
  componentDidMount() {
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  render() {
    const hotels = [
      {
        _id: '11',
        name: i18n.__('home.hotelCards.hotel1.name'),
        stars: 5,
        location: ' 20 Quai Gailleton, 02. La Presqu\'île, 69002 Lyon, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/sofitel.jpg',
        url: 'http://www.booking.com/hotel/fr/sofitel-lyon.es.html',
        phone: '+33 4 72 41 20 20',
        email: 'H0553@sofitel.com',
        latitude: 45.754312,
        longitude: 4.834180,
        description: i18n.__('home.hotelCards.hotel1.description'),
        price: 4179,
      },
      {
        _id: '4',
        name: i18n.__('home.hotelCards.hotel2.name'),
        stars: 3,
        location: 'Le Bourg, 69640 Jarnioux, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/la-bastide.jpg',
        url: 'http://www.booking.com/hotel/fr/la-bastide-jarnioux.es.html',
        phone: '+33 4 74 02 86 29',
        email: 'contact@labastidejarnioux.fr',
        latitude: 45.965604,
        longitude: 4.625037,
        description: i18n.__('home.hotelCards.hotel2.description'),
        price: 2073,
      },
    ];

    return (
      <section id="hotels">
        <div className="ui container">
          <h2 className="ui header">{i18n.__('home.hotelCards.title')}</h2>
          <div className="ui middle aligned three column stackable grid">
            {hotels.map((hotel) => (
              <div key={hotel._id} className="column">
                <HotelCard {...hotel} />
              </div>
            ))}
            <div className="column">
              <div className="ui large vertical buttons" style={{ display: 'block' }}>
                <a
                  href="https://www.airbnb.com/s/lyon?guests=2&checkin=08%2F12%2F2016&checkout=08%2F14%2F2016&ss_id=74gxsyuz&source=bb&s_tag=4CyBLyfJ"
                  className="ui inverted blue button"
                  target="_blank"
                >{i18n.__('home.hotelCards.airBnB')}</a>
                <Link to="hotels" className="ui inverted blue button">{i18n.__('home.hotelCards.more')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}