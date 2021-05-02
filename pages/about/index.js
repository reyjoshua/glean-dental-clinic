import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import Image from 'next/image'
import Box from '@material-ui/core/Box';

function index() {
    return (
        <>  
            <Row>
            <Col xs={12} md={12} lg={12} xl={12}>
            <div className="cardHighlight">
            <img className="gradpic" src={require('../../images/grad.jpg')} alt="Picture of the Doctor"
            width={400}
            height={400} />
            </div>
            <div>
            <h1 className="name">
            Maria Reynosa R. Glean, DMD</h1>
            <h3 className="text-center specialty">General Dentistry & Orthodontics</h3>
            </div>
            </Col>
            </Row>
            <Container>
            <Col lg={12} xl={12}>
            <h1 className="text-center my-5" style={{backgroundColor: "#f5da2a", fontFamily: "'Oswald', sans-serif;"}}>
            Vision
            </h1>
            <h4 className="text-center">GDC aims the most expert <b style={{color: "red", fontFamily: "'Oswald', sans-serif;"}}>C</b>omfortable <b style={{color: "blue", fontFamily: "'Oswald', sans-serif;"}}>A</b>ppropriate <b style={{color: "brown", fontFamily: "'Oswald', sans-serif;"}}>R</b>eliable  <b style={{color: "green", fontFamily: "'Oswald', sans-serif;"}}>E</b>xcellence in dental practice that provides top quality dental procedures and services in the Philippines</h4>
            <br/>
            <h1 className="text-center my-5" style={{backgroundColor: "#f5da2a", fontFamily: "'Oswald', sans-serif;"}}>
            Mission
            </h1>
            <h4 className="text-center"><b style={{color: "brown", fontFamily: "'Oswald', sans-serif;"}}>G</b>entle and compassionate care with precision excellence<br/> <b style={{color: "red", fontFamily: "'Oswald', sans-serif;"}}>L</b>ess invasive to prevent, diagnose and solve dental problems<br/> <b style={{color: "blue", fontFamily: "'Oswald', sans-serif;"}}>E</b>nhance smile  and perfect oral health<br/> <b style={{color: "violet", fontFamily: "'Oswald', sans-serif;"}}>A</b>pproaches comfort-forcuse and judgment - free<br/> <b style={{color: "green", fontFamily: "'Oswald', sans-serif;"}}>N</b>urture the ethics and integrity of Dental practice </h4>
             </Col>
             <br/>
             <Row>
             <Col lg={6} xl={6}>
             <h3>Experience:</h3>
             <ul className="experience">
                 <li>
                 APC Dental and Wellness Center<br/>
                 Position: Senior Dentist<br/>
                 Duration: December 2018- January 2019
                 </li>
                 <li>
                 RAWAEA LAYAN DENTAL CLINIC<br/>
                 Position: General Dentist/Head of Cosmetic Dentistry<br/>
                 Duration: March 2016 - August 2018
                 </li>
                 <li>
                 Metrosmiles Dental Specialist<br/>
                 Position: General Dentist<br/>
                 Duration: May 2013 - March 2016   
                 </li>
                 <li>
                 City Best Dental Clinic<br/>
                 Position: Dentist<br/>
                 Duration: December 2013 – April 2014 
                 </li>
                 <li>
                 Dr. Carolina Santos Dental Clinic<br/>
                 Position: Dental Associate<br/>
                 Duration: October 2011 - 2012
                 </li>
             </ul>
             </Col>
             <Col lg={6} xl={6}>
             <h3>Education:</h3>
             <ul className="experience">
                 <li>
                 De Ocampo Memorial College<br/>
                 Doctor of Dental Medicine - GRADUATE<br/>
                 </li>
                 <li>
                 Emilio Aguinaldo College<br/>
                 Doctor of Dental Medicine<br/>
                 </li>
                 <li>
                 Adventist University of the Philippines<br/>
                 Pre-Dentistry
                 </li>
                 <li>
                 De LaSalle University<br/>
                 BS Physical Therapy
                 </li>
                 <li>
                 Trinity University of Asia<br/>
                 Caregiver - Graduate
                 </li>
             </ul>
             </Col>
             </Row>
            </Container>
        </>
    )
}

export default index
