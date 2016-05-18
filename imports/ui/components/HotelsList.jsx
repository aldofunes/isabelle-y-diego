import React from 'react';

import HotelsListItem from './HotelsListItem.jsx';

export default class HotelsList extends React.Component {
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
      {
        _id: '4',
        name: 'La Bastide',
        stars: 3,
        location: 'Le Bourg, 69640 Jarnioux, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/la-bastide.jpg',
        url: 'http://www.booking.com/hotel/fr/la-bastide-jarnioux.en-gb.html',
        phone: '+33 4 74 02 86 29',
        email: 'contact@labastidejarnioux.fr',
        description: '',
        price: 2073,
      },
      {
        _id: '5',
        name: 'La Chipotte ',
        stars: 3,
        location: '30 rue de la Mairie, 69640, Jarnioux, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/la-chipotte.jpg',
        url: 'http://www.booking.com/hotel/fr/la-chipotte.es.html',
        phone: '+33 4 26 74 10 77',
        email: 'jarnioux@hotmail.fr',
        description: '',
        price: 2150,
      },
      {
        _id: '6',
        name: 'Le Clos des Sources',
        stars: 3,
        location: '28 Impasse des sources, 69640 Jarnioux, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-des-sources.jpg',
        url: 'http://www.leclosdessourcesbonave.fr/reservez-le-clos-des-sources-bonave/',
        phone: '+33 4 74 03 82 41',
        email: 'leclosdessources.bonave@orange.fr',
        description: '',
        price: 1985,
      },
      {
        _id: '7',
        name: 'Le Clos du Chêne',
        stars: 3,
        location: '370 Chemin du Carre, 01600 Saint-Bernard, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-du-chene.jpg',
        url: 'http://www.booking.com/hotel/fr/le-clos-du-chene.en-gb.html',
        phone: '+33 4 74 00 45 39',
        email: 'info@leclosduchene.com',
        description: '',
        price: 1985,
      },
      {
        _id: '8',
        name: 'Le Clos Marzé',
        stars: 3,
        location: '262 Grand Rue, 69640 Lacenas, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-marze.jpg',
        url: 'http://www.booking.com/hotel/fr/le-clos-du-chene.es.html',
        phone: '+33 4 74 67 31 76',
        email: 'leclosmarze@yahoo.fr',
        description: 'Located at LACENAS, in a large and leafy property, on the wine trail, in a typical village of the Beaujolais des Pierres Dorées, le Clos Marzé accomodates you and proposes its charming guest rooms arranged with great care and refinement.',
        price: 1985,
      },
      {
        _id: '9',
        name: 'Clos des pierres dorées (CASA)',
        stars: 3,
        location: 'Le Boîtier, 69620 Theizé, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/clos-des-pierres-dorees.jpg',
        url: 'http://www.booking.com/hotel/fr/domaine-des-pierres-dorees.es.html',
        phone: '+33 4 74 71 26 38',
        email: 'contact@closdespierresdorees.com',
        description: '',
        price: 1985,
      },
      {
        _id: '10',
        name: 'Gaëlle Pinet',
        stars: 3,
        location: '195 Chemin de Bennevent, 69640 Denicé, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/domaine-de-benevent.jpg',
        url: 'http://www.domainedebenevent.com/les-chambres-hote-gite.html',
        phone: '+33 4 74 68 83 07',
        email: 'gaelle.pinet@benevent.fr',
        description: '',
        price: 1985,
      },
    ];
  }

  renderHotelsListItems() {
    return this.hotels().map((hotel) => (
      <HotelsListItem key={hotel._id} {...hotel}/>
    ));
  }


  render() {
    return (
      <section id="hotels-list">
        <div className="ui container">
          <h2 className="ui header">Hoteles recomendados</h2>
          <div className="ui vertically divided grid">
            {this.renderHotelsListItems()}
          </div>
        </div>
      </section>
    );
  }
}
