import React, { Component, PropTypes } from 'react';

export default class Location extends Component {
  render() {
    return (
      <h2 className="ui icon header">
        <i className="marker icon"/>
        <div className="content">
          {this.props.name}
          <div className="sub header">{this.props.address}</div>
        </div>
        <div class="ui buttons">
          <a href={this.props.googleMaps} target="_blank" className="ui secondary button">
            Google
          </a>
          <a href={this.props.waze} target="_blank" className="ui secondary button">
            Waze
          </a>
        </div>
      </h2>
    );
  }
}

Location.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  googleMaps: PropTypes.string.isRequired,
  waze: PropTypes.string.isRequired,
};
