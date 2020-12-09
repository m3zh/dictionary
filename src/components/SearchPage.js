import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import SearchBar from './SearchBar';
import background from '../img/background.jpg';

const SearchPage = () => {
    return (
      <Container className="background d-flex justify-content-center" fluid>
        <SearchBar />
      </Container>
    )
};

export default SearchPage;
