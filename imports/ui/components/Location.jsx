import React, { Component, PropTypes } from 'react';

import Forecast from '../components/Forecast.jsx';

export default class Location extends Component {
  render() {
    return (
      <div id="address">
        <h2>{this.props.name}</h2>
        <h4>{this.props.address}</h4>

        <div class="ui buttons">
          <a href={this.props.googleMaps} target="_blank" className="ui secondary button">
            Google
          </a>
          <a href={this.props.waze} target="_blank" className="ui secondary button">
            Waze
          </a>
        </div>
      </div>
    );
  }
}

Location.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  googleMaps: PropTypes.string.isRequired,
  waze: PropTypes.string.isRequired,
};
