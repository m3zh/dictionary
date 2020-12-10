import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = () => {
    return (
    <div className="d-flex align-items-center col-9">
      <div class="input-group min-height">
          <input class="form-control py-2 border-right-0 border" type="search" value="search" id="example-search-input"/>
          <span class="input-group-append">
              <div class="input-group-text bg-white"><FontAwesomeIcon icon="search" /></div>
          </span>
      </div>
    </div>
    )
};

export default SearchBar;
