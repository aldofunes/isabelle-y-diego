import React from 'react';
import i18n from 'meteor/universe:i18n';
import WitnessItem from './WitnessItem';

export  default class WitnessList extends React.Component {
  componentDidMount() {
    i18n.onChangeLocale(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    i18n.offChangeLocale();
  }

  render() {
    const brideWitnesses = [
      {
        _id: '1',
        name: 'Jaime',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/witnesses/jaime.jpg',
        description: i18n.__('home.witnesses.bride.jaime'),
      },
      {
        _id: '2',
        name: 'Berenice',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/witnesses/berenice.jpg',
        description: i18n.__('home.witnesses.bride.berenice'),
      },
    ];

    const groomWitnesses = [
      {
        _id: '3',
        name: 'Diego',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/witnesses/diego.jpg',
        description: i18n.__('home.witnesses.groom.diego'),
      },
      {
        _id: '4',
        name: 'Mauricio',
        image: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/witnesses/mauricio.jpg',
        description: i18n.__('home.witnesses.groom.mauricio'),
      },
    ];

    return (
      <section id="witnesses">
        <div className="ui container">
          <h1 style={{ textAlign: 'center' }}>{i18n.__('home.witnesses.title')}</h1>
          <div className="ui middle aligned grid">
            <div className="row">
              <h2>{i18n.__('home.witnesses.bride.title')}</h2>
            </div>
            {brideWitnesses.map((witness) => (
              <WitnessItem key={witness._id} {...witness} />
            ))}

            <h2>{i18n.__('home.witnesses.groom.title')}</h2>
            {groomWitnesses.map((witness) => (
              <WitnessItem key={witness._id} {...witness} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
