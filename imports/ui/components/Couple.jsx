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
                <img src="http://placehold.it/600x400"/>
              </div>
              <div className="content">
                <a className="header">Isabelle Richards</a>
                <div className="meta">
                  <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                  Isabelle se dedica a Ignigena potuss, tanquam primus agripeta.
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="user icon"/>
                  22 Friends
                </a>
              </div>
            </div>
          </div>
          <div className="ui vertical divider">
            &nbsp;
            <i className="heart icon"/>
            &nbsp;
          </div>
          <div className="column">
            <div className="ui fluid card">
              <div className="image">
                <img src="http://placehold.it/600x400?text=Foto"/>
              </div>
              <div className="content">
                <a className="header">Diego Zavala</a>
                <div className="meta">
                  <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                  Sagas volare in oenipons! Gloss studere in magnum infernum!
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="user icon"/>
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
