import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
const Skycons = require('skycons')(window);

export default class Skycon extends Component {
  componentDidMount() {
    const skycons = new Skycons({ color: this.props.color });
    skycons.add(this.props.id, this.props.icon);
    skycons.play();
  }

  render() {
    return (
      <canvas
        id={this.props.id}
        width={this.props.size}
        height={this.props.size}
      />
    );
  }
}

Skycon.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
};
