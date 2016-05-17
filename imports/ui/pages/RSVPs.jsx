import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';


import { Guests } from '../../api/guests/model';
import { insertGuest } from '../../api/guests/methods';

import { Confirmations } from '../../api/confirmations/model';
import { insertConfirmation } from '../../api/confirmations/methods';

class RSVPs extends React.Component {
  handleSubmit(event) {
    // Prevent the default browser submit action
    event.preventDefault();

    let confirmation = Confirmations.findOne({ email: 'default@confirmation.global' });

    const firstName = this.refs.firstName.value;
    const lastName = this.refs.lastName.value;
    const isGoing = this.refs.isGoing.checked;

    if (!confirmation) {
      return insertConfirmation.call({
        email: 'default@confirmation.global',
        guests: [{ firstName, lastName, isGoing }],
      });
    } else {
      const confirmationId = confirmation._id;

      return insertGuest.call({
        confirmationId,
        firstName,
        lastName,
        isGoing,
      });
    }
  }

  renderGuests() {
    return this.props.guests.map((guest) => (
      <tr key={guest._id}>
        <td>{guest.firstName}</td>
        <td>{guest.lastName}</td>
        <td>{guest.isGoing ? 'Asistirá' : 'No asistirá'}</td>
        <td>{guest.email()}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div id="rsvps">
        <Link id="main-menu" to="/" className="item" className="ui dropdown icon top left pointing secondary button">
          <i className="home icon"/> Inicio
        </Link>

        <section id="banner">
          <div className="ui center aligned grid">
            <div className="four column">
              <h1>Invitados confirmados</h1>
            </div>
          </div>
        </section>

        <section id="table">
          <div className="ui container">
            <table className="ui striped table">
              <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Estado</th>
                <th>Correo electrónico</th>
              </tr>
              </thead>
              <tbody>
              {this.renderGuests()}
              </tbody>
            </table>
          </div>
        </section>

        <section id="add-guest">
          <div className="ui container">
            <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
              <div className="ui segment">
                <div className="three fields">

                  <div className="field">
                    <input ref="firstName" type="text" placeholder="Nombre"/>
                  </div>

                  <div className="field">
                    <input ref="lastName" type="text" placeholder="Apellido"/>
                  </div>

                  <div className="field">
                    <div className="ui checkbox">
                      <input ref="isGoing" type="checkbox" defaultChecked="false"/>
                      <label>Asistirá</label>
                    </div>
                  </div>

                  <div className="field">
                    <button className="ui button" type="submit">Confirmar</button>
                  </div>

                </div>
              </div>
            </form>
          </div>
        </section>

      </div>
    );
  }
}

RSVPs.propTypes = {
  guests: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('confirmations');
  Meteor.subscribe('guests');

  return {
    guests: Guests.find().fetch(),
  };
}, RSVPs);
