import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import {Link} from "react-router-dom";
import banner_image from '../images/inner-banner-1.jpg';
import abt_rit_img from '../images/about-img-right.png';  
import vison_icon from '../images/vision.png'; 
import mison_icon from '../images/mission.png'; 
import certi_1 from '../images/certificate-1.jpg'; 
import certi_2 from '../images/certificate-2.jpg'; 
import certi_3 from '../images/certificate-3.jpg'; 
import certi_4 from '../images/certificate-4.jpg'; 

export default function CompanyProfile() {
  return (
    <div>
    <section className='inner-banner'>
    <img src={banner_image}/>
    <Col className='banner-sector'>
    <Container>
    <Row>
    <Col className='ban-cnt'>
    <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">About us</h1>
    <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
    <li><Link to='/'>Home</Link></li>  
    <li> / </li>   
    <li> About us </li> 
    <li> / </li>
    <li className="active">Company Profile</li>
    </ul>
    </Col>
    </Row>
    </Container>
    </Col>
    </section>

<section className="section about-section">
<Container>
<Row className='align-items-center'>
<Col className='col-lg-6' data-aos="fade-right" data-aos-duration="1000">

<div className='common-title'>
<h2>About Us</h2>
</div>
<div className='common-second-title'>
<h3>Our Dynamic Story</h3>
</div>
<div className='common-third-title'>
<h4>Established in 2008 and headquartered in Chennai, India, Dynamic Air Engineering India Private Limited</h4>
</div>
<div className='common-para'>
<p>is an ISO 9001: 2015 certified company that specializes in the fabrication of all kinds of sheet metal solutions under one roof. It has established in 2008 and is headquartered in Chennai, India.<br></br>
<br></br>
Dynamic Air is one of the leading rail coach manufacturers that entered the railway segment in the year 2008. The company handles all kinds of fabrications made for Indian Railways, and currently manufactures entire train coaches for Integral Coach Factory, Chennai. Dynamic Air provides you with complete solutions, from Design, Fabrication and Installation services to International Standards.<br></br>
<br></br>
Our infrastructure includes a full-fledged German technology machines for high end accuracy, In-house testing facilities, Material handling, inventory management and design software for enhanced designing capability. Dynamic Air's modernized manufacturing unit for Sheet Metal Fabrication is spread over 130000 Sq.ft.<br></br>
<br></br>
The unit is equipped with world-class machineries and equipments. The facility is backed-up by a well organized work structure & dedicated QA in place.</p>
</div> 

</Col>

<Col className='col-lg-6' data-aos="fade-left" data-aos-duration="1500">

<div className="abtou-img text-end">
<img src={abt_rit_img}/>
</div>

</Col>

<Col className='col-lg-12'>
<Col className='vison-mison row'>

<Col className='col-lg-6'> 
<Col className='vison' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
<img src={vison_icon}/>
<h4>Vision</h4>
<p>To provide a complete solution to customer requirements. To capture a signicant market share in the business of Metal Fabrication globally.<br></br>
We target to a wide range of industries like Railways, Aerospace, Defence, Ship Building, Earthmoving & Construction Equipments, Automotive, Elevators, Electrical Switchgear, Medical Equipments, Chemical & Food Processing, Power Plant, Solar Power Plant Telecommunication and Instrumentation, Textile & General Engineering.</p>
</Col>
</Col> 

<Col className='col-lg-6'> 
<Col className='mison' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
<img src={mison_icon}/>
<h4>Mission</h4>
<p>To consistently deliver innovative and efcient contract manufacturing solutions that provide our customers with a competitive advantage.</p>
</Col>
</Col> 

</Col>
</Col>

</Row>
</Container>
</section>

<section className='our-cetrefication text-center'>
<Container>
<Row className='align-items-center'>

<Col className='col-lg-12'>

<div className='common-title white' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
    <h2>Accreditation</h2>
    </div> 

    <div className='common-second-title white' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <h3>Our Certifications</h3>
    </div>

<div className='certificates-funtoion'>
<ul>
<li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"><img src={certi_1}/></li>
<li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"><img src={certi_2}/></li>
<li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"><img src={certi_3}/></li>
<li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"><img src={certi_4}/></li>
</ul>
</div>

</Col>

</Row>
</Container>  
</section>

</div>
    
  )
}
