import React from 'react';
import i18n from 'meteor/universe:i18n';

import Stat from './Stat.jsx';

export default class DressCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: '',
    };
  }

  componentDidMount() {
    i18n.onChangeLocale((newLocale) => {
      this.setState({ locale: newLocale });
    });
  }

  render() {
    if (this.state.locale === 'fr') {
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
