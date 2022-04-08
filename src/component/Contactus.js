import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import {Link} from "react-router-dom";
import banner_image from '../images/inner-banner-2.jpg';
import Addressmap from './Addressmap';
import { FaRegBuilding } from "react-icons/fa";
import { RiBuilding4Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FormInput } from './FormInput';

export default function Contactus() {
    const [name, setName] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        alert(`The name you entered was:`)
    }

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

    <div className='cont-usall'> 
    <Row>
    
    <div className='col-lg-7 bg-white'>
    <div className='get-intoch' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    <div className="common-second-title"><h3>Get in Touch</h3></div>    
    <div className="row">
    <form onSubmit={handleSubmit}>
    <div className="col-sm-12 col-md-6 col-lg-6">
        <FormInput required={true} type="text" label="name" onChange={(e) => console.log('sdfsdfds')} placeholder="Enter your name"/>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
        <FormInput required={true} type="email" label="email"   placeholder="Enter your mail"/>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
        <FormInput required={true} type="number" label="phone number"  placeholder="Enter your phone number"/>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
        <FormInput required={false} type="text" label="location"   placeholder="Enter your location"/>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-12">
    <textarea className="form-control" placeholder="Enter your message"></textarea>
    <button type="submit">Submit</button>
    </div>
    </form>
    </div>    
    </div>    
    </div> 

    <div className='col-lg-5 p-0'>
    <div className='adress-layr' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
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
    </div>       
    </div> 

    </Row>
    </div>  

    </Row>    
    </Container>    
    </section> 

     <Addressmap/>

    </div>
  )
}
