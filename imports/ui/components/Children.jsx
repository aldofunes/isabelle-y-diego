import React from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
import i18n from 'meteor/universe:i18n';
const markdown = require('markdown-it')({
  xhtmlOut: true, // Use '/' to close single tags (<br />).
  breaks: true, // Convert '\n' in paragraphs into <br>
});

export default class Children extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: '',
    };
  }

  componentDidMount() {
    i18n.onChangeLocale((newLocale) => {
      this.setState({ locale: newLocale });
    });
  }

  rawMarkup(bio) {
    return { __html: markdown.render(bio) };
  }

  render() {
    return (
      <section id="children">
        <div className="ui container center aligned">
          <h2>{i18n.__('home.children.header')}</h2>
          <div className="ui middle aligned four column doubling grid">
            <div className="column">
              <img
                className="ui centered small circular image"
                src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/diego-junior.jpg"
              />
              <h3 className="header">Diego</h3>
              <div
                className="description"
                dangerouslySetInnerHTML={this.rawMarkup(i18n.__('home.children.diego'))}
              />
            </div>

            <div className="column">
              <img
                className="ui centered small circular image"
                src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/isabelle-hija.jpg"
              />
              <h3 className="header">Isabelle</h3>
              <div
                className="description"
                dangerouslySetInnerHTML={this.rawMarkup(i18n.__('home.children.isabelle'))}
              />
            </div>

            <div className="column">
              <img
                className="ui centered small circular image"
                src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/anne-helene.jpg"
              />
              <h3 className="header">Anne Hélène</h3>
              <div
                className="description"
                dangerouslySetInnerHTML={this.rawMarkup(i18n.__('home.children.anneHelene'))}
              />
            </div>

            <div className="column">
              <img
                className="ui centered small circular image"
                src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/catalina.jpg"
              />
              <h3 className="header">Catalina</h3>
              <div
                className="description"
                dangerouslySetInnerHTML={this.rawMarkup(i18n.__('home.children.catalina'))}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
