import React, { PropTypes } from 'react';
const markdown = require('markdown-it')({
  xhtmlOut: true, // Use '/' to close single tags (<br />).
  breaks: true, // Convert '\n' in paragraphs into <br>
});

export default class Fiancee extends React.Component {
  render() {
    return (
      <div className="ui center aligned">
        <img className="ui centered medium circular image" src={this.props.picture}/>

        <h2 className="header">{this.props.name}</h2>
        <div className="description">
          <p dangerouslySetInnerHTML={{ __html: markdown.renderInline(this.props.description) }}/>
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
