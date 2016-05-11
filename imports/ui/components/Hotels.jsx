import React from 'react';

import Hotel from './Hotel.jsx';

export default class Hotels extends React.Component {
  hotels() {
    return [
      { _id: '1', name: 'Hotel', location: 'Location' },
      { _id: '2', name: 'Hotel', location: 'Location' },
      { _id: '3', name: 'Hotel', location: 'Location' },
    ];
  }

  renderHotels() {
    return this.hotels().map((hotel) => (
      <div key={hotel._id} className="column">
        <Hotel />
      </div>
    ));
  }

  render() {
    return (
      <section id="hotels">
        <div className="ui container">
          <div className="ui three column stackable grid">
            {this.renderHotels()}
          </div>
        </div>
      </section>
    );
  }
}