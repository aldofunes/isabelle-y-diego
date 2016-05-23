import React from 'react';
const markdown = require('markdown-it')({
  xhtmlOut: true, // Use '/' to close single tags (<br />).
  breaks: true, // Convert '\n' in paragraphs into <br>
});

export default class Children extends React.Component {
  children() {
    return [
      {
        _id: '1',
        name: 'Diego',
        bio: 'El balanceo de la familia, … ¡por el lado masculino! \n\n El que brincó de alegría al enterarse que tendría herman@s! \n\n El hermano mayor, el ídolo, el ejemplo, la referencia; la razón en carne y hueso para que todos practiquemos nuestro inglés (ahora que vive en Los Ángeles, California). \n\n No fue sencillo, pero hoy es de las pocas personas a poder dialogar al tú por tú con su papá en cuestiones de futbol americano: !chapeau! \n\n Gracias a él sabemos TODO lo que sucedió en Star Wars 1,2,3,4,5, 6 y 7; y en general TODO lo que sucede en el cine (está estudiando Film Studies). \n\n Sus tres pasiones: escribir, leer y tocar música. \n\n Lo que no puede faltar en su cuarto: libros, un instrumento de música, … una laptop y un cargador de celular (¡tiene 22 años!)',
        picture: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/diego-junior.jpg',
      },
      {
        _id: '2',
        name: 'Isabelle',
        bio: 'Primera de la serie. ¡10 años ya! \n\n' +
        'Líder entre sus primos y amigos, es carismática. Tiene mucha creatividad e iniciativa: es muy detallista (las notitas que encontramos en la casa los días con festejos ella las pone), se pasa horas ideando regalitos, tejiendo o haciendo pulseras con ligas para ofrecerlos; … cuando no manda mensajes a sus amigas o no toca guitarra. Le gusta también bailar, cantar, patinar sobre hielo, andar en bici con los pies en el manubrio. \n\n' +
        'Pone disciplina y dedicación en todo lo que hace: escuela, actividades extra escolares y vida social por supuesto. \n\n Si las comidas podrían limitarse a dulces y pasta, su existencia sería un paraíso. \n\n' +
        'Lo que no puede faltar en su cuarto: algún dispositivo para oír sus canciones favoritas, … y una cantidad indescriptible de materiales, ropa, muñecas, papeles, utensilios, etc. que ella encuentra indispensables a su vida diaria, y que los demás calificamos de … ¡desorden!',
        picture: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/isabelle-hija.jpg',
      },
      {
        _id: '3',
        name: 'Anne Hélène',
        bio: '¡8 años que la queremos! \n\n' +
        'La más auténtica, discreta y cariñosa, sin hacer ruido anda caminando forjando su vida con mucha fortaleza, determinación y lindura. \n\n' +
        'Muy cuidadosa en su vestimenta, se esmera en vestirse bonita, como a ella le gusta. \n\n' +
        'Pocos amigos, pero amigos contra todo y para siempre podría ser su lema. Buena estudiante, toca violín y le encanta bailar jazz con sus hermanas. \n\n' +
        'Le fascinan… la cajeta (bajo cualquier forma: sola, en helado, en crepas, etc.), leer, las actividades manuales, los legos, invitar a sus amigas, estar con su familia y pasar tiempo con sus padrinos. \n\n' +
        'Lo que no puede faltar en su cuarto: libros, la cajita de “atrapa sueños” (para alejar las pesadillas de sus noches), unos paquetes de post it, … y algún teléfono que habrá tomado “prestado” (para hacer sus juegos electrónicos favoritos).',
        picture: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/anne-helene.jpg',
      },
      {
        _id: '4',
        name: 'Catalina',
        bio: '¡El modelo 2010! \n\n' +
        'La última, la niña más entusiasta, expresiva y sensible de la familia. La más fuerte ' +
        'de carácter también… ¡sin duda! \n\n' +
        'Con sus 6 años de edad no se queda atrás y pone especial énfasis en buscar alcanzar a ' +
        'sus hermanas en lo que hagan. Si pudiera tener un vestido nuevo para cada evento social ' +
        'de su agenda sería la mujer más feliz! \n\n' +
        'Muy ocurrente en sus comentarios o respuestas frente a las situaciones que se ' +
        'presentan, nos saca más de una risa o sonrisa. \n\n' +
        'Disfruta mucho bailar, cantar, hablar inglés, ir a la escuela, llamar por teléfono, y ' +
        'ver a sus amigos (se lleva el premio de la persona más social de la familia: ¡todos son ' +
        'sus amigos!) \n\n' +
        'Lo que no puede faltar en su cuarto: sus “doudous” (peluchitos para dormir), ' +
        'disfraces, maquillaje, papel-tijeras-plumones para dibujar, … y los regalos que le ' +
        'dan sus seres consentidos.',
        picture: 'https://d1w4wvwm5jykke.cloudfront.net/IsabelleYDiego/family/catalina.jpg',
      },
    ];
  }

  rawMarkup(bio) {
    return { __html: markdown.render(bio) };
  }

  renderChildren() {
    return this.children().map((child) => (
      <div key={child._id} className="column">
        <img className="ui centered small circular image" src={child.picture}/>
        <h3 className="header">{child.name}</h3>
        <div className="description" dangerouslySetInnerHTML={this.rawMarkup(child.bio)}/>
      </div>
    ));
  }

  render() {
    return (
      <section id="children">
        <div className="ui container center aligned">
          <h2>Nuestros hijos</h2>
          <div className="ui middle aligned four column doubling grid">
            {this.renderChildren()}
          </div>
        </div>
      </section>
    );
  }
}
