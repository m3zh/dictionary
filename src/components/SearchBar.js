import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBar extends React.Component {
  constructor(props) {
    // On passe nos props au constructeur
    super(props); // On passe également nos props dans super, qu'on récupère depuis React.Component qui est notre classe parente
    this.sayHeyOnClick = this.sayHeyOnClick.bind(this); // On bind notre méthode pour ne pas avoir de problème avec le (this) (Optionnel si tes méthodes sont en ES6)
  }

  sayHeyOnClick = () => {
    console.log("hey");
  };

  return (
    <div className="align-self-center w-75">
      <h1 className="mw-100 text-center">Look up the history of a Chinese character</h1>
      <div className="input-group min-height">
          <input className="form-control py-2 border-right-0 border" type="search" value="search" id="example-search-input"/>
          <span className="input-group-append">
              <div className="input-group-text bg-white"><FontAwesomeIcon icon="fa-search" /></div>
          </span>
      </div>
    </div>
    )
};

export default SearchBar;
