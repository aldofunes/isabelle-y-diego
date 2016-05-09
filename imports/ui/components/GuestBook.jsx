import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import $ from 'jquery';

import { GuestWishes } from '../../api/guestWishes/model.js';
import { insertGuestWish, insertMailingRecipient } from '../../api/guestWishes/methods';

import GuestWish from './GuestWish.jsx';

class GuestBook extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim();
    const wish = ReactDOM.findDOMNode(this.refs.wishInput).value.trim();

    insertGuestWish.call({ name, email, wish });
    insertMailingRecipient.call({ name, email });

    // Clear form
    ReactDOM.findDOMNode(this.refs.nameInput).value = '';
    ReactDOM.findDOMNode(this.refs.emailInput).value = '';
    ReactDOM.findDOMNode(this.refs.wishInput).value = '';
  }

  componentDidUpdate() {

  }

  renderGuestWishes() {
    return this.props.guestWishes.map((guestWish) => (
      <div key={guestWish._id} className="column">
        <GuestWish name={guestWish.name} wish={guestWish.wish}/>
      </div>
    ));
  }

  render() {
    return (
      <div id="guest-book">
        <div className="ui five column stackable grid">
          <div className="row">
            {this.renderGuestWishes()}
          </div>
        </div>

        <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <input type="text" ref="nameInput" placeholder="Nombre"/>
              </div>
              <div className="field">
                <input type="email" ref="emailInput" placeholder="Correo electrónico"/>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="fields">
              <div className="sixteen wide field">
                <textarea ref="wishInput" placeholder="Escríbenos algo"/>
              </div>
            </div>
          </div>
          <div className="ui success message">
            <div className="header">Recibido</div>
            <p>Gracias por tus palabras.</p>
          </div>
          <div className="ui button" tabindex="0">Comentar</div>
        </form>
      </div>
    );
  }
}


export default createContainer(() => {
  Meteor.subscribe('guestWishes');

  return {
    guestWishes: GuestWishes.find({}).fetch(),
  };
}, GuestBook);
