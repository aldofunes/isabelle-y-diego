import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import moment from 'moment/min/moment-with-locales';

import Skycon from './Skycon.jsx';

const ForecastCollection = new Mongo.Collection(null);

class Forecast extends React.Component {
  componentWillMount() {
    Meteor.call('forecast.get', {
      apiKey: '208497dc5051c19ac819ae169647a60c',
      latitude: '45.967499',
      longitude: '4.624591',
    }, (error, res) => {
      ForecastCollection.insert(JSON.parse(res.content));
    });
  }

  renderDailyForecast() {
    const data = this.props.data.daily.data;
    moment.locale('es');

    data.shift();

    return data.map((day) => (
      <div key={day.time} className="column">
        <p>{moment.unix(day.time).format('ddd')}</p>
        <Skycon
          id={day.time.toString()}
          color="white"
          icon={day.icon}
          size={28}
          summary={day.summary}
        />
        <div
          className="temp-bar"
          style={{
            height: `${(day.temperatureMax - day.temperatureMin) * 10}px`,
            top: `${day.temperatureMin * 10}px`,
          }}
        >
          <span className="temp-min">{Math.round(day.temperatureMin)}°</span>
          <span className="temp-max">{Math.round(day.temperatureMax)}°</span>
        </div>
      </div>
    ));
  }

  renderForecast() {
    const data = this.props.data;

    return (
      <div id="content">
        <h5>{data.daily.summary}</h5>
        <div className="ui grid">
          <div className="sixteen wide tablet four wide computer column">
            <h2>Ahora</h2>
            <Skycon
              id={data._id}
              color="white"
              icon={data.currently.icon}
              size={64}
              summary={data.currently.summary}
            />
            <h3 className="summary">
              {Math.round(data.currently.temperature)}ºC - {data.currently.summary}
            </h3>
          </div>

          <div className="sixteen wide tablet twelve wide computer column">
            <div className="ui seven column grid">
              {this.renderDailyForecast()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let content = '';
    if (this.props.data) {
      content = this.renderForecast();
    }

    return (
      <section id="forecast">
        <div className="ui container center aligned">
          {content}
        </div>
      </section>
    );
  }
}

export default createContainer(() => {
  return {
    data: ForecastCollection.findOne(),
  };
}, Forecast);
