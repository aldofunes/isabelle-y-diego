import React from 'react';
import { Link } from 'react-router';
import i18n from 'meteor/universe:i18n';
import Tour from './Tour.jsx';

export default class TourCards extends React.Component {
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
        isFeatured: true,
        name: i18n.__('home.tourCards.tour1.name'),
        price: i18n.__('home.tourCards.tour1.price'),
        duration: i18n.__('home.tourCards.tour1.duration'),
        description: i18n.__('home.tourCards.tour1.description'),
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/tour1.jpg',
        url: 'https://www.lyoncitycard.com/?lang=2',
      },
      {
        _id: '2',
        isFeatured: false,
        name: i18n.__('home.tourCards.tour2.name'),
        price: i18n.__('home.tourCards.tour2.price'),
        duration: i18n.__('home.tourCards.tour2.duration'),
        description: i18n.__('home.tourCards.tour2.description'),
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/tour2.jpg',
        url: 'http://www.en.lyon-france.com/Things-to-do/Culture-Activities/Visit-Lyon-differently/Beaujolais-Le-Grand-Tour',
      },
      {
        _id: '3',
        isFeatured: false,
        name: i18n.__('home.tourCards.tour3.name'),
        price: i18n.__('home.tourCards.tour3.price'),
        duration: i18n.__('home.tourCards.tour3.duration'),
        description: i18n.__('home.tourCards.tour3.description'),
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/tour3.jpg',
        url: 'http://www.pariscityvision.com/en/lyon-le-grand-tour',
      },
    ];
    return (
      <section id="tour-cards">
        <div className="ui container">
          <h2 className="ui header">{i18n.__('home.tourCards.title')}</h2>
          <div className="ui middle aligned three column relaxed stackable grid">
            {tours.map((tour) => (
              <div key={tour._id} className="column">
                <Tour {...tour} />
              </div>
            ))}
          </div>
          <br />
          <Link to="recommendations" className="ui inverted brown fluid button">
            {i18n.__('home.tourCards.more')}
          </Link>
        </div>
      </section>
    );
  }
}