import React from 'react';

export default class Recommendation extends React.Component {
  render() {
    return (
      <div className="column">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.details}</p>
        <p>{this.props.price}</p>
        <p>{this.props.duration}</p>
      </div>
    );
  }
}
