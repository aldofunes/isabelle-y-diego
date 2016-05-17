import React, { PropTypes } from 'react';
import $ from 'jquery';

export default class Tours extends React.Component {
  componentDidMount() {
    $('.ui.card .dimmable.image').dimmer({
      on: 'hover',
    });
  }

  render() {
    let featured = '';
    if (this.props.isFeatured) {
      featured = (
        <span className="ui orange right ribbon label">Recomendado</span>
      );
    }

    return (
      <div className="ui fluid card hotel">

        <div className="content">
          {this.props.name}
        </div>

        <div className="blurring dimmable image">
          <div className="ui dimmer">
            <div className="content">
              <div className="center">
                <p>{this.props.price}</p>
                <a
                  href={this.props.url}
                  target="_blank"
                  className="ui inverted button"
                >
                  Más información
                </a>
              </div>
            </div>
          </div>
          <img className="ui fluid image" src={this.props.image}/>
          {featured}
        </div>

        <div className="content">
          <p>{this.props.description}</p>
          <p>{this.props.duration}</p>
        </div>
      </div>
    );
  }
}

Tours.propTypes = {
  name: PropTypes.string.isRequired,
  isFeatured: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
