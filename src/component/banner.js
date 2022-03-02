import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../images/home-banner.jpg';
 
function banner () {
    return (
        <Carousel autoPlay infiniteLoop interval="6000">
            <div>
                <img src={Banner1} width="1600" height="750"/>
                <p className="legend">Excellence In Sheet Metal Fabrication</p>
            </div> 
        </Carousel>   
    );
}
 
export default banner;