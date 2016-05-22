import React from 'react';

export default class  WitnessItem extends React.Component {
  render() {
    return (
      <div className="ui stackable row">
        <div className="ui four wide column">
          <img className="ui circular fluid image" src={this.props.image} alt={this.props.name} />
        </div>
        <div className="ui twelve wide column">
          <h4>{this.props.name}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
