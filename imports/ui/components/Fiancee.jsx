import React, { Component, PropTypes } from 'react';

export default class Fiancee extends Component {
  renderSocialNetworks() {
    this.props.socialNetworks.map((socialNetwork) => {
      return (
        <li>Social network {socialNetwork.name}</li>
      );
    });
  }

  render() {
    return (
      <div className="ui center aligned">
        <img className="ui centered medium circular image" src="http://placehold.it/600"/>

        <h3 className="header">{this.props.name}</h3>
        <p className="description">{this.props.description}</p>
        <ul>
          {this.renderSocialNetworks()}
        </ul>
      </div>
    );
  }
}

Fiancee.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  socialNetworks: PropTypes.array.isRequired,
};
