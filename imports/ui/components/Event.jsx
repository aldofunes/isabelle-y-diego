import React, { Component, PropTypes } from 'react';

export default class Event extends Component {
  render() {
    return (
      <div className="ui fluid card">
        {/* This will generate two images and swap them on hover */}
        <div className="ui slide masked reveal image">
          <img src={this.props.image1} className="visible content"/>
          <img src={this.props.image2} className="hidden content"/>
        </div>
        <div className="content">
          <span className="right floated">{this.props.time}</span>
          <span className="header">{this.props.name}</span>
          <p className="description">{this.props.description}</p>
        </div>
        <div className="content">
          <h4 className="ui header">{this.props.venue}</h4>
          <p>{this.props.address}</p>
        </div>
        <div className="extra content">
          <a href={this.props.google} className="ui inverted red small icon button">
            <i className="google icon"/> Maps
          </a>
          <a href={this.props.waze} className="ui inverted blue small icon button right floated">
            <i className="car icon"/> Waze
          </a>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  address: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  google: PropTypes.string.isRequired,
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  waze: PropTypes.string.isRequired,
};
