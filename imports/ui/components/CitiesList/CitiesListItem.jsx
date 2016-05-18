import React, { PropTypes } from 'react';

export default class CitiesListItem extends React.Component {
  render() {
    return (
      <div className="city">
        <h1 className="ui header">{this.props.name}</h1>
        <div className="ui stackable relaxed grid">
          <div className="six wide column">
            <img src={this.props.image} alt="Lyon" className="ui fluid image"/>
          </div>
          <div className="ten wide column">
            <p>{this.props.description}</p>
            <a
              href={this.props.url}
              target="_blank"
              className="ui inverted red expanded button"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    );
  }
}

CitiesListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
};
