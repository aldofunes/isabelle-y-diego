import React from 'react';
import i18n from 'meteor/universe:i18n';
import { insertConfirmation } from '../../api/confirmations/methods.js';

export default class RSVP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: 1,
      wasSuccessful: false,
      errors: null,
    };
  }

  componentDidMount() {
    $('.message .close').on('click', () => {
      $(this).closest('.message').transition('fade');
    });
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  handleSubmit(event) {
    // Prevent the default browser submit action
    event.preventDefault();

    // Initialize an empty guests array
    const guests = [];

    const email = this.refs.email.value;

    // Push each guest's info to the array
    for (let i = 0; i < this.state.guests; i++) {
      guests.push({
        firstName: this.refs[`firstName${i}`].value,
        lastName: this.refs[`lastName${i}`].value,
        isGoing: this.refs[`isGoing${i}`].checked,
      });
    }

    // Insert the Confirmation and its registered guests
    insertConfirmation.call({ email, guests }, (error) => {
      if (error) {
        this.setState({ errors: error });
      } else {
        this.setState({ wasSuccessful: true });
        // Clear out the form
        this.refs.RSVPForm.reset();
        this.setState({ guests: 1 });
      }
    });
  }

  addGuest() {
    this.setState({
      guests: this.state.guests + 1,
    });
  }

  removeGuest() {
    this.setState({
      guests: (this.state.guests > 1) ? this.state.guests - 1 : 1,
    });
  }

  resetState() {
    this.setState({
      wasSuccessful: false,
      errors: null,
    });
  }

  render() {
    const guests = [];
    for (let i = 0; i < this.state.guests; i++) {
      guests.push(i);
    }

    let successMessage = '';
    if (this.state.wasSuccessful) {
      successMessage = (
        <div className="ui positive message">
          <i className="close icon" onClick={this.resetState.bind(this)}/>
          <i className="check icon"/>
          {i18n.__('home.rsvp.form.successMessage')}
        </div>
      );
    }

    let errorMessage = '';
    if (this.state.errors) {
      errorMessage = (
        <div className="ui error message">
          <i className="close icon" onClick={this.resetState.bind(this)}/>
          <i className="check icon"/>
          {this.state.errors.message}
        </div>
      );
    }

    return (
      <section id="rsvp">
        <div className="ui container">
          <div className="ui segment">

            <form className="ui form" ref="RSVPForm" onSubmit={this.handleSubmit.bind(this)}>

              <h2>{i18n.__('home.rsvp.header')} <small><em>{i18n.__('home.rsvp.subHeader')}</em></small></h2>

              <div className="field">
                <input ref="email" type="email" placeholder={i18n.__('home.rsvp.form.email')}/>
              </div>

              <h3>{i18n.__('home.rsvp.form.confirmations')}</h3>

              {guests.map((guest) => (
                <div key={guest} className="ui segment">
                  <div className="three fields">

                    <div className="field">
                      <input ref={`firstName${guest}`} type="text" placeholder={i18n.__('home.rsvp.form.name')}/>
                    </div>

                    <div className="field">
                      <input ref={`lastName${guest}`} type="text" placeholder={i18n.__('home.rsvp.form.lastName')}/>
                    </div>

                    <div className="field">
                      <div className="ui checkbox">
                        <input ref={`isGoing${guest}`} type="checkbox" defaultChecked="false"/>
                        <label>{i18n.__('home.rsvp.form.isGoing')}</label>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

              <button
                type="button"
                className="ui inverted green icon button"
                onClick={this.addGuest.bind(this)}
              >
                <i className="plus icon"/> {i18n.__('home.rsvp.form.addButton')}
              </button>
              <button
                type="button"
                className="ui inverted red icon button"
                onClick={this.removeGuest.bind(this)}
              >
                <i className="minus icon"/> {i18n.__('home.rsvp.form.removeButton')}
              </button>

              <button type="submit" className="ui inverted blue right floated button">{i18n.__('home.rsvp.form.submitButton')}</button>
            </form>
            {errorMessage}
            {successMessage}
          </div>
        </div>
      </section>
    );
  }
}
