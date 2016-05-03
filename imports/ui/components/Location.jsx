import React, { Component } from 'react';

export default class Location extends Component {
  render() {
    return (
      <h2 className="ui icon header">
        <i className="marker icon"/>
        <div className="content">
          Manoir de la garde
          <div className="sub header">170 impasse de la Garde, 69640 Jarnioux, France</div>
        </div>
        <button className="ui secondary button">
          Obtener direcciones (Google Maps)
        </button>
      </h2>
    );
  }
}