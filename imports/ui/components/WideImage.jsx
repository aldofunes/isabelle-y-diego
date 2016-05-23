import React, { PropTypes } from 'react';

export default class WideImage extends React.Component {
  render() {
    return (
      <div className="wide-image">
        <img
          src={this.props.image}
          alt={this.props.alt}
          className="ui fluid image"
        />
        <div className="text">
          <div className="ui container">
            <h2 className="header">{this.props.text}</h2>
          </div>
        </div>
      </div>
    );
  }
}

WideImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
};
