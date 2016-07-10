import React, { Component } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';

export default class Banner extends Component {
  render() {
    return (
      <section id="banner">
        <div className="text-box center-block">
          <h1 className="ui header">{TAPi18n.__('home.banner.title')}</h1>
          <p>{TAPi18n.__('home.banner.date')}</p>
          <h2 className="ui header headline">{TAPi18n.__('home.banner.headline')}</h2>
        </div>
      </section>
    );
  }
}
