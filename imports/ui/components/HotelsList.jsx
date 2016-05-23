import React from 'react';

import HotelsListItem from './HotelsListItem.jsx';

export default class HotelsList extends React.Component {
  hotelsLyon() {
    return [
      {
        _id: '1',
        name: 'Sofitel Lyon Bellecour',
        stars: 5,
        location: '20 Quai Gailleton, 02. La Presqu\'île, 69002 Lyon, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/sofitel.jpg',
        url: 'http://www.booking.com/hotel/fr/le-royal-lyon.es.html?label=gen173nr-1DCAsoTUINbGUtcm95YWwtbHlvbkgzYgVub3JlZmigAYgBAZgBCrgBDMgBDNgBA-gBAagCAw;sid=1e44fae8a40d5795ea23ecbd79c8b196;dcid=12;dist=0&group_adults=2&sb_price_type=total&type=total&',
        phone: '+33 4 7837 5731',
        email: 'leroyal@institutpaulbocuse.com',
        description: 'El Hotel Le Royal Lyon - MGallery Collection ofrece vistas a la Place ' +
        'Bellecour, en el centro de Lyon, y está a solo 10 minutos a pie del centro histórico ' +
        'de Lyon y a 5 km de Cité Internationale. Hay un bar salón y conexión WiFi gratuita en ' +
        'todas las instalaciones.',
        price: 2786,
      },
      {
        _id: '2',
        name: 'Le Royal Lyon',
        stars: 4,
        location: '20 Place Bellecour, 02. La Presqu\'île, 69002 Lyon, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-royal.jpg',
        url: 'http://www.booking.com/hotel/fr/sofitel-lyon.es.html',
        phone: '+33 4 7241 2020',
        email: 'H0553@sofitel.com',
        description: 'Este hotel de 5 estrellas está situado en el corazón de Lyon, a solo 450 ' +
        'metros de la plaza de Bellecour, que alberga boutiques de lujo. Cuenta con centro de ' +
        'fitness, gimnasio, hammam y centro de bienestar.',
        price: 4179,
      },
      {
        _id: '3',
        name: 'Mercure Lyon Centre Plaza République',
        stars: 4,
        location: '5 Rue Stella, 02. La Presqu\'île, 69002 Lyon, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/mercure-lyon.jpg',
        url: 'http://www.booking.com/hotel/fr/lyon-plaza-republique.es.html',
        phone: '+33 4 7837 5050',
        email: 'h2951@accor.com',
        description: 'El Mercure Lyon Centre Plaza République, situado en la Presqu\'ile de Lyon,' +
        ' en el centro de la ciudad, a 10 minutos a pie del centro histórico, se ha renovado ' +
        'totalmente en junio de 2015 y ofrece alojamiento insonorizado con aire acondicionado y ' +
        'conexión WiFi gratuita.',
        price: 1837,
      },
      {
        _id: '4',
        name: 'Cour des Loges',
        stars: 5,
        location: '6, rue du Boeuf, 05. Centro histórico de Lyon, 69005 Lyon, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/cour-des-loges.jpg',
        url: 'http://www.booking.com/hotel/fr/courdesloges.es.html?label=gen173nr-1DCAsoTUIMY291cmRlc2xvZ2VzSDNiBW5vcmVmaKABiAEBmAEKuAEMyAEM2AED6AEBqAID;sid=1e44fae8a40d5795ea23ecbd79c8b196;dcid=4;dist=0&group_adults=2&no_rooms=1&sb_price_type=total&type=total&',
        phone: '+33 4 7277 4444 ',
        email: 'contact@courdesloges.com',
        description: 'Situado en el casco antiguo de Lyon, el Cour des Loges consta de 4 ' +
        'edificios renacentistas restaurados ubicados alrededor de un patio con techo ' +
        'acristalado. Cuenta con 2 restaurantes, 1 bodega y 1 lujoso spa con una piscina ' +
        'climatizada con contra-corriente.',
        price: 4644.33,
      },
      {
        _id: '5',
        name: 'Villa Florentine',
        stars: 5,
        location: '25 Montée St Barthélémy, 05. Centro histórico de Lyon, 69005 Lyon, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/villa-florentine.jpg',
        url: 'http://www.booking.com/hotel/fr/villaflorentine.es.html?label=gen173nr-1DCAsoTUIPdmlsbGFmbG9yZW50aW5lSDNiBW5vcmVmaKABiAEBmAEKuAEMyAEM2AED6AEBqAID;sid=1e44fae8a40d5795ea23ecbd79c8b196;dcid=4;dist=0&group_adults=2&no_rooms=1&sb_price_type=total&type=total&',
        phone: '+33 4 7256 5656',
        email: '',
        description: 'La Villa Florentine está en el corazón del casco antiguo de Lyon y goza de ' +
        'vistas panorámicas a la ciudad. Este antiguo convento dispone de un restaurante con una ' +
        'estrella Michelin, de habitaciones elegantes y de conexión Wi-Fi gratuita en todo el ' +
        'establecimiento.',
        price: 4179,
      },
    ];
  }

