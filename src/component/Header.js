import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'; 
import logo from '../images/logo.png';

export default function Header() {
  return (
    <div className=''>
    <div className='top-bar'>
    <Container>
      <Row>
    <Col>No.4, Boopathy Nagar, Industrial Estate, Keelkattalai, Chennai-600117</Col>
    <Col className='text-end'>
      <a href="mailto:Marketing@dynamicair.in">Marketing@dynamicair.in </a> |  +91 8925202444
    </Col>
    </Row>
  </Container> 
    </div>
    
    <div className='main-menu'>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" ><img src={logo} className="App-logo" alt="Dynamic Air Logo" width="136" height="73" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#">Service - 1</NavDropdown.Item> 
              <NavDropdown.Item href="#">Service - 2</NavDropdown.Item> 
              <NavDropdown.Item href="#">Service - 3</NavDropdown.Item> 
              <NavDropdown.Item href="#">Service - 4</NavDropdown.Item> 
            </NavDropdown>
            <Nav.Link href="#">Products</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Clients</Nav.Link>
            <Nav.Link href="#">Testimonials</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
  )
}

