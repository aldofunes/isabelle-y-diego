import React from 'react';

import Stat from './Stat.jsx';

export default class DressCode extends React.Component {
  render() {
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
