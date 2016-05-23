import React from 'react';
import { Link } from 'react-router';

import HotelCard from './HotelCard.jsx';

export default class HotelCards extends React.Component {
  hotels() {
    return [
      {
        _id: '11',
        name: 'Sofitel Lyon Bellecour',
        stars: 5,
        location: ' 20 Quai Gailleton, 02. La Presqu\'île, 69002 Lyon, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/sofitel.jpg',
        url: 'http://www.booking.com/hotel/fr/sofitel-lyon.es.html',
        phone: '+33 4 72 41 20 20',
        email: 'H0553@sofitel.com',
        latitude: 45.754312,
        longitude: 4.834180,
        description: 'Este hotel de 5 estrellas está situado en el corazón de Lyon, a solo 450 ' +
        'metros de la plaza de Bellecour, que alberga boutiques de lujo. Cuenta con centro de ' +
        'fitness, gimnasio, hammam y centro de bienestar.',
        price: 4179,
      },
      {
        _id: '2',
        name: 'Mercure Villefranche en Beaujolais',
        stars: 4,
        location: '384 Boulevard Louis Blanc, 69400 Villefranche-sur-Saône, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/mercure.jpg',
        url: 'http://www.booking.com/hotel/fr/ici-amp-la.es.html',
        phone: '+33 4 37 55 09 09',
        email: 'reception@hotelicietla.com',
        latitude: 45.987267,
        longitude: 4.721084,
        description: 'El Mercure Villefranche se encuentra a 200 metros del centro de ' +
        'Villefrance-sur-Saône y de la estación de tren. Dispone de piscina al aire libre, ' +
        'terraza con sombrillas y conexión Wi-Fi gratuita en todo el hotel..',
        price: 1719,
      },
    ];
  }

  renderHotelCards() {
    return this.hotels().map((hotel) => (
      <div key={hotel._id} className="column">
        <HotelCard {...hotel}/>
      </div>
    ));
  }

  render() {
    return (
      <section id="hotels">
        <div className="ui container">
          <div className="ui middle aligned three column stackable grid">
            {this.renderHotelCards()}
            <div className="column">
              <a
                href="https://www.airbnb.com/s/lyon?guests=2&checkin=08%2F12%2F2016&checkout=08%2F14%2F2016&ss_id=74gxsyuz&source=bb&s_tag=4CyBLyfJ"
                className="ui inverted blue large fluid button"
                target="_blank"
              >
                Lyon y la región en AirBnB
              </a>
            </div>
          </div>
          <br/>
          <Link to="recommendations" className="ui inverted brown fluid button">Ver más</Link>
        </div>
      </section>
    );
  }
}