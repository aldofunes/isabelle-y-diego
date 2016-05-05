import React, { Component } from 'react';

export default class Hotel extends Component {
  render() {
    return (
      <div className="ui fluid card">
        <div className="content">
          <div className="right floated meta">14h</div>
          <img className="ui avatar image" src="../images/avatar/large/elliot.jpg"/> Elliot
        </div>
        <div className="image">
          <img src=""/>
        </div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon"/>
            17 likes
          </span>
          <i className="comment icon"/>
          3 comments
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