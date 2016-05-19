import React from 'react';

import CitiesListItem from './CitiesListItem.jsx';

export default class CitiesList extends React.Component {
  cities() {
    return [
      {
        _id: '1',
        name: 'Lyon',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/cities/lyon.jpg',
        url: 'http://www.france-voyage.com/francia-guia-turismo/lyon-669.htm',
        description: 'Lyon, capital de la región Ródano-Alpes, es famosa por su centro histórico, inscrito en el patrimonio mundial de la UNESCO. Situado entre la colina de Fourvière y el Saona, el Viejo Lyon está repleto de tesoros. Las calles pintorescas, las mansiones renacentistas, la catedral, sus traboules (pasajes cerrados) y los patios interiores, te maravillaran al instante. Es imprescindible pasear por las calles de Saint-Jean, Judería o del Buey que están repletas de atractivos.',
      },
      {
        _id: '2',
        name: 'Jarnioux',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/cities/jarnioux.jpg',
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
