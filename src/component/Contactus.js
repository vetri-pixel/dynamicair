import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import {Link} from "react-router-dom";
import banner_image from '../images/inner-banner-2.jpg';
import Addressmap from './Addressmap';
import { FaRegBuilding } from "react-icons/fa";
import { RiBuilding4Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

export default function Contactus() {
  return (
    <div>

    <section className='inner-banner'>
    <img src={banner_image}/>
    <Col className='banner-sector'>
    <Container>
    <Row>
    <Col className='ban-cnt'>
    <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    Contact Us
    </h1>
    <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
    <li><Link to='/'>Home</Link></li>  
    <li> / </li> 
    <li className="active">Contact Us</li>
    </ul>
    </Col>
    </Row>
    </Container>
    </Col>
    </section>  

    <section className="contact-us">
    <Container>
    <Row> 

    <Col className='cont-usall'>
    <Row>

    <Col className='col-lg-7 bg-white'>
    <Col className='get-intoch' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    <div className="common-second-title"><h3>Get in Touch</h3></div>    
    <div className="row">
    <div className="col-sm-12 col-md-6 col-lg-6">
    <input type="text" className="form-control" placeholder="Enter your Name" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
    <input type="email" className="form-control" placeholder="Enter your Mail" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
    <input type="text" className="form-control" placeholder="Enter your Phone Number" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
    <input type="text" className="form-control" placeholder="Enter your Location" />
    </div>
    <div className="col-sm-12 col-md-12 col-lg-12">
    <textarea className="form-control" placeholder="Enter your Message"></textarea>
    <button type="submit">Submit</button>
    </div>
    </div>    
    </Col>    
    </Col> 

    <Col className='col-lg-5 p-0'>
    <Col className='adress-layr' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
    <div className="common-second-title white"><h3>Reach Us</h3></div>  
    <ul>
    <li><FaRegBuilding />
    <span>No.4, Boopathy Nagar, <br></br>
    Industrial Estate, <br></br>
    Keelkattalai, Chennai - 600117.</span></li> 
    <li><RiBuilding4Line />
    <span>No.123, Satharai Village <br></br>
    Near Mappedu Koot Road, <br></br>
    Thiruvallur District, Chennai - 631402.</span></li>
    <li><FiPhoneCall />
    <span>044 2247445 / 46 / 48 | +91 8925202444</span></li>
    <li><AiOutlineMail />
    <span>marketing@dynamicair.in</span></li>
    </ul>   
    </Col>       
    </Col> 

    </Row>
    </Col>  

    </Row>    
    </Container>    
    </section> 

     <Addressmap/>

    </div>
  )
}
