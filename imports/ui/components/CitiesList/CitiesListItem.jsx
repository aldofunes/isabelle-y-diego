import React, { PropTypes } from 'react';

export default class CitiesListItem extends React.Component {
  render() {
    return (
      <section className="city">
        <div className="ui container">
          <div className="ui stackable relaxed grid">
            <div className="six wide column">
              <img src={this.props.image} alt="Lyon" className="ui fluid rounded image"/>
            </div>
            <div className="ten wide column">
              <h1 className="ui header">{this.props.name}</h1>
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
      </section>
    );
  }
}

CitiesListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
};
