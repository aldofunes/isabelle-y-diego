import React from 'react';
import i18n from 'meteor/universe:i18n';
import HotelsListItem from './HotelsListItem.jsx';

export default class HotelsList extends React.Component {
  componentDidMount() {
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  render() {
    const lyonHotels = [
      {
        _id: '1',
        name: i18n.__('hotels.lyon.hotel1.name'),
        stars: 5,
        location: '20 Quai Gailleton, 02. La Presqu\'île, 69002 Lyon, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/sofitel.jpg',
        url: 'http://www.booking.com/hotel/fr/le-royal-lyon.es.html?label=gen173nr-1DCAsoTUINbGUtcm95YWwtbHlvbkgzYgVub3JlZmigAYgBAZgBCrgBDMgBDNgBA-gBAagCAw;sid=1e44fae8a40d5795ea23ecbd79c8b196;dcid=12;dist=0&group_adults=2&sb_price_type=total&type=total&',
        phone: '+33 4 7837 5731',
        email: 'leroyal@institutpaulbocuse.com',
        description: i18n.__('hotels.lyon.hotel1.description'),
        price: 2786,
      },
      {
        _id: '2',
        name: i18n.__('hotels.lyon.hotel2.name'),
        stars: 4,
        location: '20 Place Bellecour, 02. La Presqu\'île, 69002 Lyon, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-royal.jpg',
        url: 'http://www.booking.com/hotel/fr/sofitel-lyon.es.html',
        phone: '+33 4 7241 2020',
        email: 'H0553@sofitel.com',
        description: i18n.__('hotels.lyon.hotel2.description'),
        price: 4179,
      },
      {
        _id: '3',
        name: i18n.__('hotels.lyon.hotel3.name'),
        stars: 4,
        location: '5 Rue Stella, 02. La Presqu\'île, 69002 Lyon, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/mercure-lyon.jpg',
        url: 'http://www.booking.com/hotel/fr/lyon-plaza-republique.es.html',
        phone: '+33 4 7837 5050',
        email: 'h2951@accor.com',
        description: i18n.__('hotels.lyon.hotel3.description'),
        price: 1837,
      },
      {
        _id: '4',
        name: i18n.__('hotels.lyon.hotel4.name'),
        stars: 5,
        location: '6, rue du Boeuf, 05. Centro histórico de Lyon, 69005 Lyon, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/cour-des-loges.jpg',
        url: 'http://www.booking.com/hotel/fr/courdesloges.es.html?label=gen173nr-1DCAsoTUIMY291cmRlc2xvZ2VzSDNiBW5vcmVmaKABiAEBmAEKuAEMyAEM2AED6AEBqAID;sid=1e44fae8a40d5795ea23ecbd79c8b196;dcid=4;dist=0&group_adults=2&no_rooms=1&sb_price_type=total&type=total&',
        phone: '+33 4 7277 4444 ',
        email: 'contact@courdesloges.com',
        description: i18n.__('hotels.lyon.hotel4.description'),
        price: 4644.33,
      },
      {
        _id: '5',
        name: i18n.__('hotels.lyon.hotel5.name'),
        stars: 5,
        location: '25 Montée St Barthélémy, 05. Centro histórico de Lyon, 69005 Lyon, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/villa-florentine.jpg',
        url: 'http://www.booking.com/hotel/fr/villaflorentine.es.html?label=gen173nr-1DCAsoTUIPdmlsbGFmbG9yZW50aW5lSDNiBW5vcmVmaKABiAEBmAEKuAEMyAEM2AED6AEBqAID;sid=1e44fae8a40d5795ea23ecbd79c8b196;dcid=4;dist=0&group_adults=2&no_rooms=1&sb_price_type=total&type=total&',
        phone: '+33 4 7256 5656',
        email: '',
        description: i18n.__('hotels.lyon.hotel5.description'),
        price: 4179,
      },
    ];

    const jarniouxHotels = [
      {
        _id: '3',
        name: i18n.__('hotels.jarnioux.hotel3.name'),
        stars: 5,
        location: 'Le Bourg, 69620 Bagnols, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/chateau.jpg',
        url: 'http://www.booking.com/hotel/fr/chateaudebagnols.es.html',
        phone: '+33 4 74 71 40 00',
        email: 'info@chateaudebagnols.fr',
        latitude: 45.916646,
        longitude: 4.608237,
        description: i18n.__('hotels.jarnioux.hotel3.description'),
        price: 7349,
      },
      {
        _id: '4',
        name: i18n.__('hotels.jarnioux.hotel4.name'),
        stars: 3,
        location: 'Le Bourg, 69640 Jarnioux, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/la-bastide.jpg',
        url: 'http://www.booking.com/hotel/fr/la-bastide-jarnioux.es.html',
        phone: '+33 4 74 02 86 29',
        email: 'contact@labastidejarnioux.fr',
        latitude: 45.965604,
        longitude: 4.625037,
        description: i18n.__('hotels.jarnioux.hotel4.description'),
        price: 2073,
      },
      {
        _id: '5',
        name: i18n.__('hotels.jarnioux.hotel5.name'),
        stars: 3,
        location: '30 rue de la Mairie, 69640, Jarnioux, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/la-chipotte.jpg',
        url: 'http://www.booking.com/hotel/fr/la-chipotte.es.html',
        phone: '+33 4 26 74 10 77',
        email: 'jarnioux@hotmail.fr',
        description: i18n.__('hotels.jarnioux.hotel5.description'),
        price: 2150,
      },
      {
        _id: '6',
        name: i18n.__('hotels.jarnioux.hotel6.name'),
        stars: 3,
        location: '28 Impasse des sources, 69640 Jarnioux, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-des-sources.jpg',
        url: 'http://www.leclosdessourcesbonave.fr/reservez-le-clos-des-sources-bonave/',
        phone: '+33 4 74 03 82 41',
        email: 'leclosdessources.bonave@orange.fr',
        description: i18n.__('hotels.jarnioux.hotel6.description'),
        price: 1985,
      },
      {
        _id: '7',
        name: i18n.__('hotels.jarnioux.hotel7.name'),
        stars: 3,
        location: '370 Chemin du Carre, 01600 Saint-Bernard, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-du-chene.jpg',
        url: 'http://www.booking.com/hotel/fr/le-clos-du-chene.es.html',
        phone: '+33 4 74 00 45 39',
        email: 'info@leclosduchene.com',
        description: i18n.__('hotels.jarnioux.hotel7.description'),
        price: 1985,
      },
      {
        _id: '8',
        name: i18n.__('hotels.jarnioux.hotel8.name'),
        stars: 3,
        location: '262 Grand Rue, 69640 Lacenas, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-marze.jpg',
        url: 'http://www.le-clos-marze.fr/index_en.php',
        phone: '+33 4 74 67 31 76',
        email: 'leclosmarze@yahoo.fr',
        description: i18n.__('hotels.jarnioux.hotel8.description'),
        price: 1985,
      },
      {
        _id: '9',
        name: i18n.__('hotels.jarnioux.hotel9.name'),
        stars: 3,
        location: 'Le Boîtier, 69620 Theizé, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/clos-des-pierres-dorees.jpg',
        url: 'http://www.booking.com/hotel/fr/domaine-des-pierres-dorees.es.html',
        phone: '+33 4 74 71 26 38',
        email: 'contact@closdespierresdorees.com',
        description: i18n.__('hotels.jarnioux.hotel9.description'),
        price: 1985,
      },
      {
        _id: '10',
        name: i18n.__('hotels.jarnioux.hotel10.name'),
        stars: 3,
        location: '195 Chemin de Bennevent, 69640 Denicé, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/domaine-de-benevent.jpg',
        url: 'http://www.domainedebenevent.com/les-chambres-hote-gite.html',
        phone: '+33 4 74 68 83 07',
        email: 'gaelle.pinet@benevent.fr',
        description: i18n.__('hotels.jarnioux.hotel10.description'),
        price: 1985,
      },
    ];

    return (
      <section id="hotels-list">
        <div className="ui container">

          <h2>{i18n.__('hotels.lyon.title')}</h2>
          <div className="ui vertically divided grid">
            {lyonHotels.map((hotel) => (
              <HotelsListItem key={hotel._id} {...hotel} />
            ))}
          </div>

          <h2>{i18n.__('hotels.jarnioux.title')}</h2>
          <div className="ui vertically divided grid">
            {jarniouxHotels.map((hotel) => (
              <HotelsListItem key={hotel._id} {...hotel} />
            ))}
          </div>

          <h3>{i18n.__('hotels.agencies.title')}</h3>
          <p dangerouslySetInnerHTML={{ __html: i18n.__('hotels.agencies.1') }} />
          <p dangerouslySetInnerHTML={{ __html: i18n.__('hotels.agencies.2') }} />
          <p dangerouslySetInnerHTML={{ __html: i18n.__('hotels.agencies.3') }} />
        </div>
      </section>
    );
  }
}
