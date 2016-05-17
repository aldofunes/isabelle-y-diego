import React, { PropTypes } from 'react';
const markdown = require('markdown-it')({
  xhtmlOut: true, // Use '/' to close single tags (<br />).
  breaks: true, // Convert '\n' in paragraphs into <br>
});

export default class Fiancee extends React.Component {
  rawMarkup() {
    return { __html: markdown.renderInline(this.props.description) };
  }

  render() {
    return (
      <div className="ui center aligned">
        <img className="ui centered medium circular image" src={this.props.picture}/>

        <h2 className="header">{this.props.name}</h2>
        <div className="description">
          <p dangerouslySetInnerHTML={this.rawMarkup()}/>
        </div>
      </div>
    );
  }
}

Fiancee.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
