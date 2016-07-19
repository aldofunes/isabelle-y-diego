import React from 'react';
import $ from 'jquery';
import i18n from 'meteor/universe:i18n';

export default class Gallery extends React.Component {
  componentDidMount() {
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  imagesAll() {
    return [
      {
        _id: '1',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo1.jpg',
        description: '',
      },
      {
        _id: '2',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo2.jpg',
        description: '',
      },
      {
        _id: '3',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo3.jpg',
        description: '',
      },
      {
        _id: '4',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo4.jpg',
        description: '',
      },
      {
        _id: '5',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo5.jpg',
        description: '',
      },
      {
        _id: '6',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo6.jpg',
        description: '',
      },
      {
        _id: '7',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo7.jpg',
        description: '',
      },
      {
        _id: '8',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo8.jpg',
        description: '',
      },
      {
        _id: '9',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo9.jpg',
        description: '',
      },
      {
        _id: '10',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo10.jpg',
        description: '',
      },
      {
        _id: '11',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo11.jpg',
        description: '',
      },
      {
        _id: '12',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo12.jpg',
        description: '',
      },
      {
        _id: '13',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo13.jpg',
        description: '',
      },
      {
        _id: '14',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo14.jpg',
        description: '',
      },
      {
        _id: '15',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo15.jpg',
        description: '',
      },
      {
        _id: '16',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo16.jpg',
        description: '',
      },
      {
        _id: '17',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo17.jpg',
        description: '',
      },
      {
        _id: '18',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo18.jpg',
        description: '',
      },
      {
        _id: '19',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo19.jpg',
        description: '',
      },
      {
        _id: '20',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo20.jpg',
        description: '',
      },
      {
        _id: '21',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo21.jpg',
        description: '',
      },
      {
        _id: '22',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo22.jpg',
        description: '',
      },
      {
        _id: '23',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo23.jpg',
        description: '',
      },
      {
        _id: '24',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo24.jpg',
        description: '',
      },
      {
        _id: '25',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo25.jpg',
        description: '',
      },
      {
        _id: '26',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo26.jpg',
        description: '',
      },
      {
        _id: '27',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo27.jpg',
        description: '',
      },
      {
        _id: '28',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo28.jpg',
        description: '',
      },
      {
        _id: '29',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo29.jpg',
        description: '',
      },
      {
        _id: '30',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo30.jpg',
        description: '',
      },
      {
        _id: '31',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo31.jpg',
        description: '',
      },
      {
        _id: '32',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo32.jpg',
        description: '',
      },
      {
        _id: '33',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo33.jpg',
        description: '',
      },
      {
        _id: '34',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo34.jpg',
        description: '',
      },
      {
        _id: '35',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo35.jpg',
        description: '',
      },
      {
        _id: '36',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo36.jpg',
        description: '',
      },
      {
        _id: '37',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo37.jpg',
        description: '',
      },
      {
        _id: '38',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/all/photo38.jpg',
        description: '',
      },
    ];
  }

  imagesGroom() {
    return [
      {
        _id: '40',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/groom/photo1.jpg',
        description: i18n.__('home.gallery.40'),
      },
      {
        _id: '41',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/groom/photo2.jpg',
        description: i18n.__('home.gallery.41'),
      },
      {
        _id: '42',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/groom/photo3.jpg',
        description: i18n.__('home.gallery.42'),
      },
      {
        _id: '43',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/groom/photo4.jpg',
        description: i18n.__('home.gallery.43'),
      },
      {
        _id: '44',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/groom/photo5.jpg',
        description: i18n.__('home.gallery.44'),
      },
    ];
  }

  imagesBride() {
    return [
      {
        _id: '45',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/bride/photo1.jpg',
        description: i18n.__('home.gallery.45'),
      },
      {
        _id: '46',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/bride/photo2.jpg',
        description: i18n.__('home.gallery.46'),
      },
      {
        _id: '47',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/bride/photo3.jpg',
        description: i18n.__('home.gallery.47'),
      },
      {
        _id: '48',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/bride/photo4.jpg',
        description: i18n.__('home.gallery.48'),
      },
      {
        _id: '49',
        url: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/gallery/bride/photo5.jpg',
        description: i18n.__('home.gallery.49'),
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
          <img src={image.url} />
        </a>
        <div className="ui basic small modal" id={image._id}>
          <i className="circular inverted close icon" />
          <img className="ui rounded centered image" style={{ maxHeight: '75vh' }}
               src={image.url} />
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
          <img src={image.url} />
        </a>
        <div className="ui basic small modal" id={image._id}>
          <i className="circular inverted close icon" />
          <img className="ui rounded centered image" style={{ maxHeight: '75vh' }}
               src={image.url} />
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
          <img src={image.url} />
        </a>
        <div className="ui basic small modal" id={image._id}>
          <i className="circular inverted close icon" />
          <img className="ui rounded centered image" style={{ maxHeight: '75vh' }}
               src={image.url} />
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

          <h3 className="ui header">Familia de la novia</h3>
          <div className="ui middle aligned doubling five column centered grid">
            {this.renderImagesBride()}
          </div>

          <h3 className="ui header">Familia del novio</h3>
          <div className="ui middle aligned doubling five column centered grid">
            {this.renderImagesGroom()}
          </div>

          <h3 className="ui header">Nosotros seis</h3>
          <div className="ui middle aligned doubling five column centered grid">
            {this.renderImagesAll()}
          </div>

        </div>
      </section>
    );
  }
}