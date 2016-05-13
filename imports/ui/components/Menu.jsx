import React, { Component } from 'react';
import { Link } from 'react-scroll';
import $ from 'jquery';

export default class Menu extends Component {
  componentDidMount() {
    $('.ui.dropdown').dropdown();
  }

  items() {
    return [
      { _id: '1', hash: 'banner', icon: 'home', title: 'Inicio' },
      { _id: '2', hash: 'countdown', icon: 'clock', title: 'Conteo' },
      { _id: '3', hash: 'couple', icon: 'users', title: 'Familia' },
      { _id: '4', hash: 'dress-code', icon: 'tags', title: 'Vestimenta' },
      { _id: '5', hash: 'events', icon: 'calendar', title: 'Itinerario' },
      { _id: '6', hash: 'gifts', icon: 'gift', title: 'Regalos' },
      { _id: '7', hash: 'rsvp', icon: 'check', title: 'RSVP' },
      { _id: '8', hash: 'forecast', icon: 'rain', title: 'Clima' },
      { _id: '9', hash: 'hotels', icon: 'building', title: 'Hoteles' },
      { _id: '10', hash: 'gallery', icon: 'camera', title: 'Galería' },
    ];
  }

  renderItems() {
    return this.items().map((item) => (
      <Link to={item.hash} className="item" activeClass="active" spy={true} smooth={true}>
        <i className={`${item.icon} icon`}/> {item.title}
      </Link>
    ));
  }

  render() {
    return (
      <nav id="main-menu" className="ui dropdown icon top left pointing button brown">
        <i className="bars icon"/> Menu
        <div className="menu">
          {this.renderItems()}
        </div>
      </nav>
    );
  }
}
