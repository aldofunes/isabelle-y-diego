import React, { PropTypes }  from 'react';

export default class Hotel extends React.Component {
  render() {
    return (
      <div className="ui fluid card">
        <div className="content">
          <div className="right floated meta">{this.props.stars}</div>
          {this.props.name}
        </div>
        <div className="image">
          <img src="http://placehold.it/600x400"/>
        </div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon"/>
            17 likes
          </span>
          <i className="comment icon"/>
          {this.props.description}
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="heart outline icon"/>
            <input type="text" placeholder="Add Comment..."/>
          </div>
        </div>
      </div>
    );
  }
}

Hotel.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  stars: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  amenities: PropTypes.array.isRequired,
}
