import React from 'react';
import i18n from 'meteor/universe:i18n';

export default class Tours extends React.Component {
  componentDidMount() {
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  render() {
    const tours = [
      {
        _id: '1',
        name: i18n.__('recommendations.tours.1'),
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/georges-duboeuf.jpg',
        url: 'http://www.hameauduvin.com/en/',
      },
      {
        _id: '2',
        name: i18n.__('recommendations.tours.2'),
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/beaune.jpg',
        url: 'http://www.france-voyage.com/francia-guia-turismo/beaune-269.htm',
      },
      {
        _id: '3',
        name: i18n.__('recommendations.tours.3'),
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/perouges.jpg',
        url: 'http://www.es.lyon-france.com/Descubrir/Los-alrededores-de-Lyon/Ciudad-Medieval-de-Perouges',
      },
      {
        _id: '4',
        name: i18n.__('recommendations.tours.4'),
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/chamonix.jpg',
        url: 'https://www.tripadvisor.com.mx/Attraction_Review-g187261-d195588-Reviews-Aiguille_du_Midi-Chamonix_Haute_Savoie_Rhone_Alpes.html',
      },
      {
        _id: '5',
        name: i18n.__('recommendations.tours.5'),
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/sait-cure-dars.jpg',
        url: 'www.arsnet.org/',
      },
      {
        _id: '6',
        name: i18n.__('recommendations.tours.6'),
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/royal-de-brou.jpg',
        url: 'http://www.france-voyage.com/francia-ciudades/bourg-en-bresse-482/monasterio-royal-brou-21579.htm',
      },
      {
        _id: '7',
        name: i18n.__('recommendations.tours.7'),
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/oiseaux.jpg',
        url: 'http://www.parcdesoiseaux.com/fr/index.php',
      },
    ];

    return (
      <section id="tours">
        <div className="ui container">
          <h2 className="ui header">{i18n.__('recommendations.tours.title')}</h2>

          <div className="ui middle aligned four column very relaxed doubling grid">
            {tours.map((tour) => (
              <div key={tour._id} className="column">
                <a href={tour.url}><h4>{tour.name}</h4></a>
                <img src={tour.image} alt={tour.name} className="ui rounded image"/>
              </div>
            ))}
          </div>
          <br/>
          <p dangerouslySetInnerHTML={{ __html: i18n.__('recommendations.agencies') }} />
        </div>
      </section>
    );
  }
}
