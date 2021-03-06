import React, { Component } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
import i18n from 'meteor/universe:i18n';

export default class Banner extends Component {
  componentDidMount() {
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  render() {
    return (
      <section id="banner">
        <div className="text-box center-block">
          <h1 className="ui header">{i18n.__('home.banner.title')}</h1>
          <p>{i18n.__('home.banner.date')}</p>
          <h2 className="ui header headline">{i18n.__('home.banner.headline')}</h2>
        </div>
      </section>
    );
  }
}
