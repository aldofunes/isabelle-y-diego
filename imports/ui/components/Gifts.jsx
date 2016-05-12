import React from 'react';
import $ from 'jquery';

export default class Gifts extends React.Component {
  showModal() {
    $('.ui.modal').modal('show');
  }

  render() {
    return (
      <section id="gifts">
        <div className="ui container">
          <h3 className="ui header text-white">
            Afortunadamente la vida nos ha bendecido y no necesitamos nada; su presencia el día
            de la boda es el mejor regalo que podamos recibir, y valoramos mucho el esfuerzo en
            tiempo y recursos que nos brindan al acompañarnos en ese Día tan especial, se lo
            decimos de todo corazón.
          </h3>

          <button className="ui inverted button" onClick={this.showModal}>
            En verdad quiero regalarles algo
          </button>

          <div className="ui modal">
            <i className="close icon"/>
            <div className="header">
              Insistir
            </div>
            <div className="image content">
              <div className="ui large image">
                <img
                  src="http://www.southernseason.com/wp-content/uploads/2013/07/wine_pouring2.jpg"/>
              </div>
              <div className="description">
                <div className="ui header">¿En verdad quieres regalarnos algo?</div>
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
        </div>
      </section>
    );
  }
}
