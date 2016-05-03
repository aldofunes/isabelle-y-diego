import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Event from './Event.jsx';

export default class Events extends Component {
  render() {
    return (
      <section id="events">
        <div className="ui three column middle aligned very relaxed stackable grid">
          <div className="column">
            <Event
              name="Ceremonia religiosa"
              image="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/church.jpg"
              date="13 de agosto, 2016"
              time="3:30 PM"
              description="Celebra con nosotros nuestra boda"
              notes="Iglesia x cerca de y"
            />
          </div>
          <div className="column">
            <Event
              name="Cocktail"
              image="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/cocktail.jpg"
              date="13 de agosto, 2016"
              time="5:30 PM"
              description="Un pequeño trago antes de la fiesta"
              notes="Será dentro del viñedo"
            />
          </div>
          <div className="column">
            <Event
              name="Recepción"
              image="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/reception.jpg"
              date="13 de agosto, 2016"
              time="7:30 PM"
              description="Bailemos todos juntos"
              notes="En el viñedo"
            />
          </div>
        </div>
      </section>
    );
  }
}

Event.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
