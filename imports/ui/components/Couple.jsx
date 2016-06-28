import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
import { Parallax } from 'react-parallax';
import Fiancee from './Fiancee.jsx';

export default class Couple extends Component {
  render() {
    return (
      <section id="couple">
        <div className="ui container center aligned">
          <div className="ui two column stackable very relaxed grid">
            <div className="column">
              <Fiancee
                name="Isabelle Richard"
                picture="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/isabelle.jpg"
                description={i18n.__('home.couple.bride')}
              />
            </div>
            <div className="ui vertical divider">
              <img
                className="ui fluid image"
                src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/icons/couple.svg"
                alt={i18n.__('home.banner.title')}
              />
            </div>
            <div className="column">
              <Fiancee
                name="Diego Zavala"
                picture="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/diego.jpg"
                description={i18n.__('home.couple.groom')}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
