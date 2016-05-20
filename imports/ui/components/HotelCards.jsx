import React from 'react';
import { Link } from 'react-router';

import HotelCard from './HotelCard.jsx';

export default class HotelCards extends React.Component {
  hotels() {
    return [
      {
        _id: '1',
        name: 'Best Western Plaisance',
        stars: 3,
        location: '96 Avenue de la Libération, 69652 Villefranche-sur-Saône, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/western.jpg',
        url: 'http://www.booking.com/hotel/fr/bestwesternplaisance.es.html',
        phone: '+33 4 74 65 33 52',
        email: 'info@hotel-plaisance.com',
        latitude: 45.985170,
        longitude: 4.716688,
        description: 'Las habitaciones y suites del Best Western Plaisance están decoradas de ' +
        'forma individual, disponen de sala de estar acogedora y confortable e incluyen todas ' +
        'las comodidades necesarias, como conexión Wi-Fi gratuita, minibar y TV de pantalla plana.',
        price: 1617,
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
      {
        _id: '3',
        name: 'Châteou de Bagnols',
        stars: 5,
        location: 'Le Bourg, 69620 Bagnols, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/chateau.jpg',
        url: 'http://www.booking.com/hotel/fr/chateaudebagnols.es.html',
        phone: '+33 4 74 71 40 00',
        email: 'info@chateaudebagnols.fr',
        latitude: 45.916646,
        longitude: 4.608237,
        description: 'El hotel Château de Bagnols ocupa un monumento histórico con más de 8 ' +
        'siglos de antigüedad situado en el corazón de Beaujolais, y alberga un restaurante de ' +
        'prestigio. Se encuentra en una finca con jardines de estilo francés, fosos, murallas, ' +
        'torres y piedras doradas rodeada de viñedos..',
        price: 7349,
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
          </div>
          <br/>
          <Link to="recommendations" className="ui inverted brown fluid button">Ver más</Link>
        </div>
      </section>
    );
  }
}