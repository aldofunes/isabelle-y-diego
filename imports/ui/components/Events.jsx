import React, { Component, PropTypes } from 'react';

import Event from './Event.jsx';

export default class Events extends Component {
  events() {
    return [
      {
        _id: 1,
        name: 'Ceremonia religiosa',
        image1: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/church1.jpg',
        image2: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/church2.jpg',
        date: '13 de agosto, 2016',
        time: '3:30 PM',
        description: 'Celebra con nosotros nuestra boda',
        google: 'https://www.google.com/maps/dir/Current+Location/45.955545,4.780199/',
        waze: 'https://waze.to/lr/hu05mky08e',
        venue: 'Eglise de Saint Didier de Formanas',
        address: '35 Chemin du Berrier, 01600 Saint-Didier-de-Formans, France',
      },
      {
        _id: 2,
        name: 'Cocktail',
        image1: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/cocktail1.jpg',
        image2: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/cocktail2.jpg',
        date: '13 de agosto, 2016',
        time: '5:30 PM',
        description: 'Cocktail de inicio del festejo: el tradicional "vin d\'honneur" francés: Champagne, tequila,… y algo más!',
        google: 'https://www.google.com/maps/dir/Current+Location/Manoir+de+la+Garde,+170+impasse+de+la+Garde,+69640+Jarnioux,+France/',
        waze: 'https://waze.to/lr/hu05m90pkp',
        venue: 'Terraza de Manoir de la garde',
        address: '170 impasse de la Garde, 69640 Jarnioux, France',
      },
      {
        _id: 3,
        name: 'Recepción',
        image1: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/reception1.jpg',
        image2: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/reception2.jpg',
        date: '13 de agosto, 2016',
        time: '7:30 PM',
        description: '¡Cena y baile para todos!',
        google: 'https://www.google.com/maps/dir/Current+Location/Manoir+de+la+Garde,+170+impasse+de+la+Garde,+69640+Jarnioux,+France/',
        waze: 'https://waze.to/lr/hu05m90pkp',
        venue: 'Salón de Manoir de la garde',
        address: '170 impasse de la Garde, 69640 Jarnioux, France',
      },
    ];
  }

  renderEvents() {
    return this.events().map((event) => (
      <div key={event._id} className="column">
        <Event {...event}/>
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
            <h3>Recalentado</h3>
            <p>Domingo 14 de agosto, 12:00 pm</p>
            <p>Manoir de la Garde en Jarnioux</p>
            <h5>
              Los esperamos para la tradicional comida del día siguiente a la boda, un brunch
              donde la idea es seguir disfrutando de la presencia de todos
            </h5>
          </div>
        </div>
      </section>
    );
  }
}
