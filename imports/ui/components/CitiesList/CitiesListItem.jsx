import React, { PropTypes } from 'react';
const markdown = require('markdown-it')({
  xhtmlOut: true, // Use '/' to close single tags (<br />).
  breaks: true, // Convert '\n' in paragraphs into <br>
});

export default class CitiesListItem extends React.Component {
  rawMarkup() {
    return { __html: markdown.renderInline(this.props.description) };
  }

  render() {
    return (
      <section className="city">
        <div className="ui container">
          <div className="ui stackable relaxed grid">
            <div className="six wide column">
              <img src={this.props.image} alt="Lyon" className="ui fluid rounded image"/>
            </div>
            <div className="ten wide column">
              <h1 className="ui header">{this.props.name}</h1>
              <p dangerouslySetInnerHTML={this.rawMarkup()}/>
              <a
                href={this.props.url}
                target="_blank"
                className="ui inverted red expanded button"
              >
                Más información
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

CitiesListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
};
