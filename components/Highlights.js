import {Row, Col, Card} from 'react-bootstrap';

export default function Highlights(){
    return(
    <>
        <Row>
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card style={{height: "auto"}} bg="warning" text="white">
                    <img
                    className="card-image1"
                    src={require('../images/facade.jpg')}
                    alt="Picture of the author"
                    
                    />
                    <Card.Body className="shadow">
                        <Card.Title className="text-center">
                            <h1 style={{textShadow: "2px 2px 4px #000000", fontFamily: "'Oswald', sans-serif;"}}>Accessible</h1>
                        </Card.Title>
                        <Card.Text>
                        <h4>Truly near at the heart of metro manila that can be looked via waze or google map just by searching the name of our clinic as simple as that we can reach out for you and make your smile back.</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card style={{height: "auto"}} bg="warning" text="white">
                    <img
                    className="card-image2"
                    src={require('../images/promo2.jpg')}
                    alt="Picture of the author"
                    width={400}
                    height={400}
                    />
                    <Card.Body className="shadow">
                        <Card.Title className="text-center">
                            <h1 style={{textShadow: "2px 2px 4px #000000", fontFamily: "'Oswald', sans-serif;"}}>Authentic Service</h1>
                        </Card.Title>
                        <Card.Text>
                        <h4>We give the best treatment and service to our patients without any discrimination, for sure that you are being handled by skilled doctor that is trained for years and years of experience outside of the philippines.</h4> 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card style={{height: "auto"}} bg="warning" text="white">
                    <img
                    className="card-image3"
                    src={require('../images/covid.jpg')}
                    alt="Picture of the author"
                    width={400}
                    height={400}
                    />
                    <Card.Body className="shadow">
                        <Card.Title className="text-center">
                            <h1 style={{textShadow: "2px 2px 4px #000000", fontFamily: "'Oswald', sans-serif;"}}>Patient Priority</h1>
                        </Card.Title>
                        <Card.Text>
                        <h4>Alongside with the pandemic we make sure that the safety of our patients are in priority check regards how long the operations the same protocol will be emitted, we will make sure the satisfaction of the patient is attained.</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
</>
    )
}