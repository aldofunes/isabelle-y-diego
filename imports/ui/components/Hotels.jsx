import React from 'react';

import Hotel from './Hotel.jsx';

export default class Hotels extends React.Component {
  hotels() {
    return [
      {
        _id: '1',
        name: 'Best Western',
        stars: 3,
        location: '96 Avenue de la Libération, 69652 Villefranche-sur-Saône, France',
        url: 'bestwestern.fr',
        phone: '+33 4 74 65 33 52',
        description: 'Straightforward hotel offering bright rooms with free Wi-Fi, plus a cocktail bar & meeting space.',
        details: '',
        amenities: [
          { icon: 'wifi', description: 'Free Wifi' },
          { icon: 'wifi', description: 'Pets allowed' },
          { icon: 'wifi', description: 'Restaurant' },
          { icon: 'wifi', description: 'Bar' },
          { icon: 'wifi', description: 'Smoke Free' },
        ],
      },
      {
        _id: '2',
        name: 'Châteou de Bagnols',
        stars: 5,
        location: 'Le Bourg, 69620 Bagnols, France',
        url: 'chateaudebagnols.fr',
        phone: '+33 4 74 71 40 00',
        description: 'Elegant quarters in a 15th-century castle with a restaurant, outdoor pool & massage treatments.',
        details: 'In the rural village of Bagnols and 33.4 km from La Basilique Notre Dame de Fourvière, this refined hotel in a 15th-century castle is 15.2 km from Centre Aquatique le Nautile. Guestrooms range in decor from traditional to contemporary and feature marble or granite en suite bathrooms, air conditioning, sitting areas and free WiFi. Some suites have private terraces and original 16th-century frescoes. An elegant restaurant serves traditional French cuisine. Massage treatments are available by appointment (fee) and there is an outdoor pool. Other activities include tours by helicopter, hot-air balloon or horseback, carriage rides and outdoor sports.',
        amenities: [
          { icon: 'wifi', description: 'Free parking' },
          { icon: 'wifi', description: 'Pets allowed' },
          { icon: 'wifi', description: 'Restaurant' },
          { icon: 'wifi', description: 'Gym' },
        ],
      },
      {
        _id: '3',
        name: 'Hotel Mercure Villefranche en Beaujolais Ici & La',
        stars: 4,
        location: '384 Boulevard Louis Blanc, 69400 Villefranche-sur-Saône, France',
        url: 'accorhotels.com',
        phone: '+33 4 37 55 09 09',
        description: 'Contemporary rooms with free WiFi & local artwork, plus a rooftop pool & an upscale brasserie.',
        details: 'A 5-minute walk from the railway station, this polished hotel is a 4-minute walk from shopping on Rue Nationale and 8.4 km from the Golf Club du Beaujolais. Casual, modern rooms feature local artwork, flat-screen TVs and free WiFi. Upgraded quarters add extra living space. Suites offer separate living areas with sofas. There iss an upscale gourmet brasserie serving international cuisine, plus a contemporary bar with snacks. Other amenities include a rooftop pool with a seasonal bar, plus event space accommodating up to 140 guests.',
        amenities: [
          { icon: 'wifi', description: 'Free Wifi' },
          { icon: 'wifi', description: 'Paid parking' },
          { icon: 'disabled', description: 'Accessible' },
          { icon: 'wifi', description: 'Outdoor pool' },
          { icon: 'wifi', description: 'Air conditioned' },
        ],
      },
    ];
  }

  renderHotels() {
    return this.hotels().map((hotel) => (
      <div key={hotel._id} className="column">
        <Hotel
          name={hotel.name}
          stars={hotel.stars}
          location={hotel.location}
          url={hotel.url}
          phone={hotel.phone}
          description={hotel.description}
          details={hotel.details}
          amenities={hotel.amenities}
        />
      </div>
    ));
  }

  render() {
    return (
      <section id="hotels">
        <div className="ui container">
          <div className="ui three column stackable grid">
            {this.renderHotels()}
          </div>
        </div>
      </section>
    );
  }
}