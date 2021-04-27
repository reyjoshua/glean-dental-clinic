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
            <h6 className="text-center">Responsible for making sure that patients of all ages and sizes have their oral care needs covered. They are also responsible for providing their patients with the information that they need to prevent any problems from occurring to their teeth and mouth. This may include information on what foods should be avoided, how they can maintain proper dental health, and much more. They are required to help patients to recover from any diseases that affect the oral cavity. Diagnosis, preventative care, and treatment procedures to the teeth and mouth are all major components of a dentist’s job.</h6>
            <br/>
            <h4>Objective:</h4>
             <h5>
             To be able to reach that level of assistance by serving this company, achieving my goal with experience that I have gathered where opportunities for growth and advancement may be seized for further enhancement, and fulfillment through hard work and dedication.
             </h5>
             <br/>
             <ul>
                 <li>
                 Evaluate the current health and condition of their patient’s teeth to determine diagnosis of dental condition, if any
                 </li>
                 <li>
                 Inform their patients on how to prevent dental problems and keep their teeth and mouth as healthy as possible
                 </li>
                 <li>
                 Complete treatment on affected gums, decayed and fractured teeth, and perform tooth removal for cases where there are high levels of decay   
                 </li>
                 <li>
                 Consider treatment methods and explain the options with the patient to determine which works best for them based on their situation  
                 </li>
                 <li>
                 Keep all equipment functional and clean  
                 </li>
                 <li>
                 Maintain dental files for all patients 
                 </li>
                 <li>
                 Monitor and evaluate any x-ray images for any part of the patient’s oral cavity  
                 </li>
                 <li>
                 Refer patients to orthodontists or other dental specialist for more advanced procedures and care  
                 </li>
             </ul>
            </Col>
        </Row>
        </>
    )
}

export default index
