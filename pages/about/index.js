import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import Image from 'next/image'

function index() {
    return (
        <>  
            <Col xs={12} md={12} lg={12} xl={12}>
            <div className="cardHighlight">
            <Image
            className="gradpic"
            src="/images/grad.jpg"
            alt="Picture of the author"
            width={400}
            height={400}
            />
            </div>
            </Col>
            <Container>
            <Col lg={12} xl={12}>
            <h1 className="text-center my-5">
            Vision
            </h1>
            <h4 className="text-center">GDC aims the most Expert <b>C</b>omfortable <b>A</b>ppropriate <b>R</b>eliable  <b>E</b>xcellence in dental practice that provides top quality dental procedures and services in the Philippines</h4>
            <br/>
            <h1 className="text-center my-5">
            Mission
            </h1>
            <h4 className="text-center"><b>G</b>entle and compassionate care with precision excellence <b>L</b>ess invasive to prevent, diagnose and solve dental problems <b>E</b>nhance smile  and perfect oral health <b>A</b>pproaches comfort-forcuse and judgment - free <b>N</b>urture the ethics and integrity of Dental practice </h4>
            <br/>
            <h3>Objective:</h3>
             <h4>
             To be able to reach that level of assistance by serving this company, achieving my goal with experience that I have gathered where opportunities for growth and advancement may be seized for further enhancement, and fulfillment through hard work and dedication.
             </h4>
             <br/>
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
            </Container>
        </>
    )
}

export default index
