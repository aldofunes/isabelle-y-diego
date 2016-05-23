import React from 'react';

import CitiesListItem from './CitiesListItem.jsx';

export default class CitiesList extends React.Component {
  cities() {
    return [
      {
        _id: '1',
        name: 'Lyon',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/cities/lyon.jpg',
        url: 'http://www.france-voyage.com/francia-guia-turismo/lyon-669.htm',
        description: 'Ciudad Patrimonio Mundial de la Humanidad por la UNESCO \n\n' +
        'Gran ciudad bimilenaria y capital de la seda, en la confluencia del Ródano y del Saona, Lyon está adosada a las colinas de Fourvière y de la Croix Rousse. Le ofrece un viaje insólito por el tiempo y las culturas (ver los anfiteatros romanos y el Viejo Lyon renacentista), con su centro incluido en el Patrimonio Mundial, el recodo de sus calles estrechas, sus “traboules“ (pasadizos) a lo largo de los muelles animados, las grandes plazas de la península y, durante la noche, los más de 200 lugares iluminados. \n\n' +
        'Cruzando el río Saône, la Península alberga el Museo de Bellas Artes, segundo museo de Francia tras el Louvre, el Museo de los Tejidos y de las Artes Decorativas muestra viva de la industria de la seda en la localidad' +
        'Lyon también es famosa por ser la capital de la gastronomía francesa: de las grandes mesas Estrella Michelin a las tabernas ("Bouchons lyonnais"), sus papilas le agradecerán la parada.\n\n' +
        'Gran metrópolis, los amantes de las compras la disfrutarán: creadores, moda, anticuarios, mercados, plazas, jardines: ¡Lyon te sorprenderá!',
      },
      {
        _id: '2',
        name: 'Jarnioux',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/cities/jarnioux.jpg',
        url: 'http://www.france-voyage.com/francia-ciudades/jarnioux-27371.htm',
        description: 'El pueblo de Jarnioux se localiza en el corazón de Beaujolais y es sin duda, uno de los pueblos más bellos en el conocido País De Las Piedras Doradas. Los matices dorados de las casas, los castillos, los viñedos y las iglesias iluminan el paisaje de Jarnioux. No olvides visitar la capilla de Santa Catalina y el espectacular castillo de Bois-Franc.',
      },
    ];
  }

  renderCities() {
    return this.cities().map((city) => (
      <CitiesListItem key={city._id} {...city} />
    ));
  }

  render() {
    return (
      <div>
        {this.renderCities()}
      </div>
    );
  }
}
