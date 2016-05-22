import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <div className="ui center aligned container">
          <h3 className="ui header">Nuestros más sinceros agradecimientos</h3>
          <p>
            Este sitio web es cortesía de la familia Funes Minutti a través de
            <a href="https://www.bmgtech.io" target="_blank"> BMG Tech</a>. Contacto:
            <a href="mailto:aldo.funes@bmgtech.io"> Aldo Funes</a> y
            <a href="mailto:pamela.viadana@bmgtech.io"> Pamela Viadana</a>.
          </p>
        </div>
      </section>
    );
  }
}
