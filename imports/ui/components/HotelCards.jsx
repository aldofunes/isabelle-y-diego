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
        location: '96 Avenue de la Libération, 69652 Villefranche-sur-Saône, France',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/western.jpg',
        url: 'http://www.booking.com/hotel/fr/bestwesternplaisance.en-gb.html',
        phone: '+33 4 74 65 33 52',
        description: 'Straightforward hotel offering bright rooms with free Wi-Fi, plus a cocktail bar & meeting space.',
        amenities: [
          { icon: 'wifi', description: 'Free Wifi' },
          { icon: 'paw', description: 'Pets allowed' },
          { icon: 'food', description: 'Restaurant' },
          { icon: 'bar', description: 'Bar' },
          { icon: 'remove circle', description: 'Smoke Free' },
        ],
        price: 1617,
      },
      {
        _id: '2',
        name: 'Mercure Villefranche en Beaujolais',
        stars: 4,
        location: '384 Boulevard Louis Blanc, 69400 Villefranche-sur-Saône, France',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/mercure.jpg',
        url: 'http://www.booking.com/hotel/fr/ici-amp-la.en-gb.html',
        phone: '+33 4 37 55 09 09',
        description: 'Contemporary rooms with free WiFi & local artwork, plus a rooftop pool & an upscale brasserie.',
        amenities: [
          { icon: 'wifi', description: 'Free Wifi' },
          { icon: 'ticket', description: 'Paid parking' },
          { icon: 'handicap', description: 'Accessible' },
          { icon: 'sun', description: 'Outdoor pool' },
          { icon: 'fire', description: 'Air conditioned' },
        ],
        price: 1719,
      },
      {
        _id: '3',
        name: 'Châteou de Bagnols',
        stars: 5,
        location: 'Le Bourg, 69620 Bagnols, France',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/chateau.jpg',
        url: 'http://www.booking.com/hotel/fr/chateaudebagnols.en-gb.html',
        phone: '+33 4 74 71 40 00',
        description: 'Elegant quarters in a 15th-century castle with a restaurant, outdoor pool & massage treatments.',
        amenities: [
          { icon: 'car', description: 'Free parking' },
          { icon: 'paw', description: 'Pets allowed' },
          { icon: 'food', description: 'Restaurant' },
          { icon: 'trophy', description: 'Gym' },
        ],
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