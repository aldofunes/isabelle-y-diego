import React, { PropTypes } from 'react';

import $ from 'jquery';

export default class HotelCard extends React.Component {
  componentDidMount() {
    $('.ui.rating').rating({
      maxRating: 5,
    });

    $('.ui.card .dimmable.image').dimmer({
      on: 'hover',
    });
  }

  render() {
    return (
      <div className="ui fluid card hotel">

        <div className="content">
          <div className="right floated meta">
            <div className="ui star rating" data-rating={this.props.stars}></div>
          </div>
          {this.props.name}
        </div>

        <div className="blurring dimmable image">
          <div className="ui dimmer">
            <div className="content">
              <div className="center">
                <p>{this.props.description}</p>
                <a href={this.props.url} target="_blank" className="ui inverted button">Reservar</a>
              </div>
            </div>
          </div>
          <img src={this.props.image}/>
        </div>

        <div className="content">
          <div className="ui list">

            <div className="item">
              <i className="dollar icon"/>
              <div className="content">
                {this.props.price}
              </div>
            </div>

            <div className="item">
              <i className="phone icon"/>
              <div className="content">
                {this.props.phone}
              </div>
            </div>

            <div className="item">
              <i className="envelope icon"/>
              <div className="content">
                {this.props.email}
              </div>
            </div>

            <div className="item">
              <i className="building icon"/>
              <div className="content">
                {this.props.location}
              </div>
            </div>

          </div>
        </div>

        <div className="extra content">
          <div className="meta">
            <a
              href={`https://www.google.com.mx/maps/place/${this.props.latitude},${this.props.longitude}`}
              className="ui red inverted icon fluid button"
              target="_blank"
            >
              <i className="google icon"/>
              Mapa
            </a>
          </div>

          {/*
          <div className="left floated meta">
            <a href="#" className="ui blue inverted icon button">Waze</a>
          </div>
          */}

        </div>

      </div>
    );
  }
}

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
