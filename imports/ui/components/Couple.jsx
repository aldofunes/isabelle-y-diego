import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import Fiancee from './Fiancee.jsx';
import Children from './Children.jsx';

export default class Couple extends Component {
  fiancees() {
    return [
      {
        _id: '1',
        name: 'Isabelle Richards',
        picture: 'http://placehold.it/600',
        description: 'Ella es “Sport Billy” como le dicen: aún más correr, nadar, rodar, esquiar, pero en realidad casi cualquier actividad deportiva es lo suyo. Estar pendiente de sus hijas, de las casas (pelear con los arquitectos y carpinteros), de la vida familiar en general, convocar reuniones y organizar los fines de semana con amigos, mandar whatsapp a horas tardías de la noche para cerciorarse que sus seres queridos estén bien, e ingeniarse para tener una actividad profesional que le permita realizar todas las acciones anteriores: ¡es ella! \n\n Sus actividades predilectas: ver a sus hijas contentas, hacer maletas (significa que un viaje se aproxima), buscar opciones de medicina alternativa, ver como reciclar más o mejor, comprar en descuento (porque así uno puede comprar más), comprar regalos (aun no en descuentos), pasar el verano con su familia en Francia, y tomarse una copa con sus amigos \n\n Lo que no puede faltar en su casa: ¡muchos niños!, un campo electromagnético, ensaladas, quesos, vino, … y un teléfono para encargar el resto de los alimentos \n\n Es una mujer muy afortunada: con Diego Junior tiene el hijo que nunca podrá tener (ella lo dice: “niños, no sé hacerlos”), tiene tres mujercitas fantásticas que la ocupan tanto que ni tiempo para malos pensamientos, y una red de peluqueros cuando necesita salir decentemente peinada',
      },
      {
        _id: '2',
        name: 'Diego Zavala',
        picture: 'http://placehold.it/600',
        description: 'Las largas jornadas de trabajo, los viajes de negocio, los partidos de futbol americano (y de futbol soccer, y de baseball, y de basketball, etc.), el P.A.N., los ronquidos, la capacidad de dormirse en cualquier lugar en cualquier momento, los gadgets tecnológicos, los relojes marca “Polar”, y las camisas blancas con corbata y mancuernillas: ¡es él! \n\n Sus actividades predilectas: el golf, la bici en Malinalco, trabajar (“contestar el teléfono” dirían sus hijas), los desayunos-comidas-cenas entre semana tanto profesionales como amistosos , planear los viajes (no hay como él para reservar hoteles, coche, espectáculos, excursiones), leer estadísticas de futbol americano, sacar fotos (¡pero muchas!) y grabar videos de los acontecimientos familiares \n\n Lo que no puede faltar en su casa: una mega pantalla para ver partidos de futbol, chocolates (pasitas cubiertas de chocolate entre otros), … y un teléfono para pedir auxilio en caso de tener que realizar cualquier actividad manual en la casa \n\n Es un hombre muy afortunado: siempre ha soñado con despertar con varias mujeres francesas en su cama…. ¡Sueño cumplido! Y es el único profesionista que a donde viaje se encuentra un evento deportivo a donde ir, y es más: ¡a donde lo invitan!',
      },
    ];
  }

  render() {
    console.log(...this.fiancees()[0]);
    return (
      <section id="couple">
        <div className="ui container center aligned">
          <div className="ui two column stackable very relaxed grid">
            <div className="column">
              <Fiancee {...this.fiancees()[0]}/>
            </div>
            <div className="ui vertical divider">
              <img className="ui fluid image"
                   src="https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/icons/couple.svg" alt=""/>
            </div>
            <div className="column">
              <Fiancee {...this.fiancees()[1]}/>
            </div>
          </div>
        </div>

        <Parallax
          bgImage="http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/bgs/isabelle-diego.jpg"
          blur={5}
          strength={200}
          className="ui center aligned"
        >
          <h1>El amor es grandioso</h1>
        </Parallax>

        <div className="ui container center aligned">
          <h2>Nuestros hijos</h2>
          <Children />
          <h3>
            Juntos nos encanta viajar, descubrir nuevos lugares y vivir nuevas experiencias, ver en
            la televisión o asistir a los partidos de futbol (pero solo de los Dallas Cowboys o del
            Real Madrid), y festejar juntos los acontecimientos familiares: cumpleaños, Navidad,
            etc.
          </h3>
        </div>
      </section>
    );
  }
}
