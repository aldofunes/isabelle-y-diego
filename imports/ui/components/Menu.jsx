import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
import { Link } from 'react-scroll';
import $ from 'jquery';

export default class Menu extends Component {
  componentDidMount() {
    $('.ui.dropdown').dropdown();
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  render() {
    const items = [
      { _id: '1', hash: 'banner', icon: 'home', title: i18n.__('menu.home') },
      { _id: '2', hash: 'countdown', icon: 'clock', title: i18n.__('menu.countDown') },
      { _id: '3', hash: 'couple', icon: 'users', title: i18n.__('menu.couple') },
      { _id: '4', hash: 'dress-code', icon: 'tags', title: i18n.__('menu.dressCode') },
      { _id: '5', hash: 'events', icon: 'calendar', title: i18n.__('menu.events') },
      { _id: '6', hash: 'gifts', icon: 'gift', title: i18n.__('menu.gifts') },
      { _id: '7', hash: 'rsvp', icon: 'check', title: i18n.__('menu.rsvp') },
      { _id: '8', hash: 'forecast', icon: 'rain', title: i18n.__('menu.forecast') },
      { _id: '9', hash: 'hotels', icon: 'building', title: i18n.__('menu.hotels') },
      { _id: '10', hash: 'gallery', icon: 'camera', title: i18n.__('menu.gallery') },
    ];

    return (
      <nav id="main-menu" className="ui dropdown icon top left pointing button brown">
        <i className="bars icon"/> {i18n.__('menu.title')}
        <div className="menu">
          {items.map((item) => (
            <Link key={item._id} to={item.hash} className="item" activeClass="active" spy={true} smooth={true}>
              <i className={`${item.icon} icon`}/> {item.title}
            </Link>
          ))}
        </div>
      </nav>
    );
  }
}
