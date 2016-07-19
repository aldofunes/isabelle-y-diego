import React from 'react';
import { Link } from 'react-router';
import i18n from 'meteor/universe:i18n';
import Tours from '../components/Tours.jsx';
import CitiesList from '../components/CitiesList/CitiesList.jsx';

export default class Recommendations extends React.Component {
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
      <div id="recommendations">
        <Link
          id="main-menu"
          to="/"
          className="ui dropdown icon pointing secondary button"
        >
          <i className="home icon"/> {i18n.__('recommendations.homeLink')}
        </Link>

        <section id="banner">
          <div className="ui center aligned grid">
            <div className="four column">
              <h1>{i18n.__('recommendations.header')}</h1>
            </div>
          </div>
        </section>

        <CitiesList />

        <Tours />

      </div>
    );
  }
}
