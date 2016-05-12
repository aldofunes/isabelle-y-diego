import React, { Component } from 'react';
import { Link } from 'react-scroll';
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
          <Link
            to="banner"
            className="item"
            activeClass="active"
            spy={true}
            smooth={true}
          >
            <i className="home icon"/> Inicio
          </Link>

          <Link
            to="countdown"
            className="item"
            activeClass="active"
            spy={true}
            smooth={true}
          >
            <i className="clock icon"/> Conteo
          </Link>

          <Link
            to="couple"
            className="item"
            activeClass="active"
            spy={true}
            smooth={true}
          >
            <i className="users icon"/> Familia
          </Link>

          <Link
            to="dress-code"
            className="item"
            activeClass="active"
            spy={true}
            smooth={true}
          >
            <i className="tags icon"/> Vestimenta
          </Link>

          <Link
            to="events"
            className="item"
            activeClass="active"
            spy={true}
            smooth={true}
          >
            <i className="calendar icon"/> Itinerario
          </Link>

          <Link
            to="forecast"
            className="item"
            activeClass="active"
            spy={true}
            smooth={true}
          >
            <i className="rain icon"/> Clima
          </Link>

          <Link
            to="hotels"
            className="item"
            activeClass="active"
            spy={true}
            smooth={true}
          >
            <i className="building icon"/> Hoteles
          </Link>

          <Link
            to="gifts"
            className="item"
            activeClass="active"
            spy={true}
            smooth={true}
          >
            <i className="gift icon"/> Regalos
          </Link>
        </div>
      </nav>
    );
  }
}
