import React, { Component, PropTypes } from 'react';
import moment from 'moment-timezone';
import i18n from 'meteor/universe:i18n';
import Stat from './Stat.jsx';

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: '',
      dateReached: moment.tz(this.props.timeZone) >= moment.tz(this.props.givenDate, this.props.timeZone),
    };
  }

  update() {
    this.setState({
      dateReached: moment.tz(this.props.timeZone) >= moment.tz(this.props.givenDate, this.props.timeZone),
    });
  }

  componentDidMount() {
    i18n.onChangeLocale((newLocale) => {
      this.setState({ locale: newLocale });
    });

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
            <Stat label={i18n.__('home.countdown.days')} value={stats.days.toString()}/>
            <Stat label={i18n.__('home.countdown.hours')} value={stats.hours.toString()}/>
            <Stat label={i18n.__('home.countdown.minutes')} value={stats.mins.toString()}/>
            <Stat label={i18n.__('home.countdown.seconds')} value={stats.secs.toString()}/>
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
