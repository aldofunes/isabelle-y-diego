import React, { PropTypes } from 'react';

export default class HotelsListItem extends React.Component {
  render() {
    return (
      <div className="stackable row">
        <div className="four wide column">
          <a href={this.props.url} target="_blank">
            <img className="ui fluid rounded image" src={this.props.image}/>
          </a>
        </div>
        <div className="twelve wide column">

          <a href={this.props.url} target="_blank">
            <h3 className="header">{this.props.name}</h3>
          </a>

          <div className="ui list">
            <div className="item">
              <i className="map icon"/>
              <div className="content">{this.props.location}</div>
            </div>
            <div className="item">
              <i className="info icon"/>
              <div className="content">{this.props.description}</div>
            </div>
            <div className="item">
              <i className="envelope icon"/>
              <div className="content">
                <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
              </div>
            </div>
            <div className="item">
              <i className="phone icon"/>
              <div className="content">
                <a href={`tel:${this.props.phone}`}>{this.props.phone}</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

HotelsListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  stars: PropTypes.number,
  price: PropTypes.number,
};
