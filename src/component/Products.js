import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import {Link} from "react-router-dom";
import banner_image from '../images/inner-banner-4.jpg';  
import product_img_1 from '../images/pro-1.jpg';  
import product_img_1_1 from '../images/pro-1-1.jpg';  

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
    Products
    </h1>
    <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
    <li><Link to='/'>Home</Link></li>  
    <li> / </li> 
    <li className="active">Products</li>
    </ul>
    </Col>
    </Row>
    </Container>
    </Col>
    </section>  

    <section className='prducts-lists text-center'>
    <Container>
    <Row>

    <div class="col-lg-12">

    <div class="industries-serving" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
    <div class="common-title"><h2>Dynamic Air Products</h2></div>
    <div class="common-second-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"><h3>Trusted by India’s Leading Companies</h3></div>
    <div class="common-third-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <h4>Railways – Fabrication (Mild Steel, Stainless Steel, Aluminium)</h4></div> 
    </div>

    <div className='products-lstings'>
    <ul>
    <li>
    <a href="">
    <img src={product_img_1}/>
    <span> Side Wall </span>
    </a>
    </li>
    <li>
    <a href="">
    <img src={product_img_1}/>
    <span> Roof </span>
    </a>
    </li>
    <li>
    <a href="">
    <img src={product_img_1}/>
    <span> Underframe </span>
    </a>
    </li>
    <li>
    <a href="">
    <img src={product_img_1}/>
    <span> End Wall </span>
    </a>
    </li>
    <li>
    <a href="">
    <img src={product_img_1}/>
    <span> Nose Cone </span>
    </a>
    </li>
    <li>
    <a href="">
    <img src={product_img_1}/>
    <span> Railway Doors & Windows </span>
    </a>
    </li>
    </ul>
    </div>

    </div>



    </Row>   
    </Container> 
    </section>

     

    </div>
  )
}
