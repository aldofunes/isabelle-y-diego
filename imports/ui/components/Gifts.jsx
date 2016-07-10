import React from 'react';
import $ from 'jquery';

export default class Gifts extends React.Component {
  showModal() {
    $('.ui.modal#gift').modal('show');
  }

  render() {
    return (
      <section id="gifts">
        <div className="ui center aligned container">
          <h3 className="ui header text-white">
            Afortunadamente la vida nos ha bendecido y no necesitamos nada; su presencia el día
            de la boda es el mejor regalo que podamos recibir, y valoramos mucho el esfuerzo en
            tiempo y recursos que nos brindan al acompañarnos en ese Día tan especial, se lo
            decimos de todo corazón.
          </h3>

          <button className="ui inverted icon button" onClick={this.showModal}>
            <i className="gift icon"/>
            En verdad quiero regalarles algo
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
          <div className="header">
            ¿En verdad quieres regalarnos algo?
          </div>
          <div className="image content">
            <div className="ui fluid image">
              <img src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/wine.jpg"/>
            </div>
            <div className="description">
              <p>
                Lo repetimos, el que sean participe del evento es un presente invaluable para
                nosotros; sin embargo, a las personas que insistirían en llevar algo, podríamos
                sugerir, considerando nuestros gustos y la ubicación tan peculiar de Jarnioux,
                traer algo relacionado con el vino, por ejemplo una botella de su selección, que
                nos dará gusto saborear en recuerdo de la boda.
              </p>
            </div>
          </div>
          <div className="actions">
            <p>
              Para efectos prácticos pueden llevarla a Jarnioux… o en México, en Lorenzo
              de la Hidalga 420, Torre Alta 1, piso 12, Col. San Mateo Tlaltenango, CP 05600,
              Cuajimalpa, DF
            </p>
          </div>
        </div>
      </section>
    );
  }
}
