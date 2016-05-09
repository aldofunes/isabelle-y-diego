import React, { Component } from 'react';

export default class RSVP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: 0,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  addGuest() {
    this.setState({
      guests: this.state.guests + 1,
    });
  }

  removeGuest() {
    this.setState({
      guests: this.state.guests - 1,
    });
  }


  render() {
    const guests = [];
    for (let i = 0; i < this.state.guests; i++) {
      guests.push(<p>This is guest {i}</p>);
    }

    console.log(guests);

    return (
      <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="four fields">
          <div className="field">
            <label>Nombre</label>
            <input type="text" placeholder="Nombre"/>
          </div>
          <div className="field">
            <label>Apellido</label>
            <input type="text" placeholder="Apellido"/>
          </div>
          <div className="field">
            <label>Correo electrónico</label>
            <input type="email" placeholder="Correo electrónico"/>
          </div>
          <div className="inline field">
            <div className="ui toggle checkbox">
              <input type="checkbox" tabindex="0" className="hidden"/>
                <label>Toggle</label>
            </div>
          </div>
        </div>

        {guests}
        <button className="ui inverted green icon button" onClick={this.addGuest.bind(this)}>
          <i className="plus icon"/>
        </button>
      </form>
    );
  }
}
