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
        name: 'Château de Bagnol',
        stars: 5,
        location: 'Le Bourg, 69620 Bagnols, Francia',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/chateau.jpg',
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
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/la-bastide.jpg',
        url: 'http://www.booking.com/hotel/fr/la-bastide-jarnioux.es.html',
        phone: '+33 4 74 02 86 29',
        email: 'contact@labastidejarnioux.fr',
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
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/la-chipotte.jpg',
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
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-des-sources.jpg',
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
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-du-chene.jpg',
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
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/le-clos-marze.jpg',
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
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/clos-des-pierres-dorees.jpg',
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
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/hotels/domaine-de-benevent.jpg',
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
