import React, { PropTypes } from 'react';

export default class HotelsListItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="right floated content">
          {this.props.stars.toString()} estrellas
        </div>
        <img className="ui small image" src={this.props.image} />
          <div className="content">
            <a className="header">{this.props.name}</a>
            <div className="description">{this.props.description}</div>
          </div>
      </div>
    );
  }
}

HotelsListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  stars: PropTypes.number,
  price: PropTypes.number,
};
