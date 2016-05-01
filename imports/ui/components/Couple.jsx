import React, { Component } from 'react';

export default class Couple extends Component {
  render() {
    return (
      <section id="couple">
        <h1>Los novios</h1>
        <div className="ui two column middle aligned very relaxed stackable grid">
          <div className="column">
            <div className="ui fluid card">
              <div className="image">
                <img src="http://placehold.it/500"/>
              </div>
              <div className="content">
                <a className="header">Kristy</a>
                <div className="meta">
                  <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                  Kristy is an art director living in New York.
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="user icon"></i>
                  22 Friends
                </a>
              </div>
            </div>
          </div>
          <div className="ui vertical divider">
            And
          </div>
          <div className="column">
            <div className="ui fluid card">
              <div className="image">
                <img src="http://placehold.it/500"/>
              </div>
              <div className="content">
                <a className="header">Kristy</a>
                <div className="meta">
                  <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                  Kristy is an art director living in New York.
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="user icon"></i>
                  22 Friends
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}