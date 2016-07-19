import React from 'react';
import i18n from 'meteor/universe:i18n';
import CitiesListItem from './CitiesListItem.jsx';

export default class CitiesList extends React.Component {
  componentDidMount() {
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  render() {
    const cities = [
      {
        _id: '1',
        name: 'Lyon',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/cities/lyon.jpg',
        url: 'http://www.france-voyage.com/francia-guia-turismo/lyon-669.htm',
        description: i18n.__('recommendations.lyon'),
      },
      {
        _id: '2',
        name: 'Jarnioux',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/cities/jarnioux.jpg',
        url: 'http://www.france-voyage.com/francia-ciudades/jarnioux-27371.htm',
        description: i18n.__('recommendations.jarnioux'),
      },
    ];

    return (
      <div>
        {cities.map((city) => (
          <CitiesListItem key={city._id} {...city} />
        ))}
      </div>
    );
  }
}
