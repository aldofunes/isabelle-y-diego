import React, { PropTypes } from 'react';

import $ from 'jquery';

export default class Hotel extends React.Component {
  componentDidMount() {
    $('.ui.rating').rating({
      maxRating: 5,
    });

    $('.ui.card .dimmable.image').dimmer({
      on: 'hover',
    });
  }

  renderAmenities() {
    return this.props.amenities.map((amenity) => (
      <div key={amenity.icon} className="item">
        {React.createElement('i', { className: `${amenity.icon} icon` })}
        <div className="content">
          {amenity.description}
        </div>
      </div>
    ));
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
          <div className="ui list left floated">
            {this.renderAmenities()}
          </div>
          <div className="ui list right floated">

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
            
          </div>
        </div>

        <div className="extra content">
          <div className="right floated meta">
            <a href="#" className="ui red inverted button">Mapa</a>
          </div>
          <div className="left floated meta">
            <a href="#" className="ui blue inverted button">Waze</a>
          </div>
        </div>

      </div>
    );
  }
}

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amenities: PropTypes.array.isRequired,
};
