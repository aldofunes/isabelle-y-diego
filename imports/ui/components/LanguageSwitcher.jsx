import React from 'react';
import i18n from 'meteor/universe:i18n';

class LanguageSwitcher extends React.Component {
  changeLanguage(lang, event) {
    event.preventDefault();
    i18n.setLocale(lang);
  }

  componentDidMount() {
    $('#language-switcher').dropdown();
  }

  render() {
    return (
      <div id="language-switcher" className="ui dropdown icon top right pointing button brown">
        <i className="flag icon"/>
        <div className="menu">
          <a href="#" onClick={this.changeLanguage.bind(this, 'es')} className="item">
            Español
          </a>
          <a href="#" onClick={this.changeLanguage.bind(this, 'fr')} className="item">
            Français
          </a>
        </div>
      </div>
    );
  }

}

export default LanguageSwitcher;