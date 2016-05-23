import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (
      <section id="banner">
        <div className="text-box center-block">
          <h1 className="ui header">Isabelle y Diego</h1>
          <p>13 de agosto, 2016</p>
          <h2 className="ui header headline">
            Hoy vamos juntos hasta la cima, esto es un sueño hecho realidad
          </h2>
        </div>
      </section>
    );
  }
}
