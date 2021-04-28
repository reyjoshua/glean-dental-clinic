import React from 'react'
import {Row, Col, Card} from 'react-bootstrap';

function index() {
    return (
        <>
        <Row className="margin-grad">
            <Col xs={12} md={6}>
            <div className="cardHighlight">
                <img className="gradpic"/>
            </div>
            </Col>
            <Col xs={12} md={4}>
            <h1 className="text-center my-5">
            About Us
            </h1>
            <h4 className="text-center">Responsible for making sure that patients of all ages and sizes have their oral care needs covered. They are also responsible for providing their patients with the information that they need to prevent any problems from occurring to their teeth and mouth. This may include information on what foods should be avoided, how they can maintain proper dental health, and much more. They are required to help patients to recover from any diseases that affect the oral cavity. Diagnosis, preventative care, and treatment procedures to the teeth and mouth are all major components of a dentist’s job.</h4>
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
                 Duration: December 2018- present
                 </li>
                 <li>
                 RAWAEA LAYAN DENTAL CLINIC<br/>
                 Position: General Dentist<br/>
                 Duration: March 2016 - August 2018
                 </li>
                 <li>
                 Metrosmiles Dental Specialist<br/>
                 Position: Dentist<br/>
                 Duration: May 2013 - March 2016   
                 </li>
                 <li>
                 City Best Dental Clinic
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
        </Row>
        </>
    )
}

export default index
