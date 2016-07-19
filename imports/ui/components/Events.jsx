import React from 'react';
import i18n from 'meteor/universe:i18n';
import Event from './Event.jsx';

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: '',
    };
  }

  componentDidMount() {
    i18n.onChangeLocale((newLocale) => {
      this.setState({ locale: newLocale });
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  events() {
    return [
      {
        _id: 1,
        name: i18n.__('home.events.wedding.name'),
        image1: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/events/church1.jpg',
        image2: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/events/church2.jpg',
        date: i18n.__('home.events.wedding.date'),
        time: i18n.__('home.events.wedding.time'),
        description: i18n.__('home.events.wedding.description'),
        google: 'https://www.google.com/maps/dir/Current+Location/45.955545,4.780199/',
        waze: 'https://waze.to/lr/hu05mky08e',
        venue: i18n.__('home.events.wedding.venue'),
        address: '35 Chemin du Berrier, 01600 Saint-Didier-de-Formans, France',
      },
      {
        _id: 2,
        name: i18n.__('home.events.cocktail.name'),
        image1: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/events/cocktail1.jpg',
        image2: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/events/cocktail2.jpg',
        date: i18n.__('home.events.cocktail.date'),
        time: i18n.__('home.events.cocktail.time'),
        description: i18n.__('home.events.cocktail.description'),
        google: 'https://www.google.com/maps/dir/Current+Location/Manoir+de+la+Garde,+170+impasse+de+la+Garde,+69640+Jarnioux,+France/',
        waze: 'https://waze.to/lr/hu05m90pkp',
        venue: i18n.__('home.events.cocktail.venue'),
        address: '170 impasse de la Garde, 69640 Jarnioux, France',
      },
      {
        _id: 3,
        name: i18n.__('home.events.reception.name'),
        image1: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/events/reception1.jpg',
        image2: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/events/reception2.jpg',
        date: i18n.__('home.events.reception.date'),
        time: i18n.__('home.events.reception.time'),
        description: i18n.__('home.events.reception.description'),
        google: 'https://www.google.com/maps/dir/Current+Location/Manoir+de+la+Garde,+170+impasse+de+la+Garde,+69640+Jarnioux,+France/',
        waze: 'https://waze.to/lr/hu05m90pkp',
        venue: i18n.__('home.events.reception.venue'),
        address: '170 impasse de la Garde, 69640 Jarnioux, France',
      },
    ];
  }

  renderEvents() {
    return this.events().map((event) => (
      <div key={event._id} className="column">
        <Event {...event} />
      </div>
    ));
  }

  render() {
    return (
      <section id="events">
        <div className="ui container">
          <div className="ui three column middle aligned very relaxed stackable grid">
            {this.renderEvents()}
          </div>

          <div className="ui segment center aligned">
            <h3>{i18n.__('home.events.brunch.name')}</h3>
            <p>{i18n.__('home.events.brunch.date')}</p>
            <p>{i18n.__('home.events.brunch.venue')}</p>
            <h5>{i18n.__('home.events.brunch.description')}</h5>
          </div>
        </div>
      </section>
    );
  }
}