  hotelsJarnioux() {
    return [
      {
        _id: '3',
        name: 'Château de Bagnol',
        stars: 5,
        location: 'Le Bourg, 69620 Bagnols, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/chateau.jpg',
        url: 'http://www.booking.com/hotel/fr/chateaudebagnols.es.html',
        phone: '+33 4 74 71 40 00',
        email: 'info@chateaudebagnols.fr',
        latitude: 45.916646,
        longitude: 4.608237,
        description: 'El hotel Château de Bagnol ocupa un monumento histórico con más de 8 ' +
        'siglos de antigüedad situado en el corazón de Beaujolais, y alberga un restaurante de ' +
        'prestigio. Se encuentra en una finca con jardines de estilo francés, fosos, murallas, ' +
        'torres y piedras doradas rodeada de viñedos..',
        price: 7349,
      },
      {
        _id: '4',
        name: 'La Bastide',
        stars: 3,
        location: 'Le Bourg, 69640 Jarnioux, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/la-bastide.jpg',
        url: 'http://www.booking.com/hotel/fr/la-bastide-jarnioux.es.html',
        phone: '+33 4 74 02 86 29',
        email: 'contact@labastidejarnioux.fr',
        latitude: 45.965604,
        longitude: 4.625037,
        description: 'La Bastide B&B ofrece alojamiento moderno con vistas a un jardín, una ' +
        'terraza y conexión Wi-Fi gratuita. Ocupa un edificio del siglo XIX situado en ' +
        'Jarnioux, a escasos 10 km de Villefranche-sur-Saône.',
        price: 2073,
      },
      {
        _id: '5',
        name: 'La Chipotte ',
        stars: 3,
        location: '30 rue de la Mairie, 69640, Jarnioux, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/la-chipotte.jpg',
        url: 'http://www.booking.com/hotel/fr/la-chipotte.es.html',
        phone: '+33 4 26 74 10 77',
        email: 'jarnioux@hotmail.fr',
        description: 'La Chipotte está situada en Ville-sur-Jarnioux y ofrece una piscina al aire' +
        ' libre, una sauna y un jardín. Se halla a 15 minutos en coche de Villefranche-sur-Saône.',
        price: 2150,
      },
      {
        _id: '6',
        name: 'Le Clos des Sources',
        stars: 3,
        location: '28 Impasse des sources, 69640 Jarnioux, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-des-sources.jpg',
        url: 'http://www.leclosdessourcesbonave.fr/reservez-le-clos-des-sources-bonave/',
        phone: '+33 4 74 03 82 41',
        email: 'leclosdessources.bonave@orange.fr',
        description: 'Una hermosa propiedad en el corazón de Beaujolais de los siglos XVI y XVII.' +
        ' Disfruta del jardín con olivos, lavanda y rosas o del pan casero que ahí se hornea',
        price: 1985,
      },
      {
        _id: '7',
        name: 'Le Clos du Chêne',
        stars: 3,
        location: '370 Chemin du Carre, 01600 Saint-Bernard, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-du-chene.jpg',
        url: 'http://www.booking.com/hotel/fr/le-clos-du-chene.es.html',
        phone: '+33 4 74 00 45 39',
        email: 'info@leclosduchene.com',
        description: 'Le Clos du Chêne se encuentra en un amplio parque cerrado, a 5 km de ' +
        'Villefranche-sur-Saone. Sus habitaciones disponen de un balcón orientado al sur con ' +
        'vistas a los jardines o al río Saone.',
        price: 1985,
      },
      {
        _id: '8',
        name: 'Le Clos Marzé',
        stars: 3,
        location: '262 Grand Rue, 69640 Lacenas, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-marze.jpg',
        url: 'http://www.le-clos-marze.fr/index_en.php',
        phone: '+33 4 74 67 31 76',
        email: 'leclosmarze@yahoo.fr',
        description: 'Ubicado en Lacenas, en una bella propiedad en el camino del vino, en una ' +
        'villa típica de Beaujolais de Pierres Dorées, le Clos Maré te invita a sus cuartos ' +
        'arreglados con gran cuidado y refinamiento',
        price: 1985,
      },
      {
        _id: '9',
        name: 'Clos des pierres dorées (CASA)',
        stars: 3,
        location: 'Le Boîtier, 69620 Theizé, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/clos-des-pierres-dorees.jpg',
        url: 'http://www.booking.com/hotel/fr/domaine-des-pierres-dorees.es.html',
        phone: '+33 4 74 71 26 38',
        email: 'contact@closdespierresdorees.com',
        description: 'El Domaine des Pierres Dorées ofrece alojamiento independiente en Ternand. ' +
        'El desayuno está incluido. También hay conexión WiFi gratuita y TV de pantalla plana. ' +
        'Esta casa consta de zona de estar, 3 dormitorios, cocina totalmente equipada, zona de ' +
        'comedor y baño con artículos de aseo gratuitos, bañera y ducha.',
        price: 1985,
      },
      {
        _id: '10',
        name: 'Gaëlle Pinet',
        stars: 3,
        location: '195 Chemin de Bennevent, 69640 Denicé, Francia',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/domaine-de-benevent.jpg',
        url: 'http://www.domainedebenevent.com/les-chambres-hote-gite.html',
        phone: '+33 4 74 68 83 07',
        email: 'gaelle.pinet@benevent.fr',
        description: 'Un estudio en la planta baja del patio con 3 camas, adecuado para personas ' +
        'con discapacidad o movilidad reducida. 2 pequeños bungalows con vista al jardín con ' +
        'capacidad para 2 personas cada uno. Una casa con 2 habitaciones para 2 personas (+ un ' +
        'sofá cama en el salón).',
        price: 1985,
      },
    ];
  }

