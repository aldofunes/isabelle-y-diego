import React from 'react';

import Menu from '../components/Menu.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div id="main-layout">

        <Menu />

        {this.props.children}
      </div>
    );
  }
}
