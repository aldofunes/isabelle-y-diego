import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (
      <section id="banner">
        <div className="text-box center-block">
          <h2 className="ui header">Isabelle y Diego</h2>
          <p>13 de agosto, 2016</p>
          <h4 className="ui header">
            Hoy vamos juntos hasta la cima, esto es un sueño hecho realidad
          </h4>
        </div>
      </section>
    );
  }
}
