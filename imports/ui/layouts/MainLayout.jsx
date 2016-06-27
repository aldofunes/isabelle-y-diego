import React from 'react';
import i18n from 'meteor/universe:i18n';
import Footer from '../components/Footer.jsx';

export default class MainLayout extends React.Component {
  componentWillMount() {
    let lang = '';

    if (navigator.languages !== undefined && ['es', 'fr'].indexOf(navigator.languages[0]) > -1) {
      lang = navigator.languages[0];
    } else {
      lang = 'es';
    }

    i18n.setLocale(lang);

    // console.log(i18n.__('home.couple.bride.description'));
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
