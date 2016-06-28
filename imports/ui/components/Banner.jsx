import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class Banner extends Component {
  render() {
    return (
      <section id="banner">
        <div className="text-box center-block">
          <h1 className="ui header"><T>home.banner.title</T></h1>
          <p><T>home.banner.date</T></p>
          <h2 className="ui header headline"><T>home.banner.headline</T></h2>
        </div>
      </section>
    );
  }
}
