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
        url: 'http://www.booking.com/hotel/fr/bestwesternplaisance.en-gb.html',
        phone: '+33 4 74 65 33 52',
        email: 'info@hotel-plaisance.com',
        description: 'Straightforward hotel offering bright rooms with free Wi-Fi, plus a cocktail bar & meeting space.',
        price: 1617,
      },
      {
        _id: '2',
        name: 'Mercure Villefranche en Beaujolais',
        stars: 4,
        location: '384 Boulevard Louis Blanc, 69400 Villefranche-sur-Saône, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/mercure.jpg',
        url: 'http://www.booking.com/hotel/fr/ici-amp-la.en-gb.html',
        phone: '+33 4 37 55 09 09',
        email: 'reception@hotelicietla.com',
        description: 'Contemporary rooms with free WiFi & local artwork, plus a rooftop pool & an upscale brasserie.',
        price: 1719,
      },
      {
        _id: '3',
        name: 'Châteou de Bagnols',
        stars: 5,
        location: 'Le Bourg, 69620 Bagnols, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/chateau.jpg',
        url: 'http://www.booking.com/hotel/fr/chateaudebagnols.en-gb.html',
        phone: '+33 4 74 71 40 00',
        email: 'info@chateaudebagnols.fr',
        description: 'Elegant quarters in a 15th-century castle with a restaurant, outdoor pool & massage treatments.',
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