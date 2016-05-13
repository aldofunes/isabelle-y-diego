import React from 'react';

import Recommendation from './Recommendation.jsx';

export default class Recommendations extends React.Component {
  recommendations() {
    return [
      {
        _id: '1',
        title: 'Lyon - City Pass for 1,2 or 3 days',
        description: 'Accès gratuit au réseau de transports en commun de Lyon (métro, bus, tramway et funiculaire), accès gratuit à 32 attractions: 22 musées, croisière, visites guidées, démonstration dans un atelier de soie, spectacles de marionnettes, et diverses attractions et des visites touristiques à Lyon.',
        details: 'Le City Pass, passeport culturel et touristique, est valable 1,2 ou 3 jours et permet un accès gratuit à 32 attractions de Lyon, ainsi qu\'un ticket gratuit pour l\'ensemble du réseau de transport en commun (métro, bus et tramway et funiculaire). Profitez d\'un accès gratuit à 22 musées, notamment le Musée des Beaux-Arts, le musée du textile, le Musée gallo-romain, des visites guidées à pied, croisières, démonstration de soie, audio guides dans 5 langues ou la visite guidée inhabituelle des toits de la Basilique de Fourvière. Une fois à Lyon, faites un peu de shopping et profitez d\'une réduction de 10% à la boutique de l\'Office du Tourisme. Vous pourrez également profiter d\'une réduction sur n\'importe quel spectacle à l\'Opéra national ainsi que des prix réduits sur plusieurs activités, l\'Aquarium et des circuits à vélo.',
        price: 24,
        duration: '4:30 horas',
      },
      {
        _id: '2',
        title: 'Beaujolais, Le Grand Tour by Coach',
        description: 'Spend your day in the famous Beaujolais region, wine tasting included. Visits as per program and wine tasting. Transportation in air conditioned minibus. Services of an experienced guide.',
        details: 'On this tour, you will discover all the wonders of the Beaujolais vineyards: In the south, the Golden Stones charming little villages, chapels and wash houses are divine in the reflections of the sun. Their yellow ochre colour is absolutely unique and earned the name of Beaujolais Tuscany given to the region. Stop in the medieval village of Oingt, classified as one of the most beautiful villages in France. Then you will follow the Wine Route and its beautiful hilly landscapes. Stop in a traditional cellar at the bottom of Mont Brouilly for a wine tasting.',
        price: 77,
        duration: '4:30 horas',
      },
      {
        _id: '3',
        title: 'Lyon Gourmet Self-Guided Walking Tour',
        description: 'Through this original walking lunch tour, from the peninsula to the Old Lyon, you will learn about the local specialities of Lyon. Discover renowned shops, gourmet addresses as well as the not-to-be-missed "Bouchons Lyonnais"!',
        details: 'Enjoy this journey through the heart of Lyon and meet with the locals who are helping Lyon to keep its worldwide gastronomy reputation! As an appetizer, you will taste the famous Quenelles with a few slices of saucisson and a glass of white wine. Then your culinary tour will bring you to the heart of the Old city in order to experience the warm atmosphere of a traditional "Bouchon" restaurant. You will be able to choose between a hot sausage and a creamy poultry. Few steps away, Catherine welcomes you in her traditional creamery shop with a tasting of the famous Saint Marcelin cheese and the "Cervelle de Canuts" (Cottage cheese with garlic and herbs). Your last stop will be by one of the best pastry cook in Lyon to taste a praline tart with a hot drink.',
        price: 69.50,
        duration: '4:30 horas',
      },
    ];
  }

  renderRecommendations() {
    return this.recommendations().map((recommendation) => (
      <Recommendation {...recommendation} key={recommendation._id}/>
    ));
  }

  render() {
    return (
      <section id="recommendations">
        <div className="ui container">
          <div className="ui doubling three column grid">
            {this.renderRecommendations()}
          </div>
        </div>
      </section>
    );
  }
}
