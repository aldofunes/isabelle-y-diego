import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class Menu extends Component {
  componentDidMount() {
    $('.ui.dropdown').dropdown();
  }

  render() {
    return (
      <nav id="main-menu" className="ui dropdown icon top left pointing button pink">
        <i className="bars icon"/> Menu
        <div className="menu">
          <Link to="/" className="item" activeClassName="active">
            <i className="home icon"/> Inicio
          </Link>
          <Link to="/hotels" className="item" activeClassName="active">
            <i className="building icon"/> Hoteles
          </Link>
          <Link to="/rsvp" className="item" activeClassName="active">
            <i className="checkmark box icon"/> RSVP
          </Link>
        </div>
      </nav>
    );
  }
}
