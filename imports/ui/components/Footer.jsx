import React from 'react';
import i18n from 'meteor/universe:i18n';

export default class Footer extends React.Component {
  componentDidMount() {
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  render() {
    return (
      <section id="footer">
        <div className="ui center aligned container">
          <h3 className="ui header">{i18n.__('footer.title')}</h3>
          <p>
            {i18n.__('footer.body')}
            <a href="https://www.bmgtech.io" target="_blank"> BMG Tech</a>. Contacto:
            <a href="mailto:aldo.funes@bmgtech.io"> Aldo Funes</a> y
            <a href="mailto:pamela.viadana@bmgtech.io"> Pamela Viadana</a>.
          </p>
        </div>
      </section>
    );
  }
}
