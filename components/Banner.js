import {Jumbotron, Button, Col} from 'react-bootstrap';
import Link from 'next/link';

export default function Banner(){
    
    return(
        <Col xs={12} md={12} lg={12} xl={12}>
        <div className="position">
        <img
         className="contact"
         src={require('../images/cover.jpg')}
         alt="Cover photo"
         height={700}
         width={900}
         />
        </div> 
        <div className="text">
        <Col xs={12} md={12} lg={12} xl={12}>
        <Button type="button" className="btn btn-warning btn-lg inquire" ><a href="/contact" style={{fontSize: "40px"}}>Inquire Now!</a></Button>
        </Col>
        </div>
        </Col>
    )
}