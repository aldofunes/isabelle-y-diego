import React from 'react';
import { Link } from 'react-router';
import Tour from './Tour.jsx';

export default class TourCards extends React.Component {
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

  render() {
    return (
      <section id="tour-cards">
        <div className="ui container">
          <h2 className="ui header">Tours</h2>
          <div className="ui middle aligned three column relaxed stackable grid">
            {this.tours().map((tour) => (
              <div key={tour._id} className="column">
                <Tour {...tour} />
              </div>
            ))}
          </div>
          <br />
          <Link to="recommendations" className="ui inverted brown fluid button">
            Visitas en la región (tours recomendados)
          </Link>
        </div>
      </section>
    );
  }
}