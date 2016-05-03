import React, { Component, PropTypes } from 'react';

export default class Stat extends Component {
  render() {
    return (
      <div className="statistic">
        <div className="value">
          {this.props.value}
        </div>
        <div className="label">
          {this.props.label}
        </div>
      </div>
    );
  }
}

Stat.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
