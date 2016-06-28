import React from 'react';
import i18n from 'meteor/universe:i18n';
const markdown = require('markdown-it')({
  xhtmlOut: true, // Use '/' to close single tags (<br />).
  breaks: true, // Convert '\n' in paragraphs into <br>
});

export default class Children extends React.Component {
  constructor(props) {
    super(props);

    this.children = [
      {
        _id: '1',
        name: 'Diego',
        bio: i18n.__('home.children.diego'),
        picture: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/diego-junior.jpg',
      },
      {
        _id: '2',
        name: 'Isabelle',
        bio: i18n.__('home.children.isabelle'),
        picture: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/isabelle-hija.jpg',
      },
      {
        _id: '3',
        name: 'Anne Hélène',
        bio: i18n.__('home.children.anneHelene'),
        picture: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/anne-helene.jpg',
      },
      {
        _id: '4',
        name: 'Catalina',
        bio: i18n.__('home.children.catalina'),
        picture: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/catalina.jpg',
      },
    ];
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
            {this.children.map((child) => (
              <div key={child._id} className="column">
                <img className="ui centered small circular image" src={child.picture} />
                <h3 className="header">{child.name}</h3>
                <div className="description" dangerouslySetInnerHTML={this.rawMarkup(child.bio)} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
