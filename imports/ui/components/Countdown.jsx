import React, { Component, PropTypes } from 'react';
import moment from 'moment-timezone';

import Stat from './Stat.jsx';

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateReached: moment.tz(this.props.timeZone) >= moment.tz(this.props.givenDate, this.props.timeZone),
    };
  }

  update() {
    this.setState({
      dateReached: moment.tz(this.props.timeZone) >= moment.tz(this.props.givenDate, this.props.timeZone),
    });
  }

  componentDidMount() {
    if (!this.state.dateReached) {
      setInterval(this.update.bind(this), 1000);
    }
  }

  render() {
    const stats = {};
    if (!this.state.dateReached) {
      const diff = moment.tz(this.props.givenDate, this.props.timeZone) - moment.tz(this.props.timeZone);

      stats.days = parseInt(diff / (24 * 3600 * 1000), 10);
      stats.hours = parseInt(diff / (3600 * 1000) - (stats.days * 24), 10);
      stats.mins = parseInt(diff / (60 * 1000) - (stats.days * 24 * 60) - (stats.hours * 60), 10);
      stats.secs = parseInt(
        diff / (1000) - (stats.days * 24 * 3600) - (stats.hours * 3600) - (stats.mins * 60), 10);
    } else {
      stats.days = 0;
      stats.hours = 0;
      stats.mins = 0;
      stats.secs = 0;
    }
    return (
      <section id="countdown">
        <div className="ui container">
          <div className="ui four statistics">
            <Stat label="Días" value={stats.days.toString()}/>
            <Stat label="Horas" value={stats.hours.toString()}/>
            <Stat label="Minutos" value={stats.mins.toString()}/>
            <Stat label="Segundos" value={stats.secs.toString()}/>
          </div>
        </div>
      </section>
    );
  }
}

Countdown.propTypes = {
  givenDate: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired,
};
