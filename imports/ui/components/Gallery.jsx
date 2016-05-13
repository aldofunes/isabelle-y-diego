import React from 'react';
import $ from 'jquery';

export default class Gallery extends React.Component {
  images() {
    return [
      {
        _id: '4',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/anne-helen.jpg',
        description: 'Anne Hélène de compras en Chiapas',
      },
      {
        _id: '1',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/claire-pascal-richard1.jpg',
        description: 'Claire Pascal Richard y su familia',
      },
      {
        _id: '2',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/claire-pascal-richard2.jpg',
        description: 'Claire Pascal Richard y su familia',
      },
      {
        _id: '3',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/claire-pascal-richard3.jpg',
        description: 'Claire Pascal Richard y su familia',
      },
      {
        _id: '5',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/juan-ignacio-zavala.jpg',
        description: 'juan Ignacio Zavala y su familia',
      },
      {
        _id: '6',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/rafael-zavala.jpg',
        description: 'Rafael Zavala y su familia',
      },
      {
        _id: '7',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/recuerdo.jpg',
        description: 'Una foto de los recuerdos',
      },
      {
        _id: '8',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/anne-helen2.jpg',
        description: 'Anne Hélène en Chiapas',
      },
      {
        _id: '9',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/maman-messe-aout.jpg',
        description: 'Maman Messe Aout',
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
        <div className="ui basic small centered modal" id={image._id}>
          <i className="close icon"/>
          <img className="ui fluid rounded image" src={image.url}/>
          <h4>{image.description}</h4>
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