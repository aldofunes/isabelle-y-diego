import React from 'react';
import $ from 'jquery';

export default class Gallery extends React.Component {
  images() {
    return [
      {
        _id: '1',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/claire-pascal-richard1.jpg',
      },
      {
        _id: '2',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/claire-pascal-richard2.jpg',
      },
      {
        _id: '3',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/claire-pascal-richard3.jpg',
      },
      {
        _id: '4',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/anne-helen.jpg',
      },
      {
        _id: '5',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/juan-ignacio-zavala.jpg',
      },
      {
        _id: '6',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/rafael-zavala.jpg',
      },
      {
        _id: '7',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/recuerdo.jpg',
      },
      {
        _id: '8',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/anne-helen2.jpg',
      },
    ];
  }

  handleClick(_id, event) {
    event.preventDefault();
    $(`.ui.modal#${_id}`).modal('show');
  }

  renderImages() {
    return this.images().map((image) => (
      <div key={image._id} className="column">
        <a href="#"
           className="ui fluid rounded image"
           onClick={this.handleClick.bind(this, image._id)}
        >
          <img src={image.url}/>
        </a>
        <div className="ui small modal" id={image._id}>
          <i className="close icon"/>
          <img className="ui fluid rounded image" src={image.url}/>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <section id="gallery">
        <div className="ui container">
          <div className="ui middle aligned doubling five column centered grid">
            {this.renderImages()}
          </div>
        </div>
      </section>
    );
  }
}