import React from 'react';

import WitnessItem from './WitnessItem';

export  default class WitnessList extends React.Component {
  witnesses() {
    return [
      {
        _id: '1',
        name: 'Jaime',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/witnesses/jaime.jpg',
        description: '¡El científico loco! Por sus descubrimientos en electromagnetismo y por todo lo que pasa por su cabeza: de la metafísica a la política, de la psicología a la arquitectura, de la literatura a la vida diaria respecto a sus seres queridos, Jaime posee un un cerebro siempre activo y curioso. Lo admiro por esto,  pero lo valoro por muchos más aspectos: generoso en todo momento, siempre está aquí para escuchar, apoyar y aconsejar. Es un magnífico doctor, dedicado al bienestar de los demás, empezando con su hermosa familia, sus colegas de trabajo y sus amigos. Para mí y mi familia ¡has hecho tanto!... Querido socio y amigo, le agradezco a la vida tener la dicha de conocerte. ',
      },
      {
        _id: '2',
        name: 'Berenice',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/witnesses/berenice.jpg',
        description: 'Debe haber sido algún error de la naturaleza que no haya nacido de mi mamá porque para mí es otra hermana, y sus hij@s, otros hij@s más para mí. Qué no hemos hecho juntas: ser vecinas de condominio, viajar solas, pasar vacaciones en familia, educar a nuestros hij@s, irnos de compras, irnos de parranda, llorar, reír, apoyarnos, compartir alegrías y problemas, idear negocios y sobre todo planear la vida. Amiga del alma, sólo le pido a Dios que nos conceda muchos años más así de amistad. ',
      },
      {
        _id: '3',
        name: 'Diego',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/witnesses/diego.jpg',
        description: 'Salvo por mis papás, eres la persona con la que más tiempo he pasado. Nos han tocado épocas de vacas flacas (poquitas) y vacas gordas (muchas). Cuando estoy preocupado o ilusionado me has escuchado y siempre has estado a mi lado. Me gusta compartir contigo temas empresariales, deportivos, personales, de amistades, entre otros. Me gusta que me platiques de tus pasiones, de tus proyectos, de tus inquietudes, de tu vida. Y creo que compartimos varios gustos en común como la bici, el futbol americano y el soccer, los toros, la lectura, el cine, la música (aunque no escuchemos la misma), y nuestro adorado México. Disfruto mucho tu presencia y tu paciencia al verme evolucionar por los caminos de la vida. Gracias por estar hoy también a mi lado.',
      },
      {
        _id: '4',
        name: 'Mauricio',
        image: 'http://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/witnesses/mauricio.jpg',
        description: 'Nos conocimos en 1980 a través de amigos comunes. Si nunca compartimos bancas de escuela, casí toda mi vida profesional ha sido cercana a ti: desde la vez que me prestaste tu despacho para aterrizar con Hildebrando hace 32 años, hemos estado en innumerables “aventuras” empresariales. Nos ha tocado estar en momentos muy buenos y otros... ¡no tanto!. Somos vecinos en México y Malinalco, camaradas en el esquí, en el golf, colegas, socios y además compadres. Yo alto, tú un “poco” menos; Isabelle, cuando nos ve de lejos, dice que nos parecemos a “Laurel and Hardy”. Aunque no eres nada gordo, a mí me gusta la comparación que hace, ¡nos ve inseparables!. ¿Quién hubiera dicho que la vida nos uniría tanto? Muchas gracias por tu compañía. ',
      },
    ];
  }

  renderWitnessItems() {
    return this.witnesses().map((witness) => (
      <WitnessItem key={witness._id} {...witness} />
    ));
  }

  render() {
    return (
      <section id="witnesses">
        <div className="ui container">
          <h1 style={{ textAlign: 'center' }}>los padrinos</h1>
          <div className="ui grid">
            {this.renderWitnessItems()}
          </div>
        </div>
      </section>
    );
  }
}
