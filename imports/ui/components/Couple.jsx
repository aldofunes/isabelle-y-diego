import React, { Component } from 'react';

import Fiancee from './Fiancee.jsx';

export default class Couple extends Component {
  render() {
    return (
      <div className="ui two column middle aligned very relaxed stackable grid">
        <div className="column">
          <Fiancee
            name="Isabelle Richards"
            description="Se dedica a la casa, los hijos y demás"
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
            description="Trae el bistec a la casa"
            socialNetworks={[{ name: 'Facebook' }]}
          />
        </div>
      </div>
    );
  }
}
