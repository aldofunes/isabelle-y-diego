import React from 'react';

import Tour from './Tour.jsx';

export default class Tours extends React.Component {
  tours() {
    return [
      {
        _id: '1',
        name: 'Tarjeta de Lyon por 1, 2 o 3 días',
        isFeatured: true,
        price: '1 día: €24.00',
        duration: '1 a 3 días',
        description: 'Disfruta ilimitado acceso a transporte público, descuentos a museos, ' +
        'tours, teatros, renta de bicicletas, cruceros en el río y más! ',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/tour1.jpg',
        url: 'https://www.lyoncitycard.com/?lang=2',
      },
      {
        _id: '2',
        name: 'Gran Tour en Beaujolais',
        isFeatured: false,
        price: '€77.00',
        duration: '4 h. 30 min',
        description: 'Descubre todas las maravillas de los viñedos del Beaujolais. Visita sus ' +
        'increíbles capillas y aldeas, entre otros. Incluye cata de vino. ',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/tour2.jpg',
        url: 'http://www.en.lyon-france.com/Things-to-do/Culture-Activities/Visit-Lyon-differently/Beaujolais-Le-Grand-Tour',
      },
      {
        _id: '3',
        name: 'Autobús Turístico en Lyon',
        isFeatured: false,
        price: '€20.00',
        duration: '1 día',
        description: 'Descubre la ciudad de Lyon y disfruta sus únicas y fantásticas vistas ' +
        'desde el segundo piso de un autobús. ',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/tour3.jpg',
        url: 'http://www.pariscityvision.com/en/lyon-le-grand-tour',
      },
    ];
  }

  moreTours() {
    return [
      {
        _id: '1',
        name: 'Museo del Vino Georges Duboeufz',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/georges-duboeuf.jpg',
        url: 'http://www.hameauduvin.com/en/',
      },
      {
        _id: '2',
        name: 'Los Hospicios de Beaune, la capital de Burgundía',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/beaune.jpg',
        url: 'http://www.france-voyage.com/francia-guia-turismo/beaune-269.htm',
      },
      {
        _id: '3',
        name: 'Ciudad Medieval de Pérouges',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/perouges.jpg',
        url: 'http://www.es.lyon-france.com/Descubrir/Los-alrededores-de-Lyon/Ciudad-Medieval-de-Perouges',
      },
      {
        _id: '4',
        name: 'Chamonix y el Aiguille du Midi',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/chamonix.jpg',
        url: 'https://www.tripadvisor.com.mx/Attraction_Review-g187261-d195588-Reviews-Aiguille_du_Midi-Chamonix_Haute_Savoie_Rhone_Alpes.html',
      },
      {
        _id: '5',
        name: 'Pueblo del Santo Curé d’Ars',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/sait-cure-dars.jpg',
        url: 'www.arsnet.org/',
      },
      {
        _id: '6',
        name: 'Monasterio royal de Brou',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/royal-de-brou.jpg',
        url: 'http://www.france-voyage.com/francia-ciudades/bourg-en-bresse-482/monasterio-royal-brou-21579.htm',
      },
      {
        _id: '6',
        name: 'Parc Oiseaux',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/oiseaux.jpg',
        url: 'http://www.parcdesoiseaux.com/fr/index.php',
      },
    ];
  }

  render() {
    return (
      <section id="tours">
        <div className="ui container">
          <h2 className="ui header">Tours</h2>
          <div className="ui middle aligned three column relaxed stackable grid">
            {this.tours().map((tour) => (
              <div key={tour._id} className="column">
                <Tour {...tour} />
              </div>
            ))}
          </div>

          <h3>Más excursiones</h3>

          <div className="ui middle aligned four column very relaxed doubling grid">
            {this.moreTours().map((tour) => (
              <div key={tour._id} className="column">
                <a href={tour.url}><h4>{tour.name}</h4></a>
                <img src={tour.image} alt={tour.name} className="ui rounded image"/>
              </div>
            ))}
          </div>
          <br/>
          <p>
            Para más opciones e informaciones de excursiones en Lyon y en el Beaujolais, pueden
            contactar a Sandrine Baeza, amiga de la familia trabajando en la agencia Thomas Cook en
            la región de Lyon y está a sus órdenes: <a
            href="mailto:sandrine.baeza@thomascook.fr">sandrine.baeza@thomascook.fr</a>
          </p>
        </div>
      </section>
    );
  }
}
