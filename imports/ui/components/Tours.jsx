import React from 'react';

export default class Tours extends React.Component {
  moreTours() {
    return [
      {
        _id: '1',
        name: 'Museo del Vino Georges Duboeuf',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/georges-duboeuf.jpg',
        url: 'http://www.hameauduvin.com/en/',
      },
      {
        _id: '2',
        name: 'Los Hospicios de Beaune, la capital de Burgundía',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/beaune.jpg',
        url: 'http://www.france-voyage.com/francia-guia-turismo/beaune-269.htm',
      },
      {
        _id: '3',
        name: 'Ciudad Medieval de Pérouges',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/perouges.jpg',
        url: 'http://www.es.lyon-france.com/Descubrir/Los-alrededores-de-Lyon/Ciudad-Medieval-de-Perouges',
      },
      {
        _id: '4',
        name: 'Chamonix y el Aiguille du Midi',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/chamonix.jpg',
        url: 'https://www.tripadvisor.com.mx/Attraction_Review-g187261-d195588-Reviews-Aiguille_du_Midi-Chamonix_Haute_Savoie_Rhone_Alpes.html',
      },
      {
        _id: '5',
        name: 'Pueblo del Santo Curé d’Ars',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/sait-cure-dars.jpg',
        url: 'www.arsnet.org/',
      },
      {
        _id: '6',
        name: 'Monasterio royal de Brou',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/royal-de-brou.jpg',
        url: 'http://www.france-voyage.com/francia-ciudades/bourg-en-bresse-482/monasterio-royal-brou-21579.htm',
      },
      {
        _id: '6',
        name: 'Parc Oiseaux',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/tours/oiseaux.jpg',
        url: 'http://www.parcdesoiseaux.com/fr/index.php',
      },
    ];
  }

  render() {
    return (
      <section id="tours">
        <div className="ui container">
          <h2 className="ui header">Tours</h2>

          <div className="ui middle aligned four column very relaxed doubling grid">
            {this.moreTours().map((tour) => (
              <div key={tour._id} className="column">
                <a href={tour.url}><h4>{tour.name}</h4></a>
                <img src={tour.image} alt={tour.name} className="ui rounded image"/>
              </div>
            ))}
          </div>
          <br/>
          <p>
            Para más opciones e informaciones de excursiones en Lyon y en el Beaujolais, pueden
            contactar a Sandrine Baeza, amiga de la familia trabajando en la agencia Thomas Cook en
            la región de Lyon y está a sus órdenes: <a
            href="mailto:sandrine.baeza@thomascook.fr">sandrine.baeza@thomascook.fr</a>
          </p>
        </div>
      </section>
    );
  }
}
