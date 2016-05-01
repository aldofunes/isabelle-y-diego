import React, { Component } from 'react';

import Banner from '../components/Banner.jsx';
import Couple from '../components/Couple.jsx';

export default class Home extends Component {
  render() {
    return (
      <div id="home">

        <Banner />

        <div className="ui container">
          <Couple />
        </div>

      </div>
    );
  }
}
