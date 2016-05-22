import React from 'react';
import $ from 'jquery';

export default class Gallery extends React.Component {
  images() {
    return [
      {
        _id: '1',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/anne-helen.jpg',
        description: 'Anne Hélène de compras en Chiapas',
      },
      {
        _id: '2',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/claire-pascal-richard.jpg',
        description: 'Claire Pascal Richard y su familia',
      },
      {
        _id: '3',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/mercedes-zavala.jpg',
        description: 'Mercedes Zavala y su familia',
      },
      {
        _id: '4',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/padres-diego.jpg',
        description: 'Con los papás de Diego',
      },
      {
        _id: '5',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/juan-ignacio-zavala.jpg',
        description: 'juan Ignacio Zavala y su familia',
      },
      {
        _id: '6',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/rafael-zavala.jpg',
        description: 'Rafael Zavala y su familia',
      },
      {
        _id: '7',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/louis-richard.jpg',
        description: 'Louis Richard',
      },
      {
        _id: '8',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/anne-helen2.jpg',
        description: 'Anne Hélène en Chiapas',
      },
      {
        _id: '9',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/maman-messe-aout.jpg',
        description: 'Monique Richard',
      },
      {
        _id: '10',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/pierrete.jpg',
        description: 'Pierrette Richard con su familia',
      },
      {
        _id: '11',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/star-wars.jpg',
        description: 'Saliendo de ver Star Wars',
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
        <div className="ui basic small modal" id={image._id}>
          <i className="close icon"/>
          <img className="ui rounded centered image" style={{ maxHeight: '75vh' }} src={image.url}/>
          <h4 style={{ textAlign: 'center' }}>{image.description}</h4>
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