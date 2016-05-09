import React, { Component, PropTypes } from 'react';

import Event from './Event.jsx';

export default class Events extends Component {
  render() {
    return (
      <div className="ui three column middle aligned very relaxed stackable grid">
        <div className="column">
          <Event
            name="Ceremonia religiosa"
            image1="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/church.jpg"
            image2="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/church.jpg"
            date="13 de agosto, 2016"
            time="3:30 PM"
            description="Celebra con nosotros nuestra boda"
            google="https://www.google.com/maps/dir/Current+Location/45.955545,4.780199/"
            waze="https://waze.to/lr/hu05mky08e"
            venue="Eglise de Saint Didier de Formanas"
            address="35 Chemin du Berrier, 01600 Saint-Didier-de-Formans, France"
          />
        </div>
        <div className="column">
          <Event
            name="Cocktail"
            image1="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/cocktail.jpg"
            image2="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/cocktail.jpg"
            date="13 de agosto, 2016"
            time="5:30 PM"
            description="Un pequeño trago antes de la fiesta"
            google="https://www.google.com/maps/dir/Current+Location/Manoir+de+la+Garde,+170+impasse+de+la+Garde,+69640+Jarnioux,+France/"
            waze="https://waze.to/lr/hu05m90pkp"
            venue="Terraza de Manoir de la garde"
            address="170 impasse de la Garde, 69640 Jarnioux, France"
          />
        </div>
        <div className="column">
          <Event
            name="Recepción"
            image1="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/reception.jpg"
            image2="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/reception.jpg"
            date="13 de agosto, 2016"
            time="7:30 PM"
            description="Bailemos todos juntos"
            google="https://www.google.com/maps/dir/Current+Location/Manoir+de+la+Garde,+170+impasse+de+la+Garde,+69640+Jarnioux,+France/"
            waze="https://waze.to/lr/hu05m90pkp"
            venue="Salón de Manoir de la garde"
            address="170 impasse de la Garde, 69640 Jarnioux, France"
          />
        </div>
      </div>
    );
  }
}
