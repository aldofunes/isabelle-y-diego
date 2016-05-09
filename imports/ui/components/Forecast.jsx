import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import Skycon from './Skycon.jsx';

const ForecastCollection = new Mongo.Collection(null);

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  componentWillMount() {
    Meteor.call('forecast.get', {
      apiKey: '208497dc5051c19ac819ae169647a60c',
      latitude: '45.967499',
      longitude: '4.624591',
    }, (error, res) => {
      ForecastCollection.insert(JSON.parse(res.content));
    });
  }

  renderForecast() {
    const data = this.props.data;

    return (
      <div id="forecast">
        <Skycon
          id={data._id}
          color="white"
          icon={data.currently.icon}
          size={64}
          summary={data.currently.summary}
        />
      </div>
    );
  }

  render() {
    let forecastData = '';
    if (this.props.data) {
      forecastData = this.renderForecast();
    }

    return (
      <div id="forecast">
        {forecastData}
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    data: ForecastCollection.findOne(),
  };
}, Forecast);
