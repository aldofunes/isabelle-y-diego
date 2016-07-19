import React from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
import i18n from 'meteor/universe:i18n';
import LanguageSwitcher from '../components/LanguageSwitcher';
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
    i18n.setLocale(lang);
  }

  render() {
    return (
      <div id="main-layout">
        <LanguageSwitcher />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
