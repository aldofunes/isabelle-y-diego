import React from 'react';
import i18n from 'meteor/universe:i18n';

import Stat from './Stat.jsx';

export default class DressCode extends React.Component {
  componentDidMount() {
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  render() {
    if (i18n.getLocale() === 'fr') {
      return null;
    }

    return (
      <section id="dress-code">
        <div className="ui container">
          <div className="ui two statistics">
            <Stat label="Hombres" value="Formal"/>
            <Stat label="Mujeres" value="Cocktail"/>
          </div>
        </div>
      </section>
    );
  }
}
