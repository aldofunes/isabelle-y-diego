import React from 'react';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div id="main-layout">
        {this.props.children}
      </div>
    );
  }
}
