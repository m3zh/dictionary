import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar';

const SearchPage = () => {
    return (
      <Container className="background d-flex justify-content-center" fluid>
        <SearchBar />
      </Container>
    )
};

export default SearchPage;
