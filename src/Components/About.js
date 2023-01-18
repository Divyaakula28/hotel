import React from "react";
import Header from '../Components/Header';
import about from './images/about.jfif';
import './about.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(){
    return(
        <div>
        <Header/>
        <img src={about} width='100%' height='500px' alt='about' className="bckimg"></img>
        <div className="centered">MAGIC TIME</div>
        <Row className='entireRow'>
            <Col lg={6} >
                <h1 className='subhead'> What We Do</h1>
            </Col>
            <Col lg={6}>
            <h4 className="subtext">At MT(Magic Time),we're all about serving up fresh food,even if it means going the extra mile. When you walk through our door,we do what we can make everyone feel at home beacause our family extends thrugh your community.</h4>
        
            </Col>
        </Row>
        
</div>
    )
}

export default About;