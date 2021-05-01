import {Row, Col, Card} from 'react-bootstrap';

export default function Highlights(){
    return(
    <>
        <Row>
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card className="cardHighlight card text-white bg-warning mb-3">
                <img className="card-image1"/>
                    <Card.Body className="shadow">
                        <Card.Title className="text-center">
                            <h1>Accessible</h1>
                        </Card.Title>
                        <Card.Text>
                        <h4>Truly near at the heart of metro manila that can be looked via waze or google map just by searching the name of our clinic as simple as that we can reach out for you and make your smile back.</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card className="cardHighlight card text-white bg-warning mb-3">
                <img className="card-image2"/>
                    <Card.Body className="shadow">
                        <Card.Title className="text-center">
                            <h1>Authentic Service</h1>
                        </Card.Title>
                        <Card.Text>
                        <h4>We give the best treatment and service to our patients without any discrimination, for sure that you are being handled by skilled doctor that is trained for years and years of experience outside of the philippines.</h4> 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card className="cardHighlight card text-white bg-warning mb-3">
                <img className="card-image3"/>
                    <Card.Body className="shadow">
                        <Card.Title className="text-center">
                            <h1>Patient Priority</h1>
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