  renderHotelsLyonListItems() {
    return this.hotelsLyon().map((hotel) => (
      <HotelsListItem key={hotel._id} {...hotel}/>
    ));
  }

  renderHotelsJarniouxListItems() {
    return this.hotelsJarnioux().map((hotel) => (
      <HotelsListItem key={hotel._id} {...hotel}/>
    ));
  }

  render() {
    return (
      <section id="hotels-list">
        <div className="ui container">
          <h1 className="ui header">Hoteles recomendados</h1>

          <h2>Hoteles en Lyon</h2>
          <div className="ui vertically divided grid">
            {this.renderHotelsLyonListItems()}
          </div>

          <h2>Hoteles en Jarnioux</h2>
          <div className="ui vertically divided grid">
            {this.renderHotelsJarniouxListItems()}
          </div>

          <h3>Agencias y portales</h3>
          <p>
            Sandrine Baeza, amiga de la familia trabajando en la agencia Thomas Cook en la región de
            Lyon y está a sus órdenes:
            <a href="mailto:sandrine.baeza@thomascook.fr"> sandrine.baeza@thomascook.fr</a>
          </p>
          <p>
            Te recomendamos visitar <a href="www.airbnb.com">airbnb.com</a> si buscas alguna casa,
            departamento o solamente un caurto
          </p>
          <p>
            Para una lista completa de hoteles, visita <a href="www.booking.com">Booking.com</a>
          </p>

        </div>
      </section>
    );
  }
}
