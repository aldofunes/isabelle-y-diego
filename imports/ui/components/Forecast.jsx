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

  toggleForecast() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  renderForecast() {
    const data = this.props.data;

    return (
      <section id="location">
        <div className="ui container center aligned">
          <div id="forecast">
            <Skycon
              id={data._id}
              color="white"
              icon={data.currently.icon}
              size={64}
              summary={data.currently.summary}
            />
            <h3 className="header">
              {Math.round(data.currently.temperature)}ºC - {data.currently.summary}
            </h3>

            <button className="ui inverted white button" onClick={this.toggleForecast.bind(this)}>
              Ver más
            </button>
          </div>
        </div>
      </section>
    );
  }

  render() {
    let forecastData = '';
    if (this.props.data) {
      forecastData = this.renderForecast();
    }

    let expansion = '';
    if (this.state.expanded) {
      expansion = (
        <p>Expanded content</p>
      );
    }

    return (
      <div id="forecast">
        {forecastData}
        {expansion}
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    data: ForecastCollection.findOne(),
  };
}, Forecast);
