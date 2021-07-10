import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar';

const CharPage = () => {
    return (
      <Container className="min-vh-100 d-flex flex-column justify-content-start mt-5" fluid>
        <SearchBar />
      </Container>
    )
};

export default CharPage;
