import React from 'react';

import Footer from '../components/Footer.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div id="main-layout">
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
