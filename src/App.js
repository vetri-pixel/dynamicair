import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'video-react/dist/video-react.css';
import Header from './component/Header'; 
import HomePage from './component/home';
import CompanyProfile from "./component/CompanyProfile";
import Contactus from "./component/Contactus";
import Footer from './component/Footer';
 
function App() {

    return ( 
        
      <div className = "App"> 
        <Router>
      <Header/>  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about-us/company-profile" element={<CompanyProfile />} />
          <Route path="contact-us" element={<Contactus />} />
        </Routes>
        <Footer/>
    </Router> 
      </div>
    );
}

AOS.init({
    once: true
  });

export default App;