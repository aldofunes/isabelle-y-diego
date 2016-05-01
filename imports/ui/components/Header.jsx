import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class Header extends Component {
  componentDidMount() {
    $('.ui.dropdown').dropdown();
  }

  render() {
    return (
      <nav id="main-menu" className="ui dropdown icon top left pointing button">
        <i className="bars icon"/>
        <div className="menu">
          <Link to="/" className="item" activeClassName="active">
            <i className="home icon"/> Home
          </Link>
          <Link to="/hotels" className="item" activeClassName="active">
            <i className="building icon"/> Hotels
          </Link>
          <Link to="/rsvp" className="item" activeClassName="active">
            <i className="checkmark box icon"/> RSVP
          </Link>
        </div>
      </nav>
    );
  }
}
