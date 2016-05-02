import React, { Component } from 'react';

import Stat from './Stat.jsx';

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateReached: new Date() > new Date(this.props.givenDate),
    };
  }

  update() {
    this.setState({
      dateReached: new Date() > new Date(this.props.givenDate),
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
      const diff = new Date(this.props.givenDate) - new Date();

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
      <div className="ui four statistics">
        <Stat label="Días" value={stats.days} />
        <Stat label="Horas" value={stats.hours} />
        <Stat label="Minutos" value={stats.mins} />
        <Stat label="Segundos" value={stats.secs} />
      </div>
    );
  }
}
