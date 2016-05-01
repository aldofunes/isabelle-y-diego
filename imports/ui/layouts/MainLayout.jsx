import React from 'react';

import Header from '../components/Header.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div id="main-layout">

        <Header />
        
        {this.props.children}
      </div>
    );
  }
}
