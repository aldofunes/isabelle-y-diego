import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
const t = i18n.createReactiveTranslator('home.couple');
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
                description={t('bride')}
              />
            </div>
            <div className="ui vertical divider">
              <img
                className="ui fluid image"
                src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/icons/couple.svg"
                alt={t('bride')}
              />
            </div>
            <div className="column">
              <Fiancee
                name="Diego Zavala"
                picture="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/diego.jpg"
                description={t('groom')}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
