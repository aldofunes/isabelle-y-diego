import React, { Component } from 'react';

import Fiancee from './Fiancee.jsx';

export default class Couple extends Component {
  render() {
    return (
      <div className="ui two column stackable grid">
        <div className="column">
          <Fiancee
            name="Isabelle Richards"
            description="Cum cursus tolerare, omnes guttuses anhelare bi-color, velox aususes.
              Hercle, animalis gratis!"
            socialNetworks={[{ name: 'Facebook' }]}
          />
        </div>
        <div className="ui vertical divider">
          &nbsp;
          <i className="heart icon"/>
          &nbsp;
        </div>
        <div className="column">
          <Fiancee
            name="Diego Zavala"
            description="Cum vigil potus, omnes messores aperto festus, albus buboes.
              Abactors cantare in amivadum!"
            socialNetworks={[{ name: 'Facebook' }]}
          />
        </div>
      </div>
    );
  }
}
