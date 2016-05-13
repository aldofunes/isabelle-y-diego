import React from 'react';
import { Link } from 'react-router';

export default class Recommendations extends React.Component {
  render() {
    return (
      <Link id="main-menu" to="/" className="item" className="ui dropdown icon top left pointing button brown">
        <i className="home icon"/> Inicio
      </Link>
    );
  }
}
