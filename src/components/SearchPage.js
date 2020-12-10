import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import SearchBar from './SearchBar';
import background from '../img/background.jpg';

const SearchPage = () => {
    return (
      <Container className="min-vh-100 d-flex flex-column justify-content-start mt-5" fluid>
        <SearchBar />
      </Container>
    )
};

export default SearchPage;
