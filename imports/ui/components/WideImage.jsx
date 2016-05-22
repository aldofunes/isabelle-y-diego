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
        <h1 className="text">{this.props.text}</h1>
      </div>
    );
  }
}

WideImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
};
