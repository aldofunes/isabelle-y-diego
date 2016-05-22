import React from 'react';
import $ from 'jquery';

export default class Gallery extends React.Component {
  imagesAll() {
    return [
      {
        _id: '8',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/anne-helen2.jpg',
        description: 'Anne Hélène en Chiapas',
      },
      {
        _id: '11',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/star-wars.jpg',
        description: 'Saliendo de ver Star Wars',
      },
      {
        _id: '1',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/anne-helen.jpg',
        description: 'Anne Hélène de compras en Chiapas',
      },
    ];
  }

  imagesGroom() {
    return [
      {
        _id: '4',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/padres-diego.jpg',
        description: 'Con los papás de Diego',
      },
      {
        _id: '3',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/mercedes-zavala.jpg',
        description: 'Mercedes Zavala con su familia',
      },
      {
        _id: '5',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/juan-ignacio-zavala.jpg',
        description: 'Juan Ignacio Zavala con su familia',
      },
      {
        _id: '6',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/rafael-zavala.jpg',
        description: 'Rafael Zavala con su familia',
      },
    ];
  }

  imagesBride() {
    return [
      {
        _id: '9',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/maman-messe-aout.jpg',
        description: 'Monique Richard',
      },
      {
        _id: '7',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/louis-richard.jpg',
        description: 'Louis Richard',
      },
      {
        _id: '10',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/pierrete.jpg',
        description: 'Pierrette Richard con su familia',
      },
      {
        _id: '2',
        url: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/claire-pascal-richard.jpg',
        description: 'Claire Pascal con su familia',
      },
    ];
  }

  handleClick(_id, event) {
    event.preventDefault();
    $(`.ui.modal#${_id}`).modal('show');
  }

  renderImagesGroom() {
    return this.imagesGroom().map((image) => (
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

  renderImagesBride() {
    return this.imagesBride().map((image) => (
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

  renderImagesAll() {
    return this.imagesAll().map((image) => (
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
          <h2>Conócelos mejor en fotos</h2>

          <h3 className="ui header">Nosotros seis</h3>
          <div className="ui middle aligned doubling five column centered grid">
            {this.renderImagesAll()}
          </div>

          <h3 className="ui header">Familia de la novia</h3>
          <div className="ui middle aligned doubling five column centered grid">
            {this.renderImagesBride()}
          </div>

          <h3 className="ui header">Familia del novio</h3>
          <div className="ui middle aligned doubling five column centered grid">
            {this.renderImagesGroom()}
          </div>

        </div>
      </section>
    );
  }
}