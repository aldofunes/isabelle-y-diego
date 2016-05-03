import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Event extends Component {
  render() {
    return (
      <div className="ui fluid card">
        <div className="image">
          <img src={this.props.image}/>
        </div>
        <div className="content">
          <a className="header">{this.props.name}</a>
          <div className="meta">
            <span className="date">{this.props.date} {this.props.time}</span>
          </div>
          <div className="description">
            {this.props.description}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="page icon"/>
            {this.props.notes}
          </a>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
