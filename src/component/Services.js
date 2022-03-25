import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import {Link} from "react-router-dom";
import banner_image from '../images/inner-banner-5.jpg';  
import service_image_1 from '../images/servce-1.jpg';  

export default function Products() {
  return (
    <div>

    <section className='inner-banner'>
    <img src={banner_image}/>
    <Col className='banner-sector'>
    <Container>
    <Row>
    <Col className='ban-cnt'>
    <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    Services
    </h1>
    <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
    <li><Link to='/'>Home</Link></li>  
    <li> / </li> 
    <li className="active">Services</li>
    </ul>
    </Col>
    </Row>
    </Container>
    </Col>
    </section>  

    <section className='services-lstngs'>
    <Container>
    <Row>

    <div className='col-lg-12 text-center'>

    <div className='common-title'>
    <h2>Works Done</h2>
    </div>
    <div className='common-second-title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <h3>Enabling Highly Advanced Technology</h3>
    </div>
    <div className='common-third-title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry </h4>
    </div>

    <div className='servicing-sector'>

    <div className='servces no-bricks'>
    <Row>
    <div className='col-lg-5'>
    <div className='servce-img'>
    <img src={service_image_1}/>
    </div>
    </div>

    <div className='col-lg-7 align-self-center'>
    <div className='servce-cnt left-prt text-start'>
    <h4>Laser Cutting Machine 1</h4> 
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    </div>
    </Row>
    </div> 

    <div className='servces'> 
    <Row>
    <div className='col-lg-7 align-self-center'>
    <div className='servce-cnt right-prt text-start'>
    <h4>Laser Cutting Machine 1</h4> 
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    </div>

    <div className='col-lg-5'>
    <div className='servce-img'>
    <img src={service_image_1}/>
    </div>
    </div>
    </Row>
    </div> 

    <div className='servces'>
    <Row>
    <div className='col-lg-5'>
    <div className='servce-img'>
    <img src={service_image_1}/>
    </div>
    </div>

    <div className='col-lg-7 align-self-center'>
    <div className='servce-cnt left-prt text-start'>
    <h4>Laser Cutting Machine 1</h4> 
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    </div>
    </Row>
    </div> 

    </div>

    </div>

    </Row>
    </Container>
    </section>
 
    </div>
  )
}
