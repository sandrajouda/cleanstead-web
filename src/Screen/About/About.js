import React, { Fragment } from "react";
import Header from "../../Component/Header/Header";
import Body from "../../Component/Body/Body";
import Footer from "../../Component/Footer/Footer";
import './About.css';
//import { Container } from 'react-bootstrap';

function About(){
    return(
     <Fragment className="container">
      <Header/>
      <Body/>
      <Footer/>
      </Fragment>
    );
}export default About;