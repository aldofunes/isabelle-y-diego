import React, { Component } from 'react';

export default class GuestWish extends Component {
  render() {
    return (
      <div className="ui fluid card">
        <div className="content">
          {this.props.wish}
        </div>
        <div className="extra content">
          {this.props.name}
        </div>
      </div>
    );
  }
}
