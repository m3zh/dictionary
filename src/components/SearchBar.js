import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = () => {
  return (
    <div className="align-self-center w-75">
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
