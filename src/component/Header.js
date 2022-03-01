import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
  return (
    <div className='top-bar'>
        <Container>
  <Row>
    <Col>No.4, Boopathy Nagar, Industrial Estate, Keelkattalai, Chennai-600117</Col>
    <Col className='text-end'>
      <a href="mailto:Marketing@dynamicair.in">Marketing@dynamicair.in </a> | +91 8925202444
    </Col>
  </Row>
</Container> 
    </div>
  )
}
