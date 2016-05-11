import React from 'react';

export default class Children extends React.Component {
  getChildren() {
    return [
      { _id: '1', name: 'Uno', age: '12', picture: 'http://placehold.it/600' },
      { _id: '2', name: 'Dos', age: '6', picture: 'http://placehold.it/600' },
      { _id: '3', name: 'Tres', age: '23', picture: 'http://placehold.it/600' },
      { _id: '4', name: 'Cuatro', age: '4', picture: 'http://placehold.it/600' },
    ];
  }

  renderChildren() {
    return this.getChildren().map((child) => (
      <div key={child._id} className="column">
        <img className="ui centered small circular image" src={child.picture}/>

        <h4 className="header">{child.name}</h4>
        <p className="description">{child.age}</p>
      </div>
    ));
  }

  render() {
    return (
      <div className="ui four column grid">
        {this.renderChildren()}
      </div>
    );
  }
}
