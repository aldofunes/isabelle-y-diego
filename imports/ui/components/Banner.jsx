import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
const t = i18n.createReactiveTranslator('home.banner');

export default class Banner extends Component {
  render() {
    return (
      <section id="banner">
        <div className="text-box center-block">
          <h1 className="ui header">{t('title')}</h1>
          <p>{t('date')}</p>
          <h2 className="ui header headline">{t('headline')}</h2>
        </div>
      </section>
    );
  }
}
