import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (<Navbar bg="danger" expand="lg">
    <Navbar.Brand href="#home">The Book</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      {/* <NavDropdown title="Contribute" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Add a word</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Edit a word</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Write to us</NavDropdown.Item>
      </NavDropdown> */}
        <Nav.Link href="#home">Write</Nav.Link>
        <Nav.Link href="#home">Edit</Nav.Link>
        <Nav.Link href="#link">Team</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form> */}
      <Nav className="ml-auto">
        <Nav.Link href="#link">笔</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
};

export default NavBar;
