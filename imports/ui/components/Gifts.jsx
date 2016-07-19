import React from 'react';
import $ from 'jquery';
import i18n from 'meteor/universe:i18n';

export default class Gifts extends React.Component {
  componentDidMount() {
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  showModal() {
    $('.ui.modal#gift').modal('show');
  }

  render() {
    return (
      <section id="gifts">
        <div className="ui center aligned container">
          <h3 className="ui header text-white">{i18n.__('home.gifts.header')}</h3>

          <button className="ui inverted icon button" onClick={this.showModal}>
            <i className="gift icon"/>
            {i18n.__('home.gifts.buttonText')}
            <i className="gift icon"/>
          </button>
        </div>

        <div
          className="ui small basic modal"
          id="gift"
          style={{
            background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/wine2.jpg") center',
            backgroundSize: 'cover',
          }}
        >
          <i className="close icon"/>
          <div className="header">{i18n.__('home.gifts.modal.header')}</div>
          <div className="image content">
            <div className="ui fluid image">
              <img src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/wine.jpg"/>
            </div>
            <div className="description">
              <p>{i18n.__('home.gifts.modal.body')}</p>
            </div>
          </div>
          <div className="actions">
            <p>{i18n.__('home.gifts.modal.footer')}</p>
          </div>
        </div>
      </section>
    );
  }
}
