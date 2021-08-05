import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// <Navbar.Brand href="/">The Book</Navbar.Brand>

const NavBar = () => {
    return (
      <navbar>
        <Link to="/">The Book</Link>
        <Link to="/write">Write</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/team">Team</Link>
      </navbar>
    )
};

export default NavBar;
