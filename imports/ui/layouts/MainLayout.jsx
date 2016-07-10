import React from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
import Footer from '../components/Footer.jsx';

export default class MainLayout extends React.Component {
  componentWillMount() {
    let lang = '';

    if (navigator.languages !== undefined && ['es', 'fr'].indexOf(navigator.languages[0]) > -1) {
      lang = navigator.languages[0];
    } else {
      lang = 'es';
    }
    TAPi18n.setLanguage(lang);

    console.log(TAPi18n.__('home.couple.bride.description'));
  }

  render() {
    return (
      <div id="main-layout">
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
