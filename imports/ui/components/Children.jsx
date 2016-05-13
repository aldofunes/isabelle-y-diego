import React from 'react';

export default class Children extends React.Component {
  children() {
    return [
      { _id: '1', name: 'Diego', bio: 'Calcaria, impositio, et brodium.', picture: 'http://placehold.it/300' },
      { _id: '2', name: 'Isabelle', bio: 'Nunquam reperire hydra.', picture: 'http://placehold.it/300' },
      { _id: '3', name: 'Anne Hélène', bio: 'Omnias assimilant in rusticus cubiculum!', picture: 'http://placehold.it/300' },
      { _id: '4', name: 'Catalina', bio: 'Sunt abnobaes desiderium domesticus, dexter itineris tramitemes.', picture: 'http://placehold.it/300' },
    ];
  }

  renderChildren() {
    return this.children().map((child) => (
      <div key={child._id} className="column">
        <img className="ui centered small circular image" src={child.picture}/>

        <h4 className="header">{child.name}</h4>
        <p className="description">{child.bio}</p>
      </div>
    ));
  }

  render() {
    return (
      <div className="ui middle aligned four column doubling grid">
        {this.renderChildren()}
      </div>
    );
  }
}
