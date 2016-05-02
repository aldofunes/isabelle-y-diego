import React, { Component } from 'react';

import Banner from '../components/Banner.jsx';
import Countdown from '../components/Countdown.jsx';
import Couple from '../components/Couple.jsx';

export default class Home extends Component {
  render() {
    return (
      <div id="home">

        <Banner />

        <div className="ui container">
          <Couple />
        </div>

        <div className="ui container">
          <Countdown givenDate="2016/08/13" />
        </div>

      </div>
    );
  }
}
