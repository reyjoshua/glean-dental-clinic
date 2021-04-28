import React from 'react'
import {Row, Col, Card} from 'react-bootstrap';

function index() {
    return (
    <>
        <h1 className="text-center my-5">
            Procedures we offer
        </h1>
        <Row>
            <Col xs={12} md={4}>
                <Card className="cardHighlight">
                <img className="card1"/>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1>Prosthodontics</h1>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="cardHighlight">
                <img className="card2"/>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1>Prosthodontics</h1>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="cardHighlight">
                <img className="card3"/>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1>Prosthodontics</h1>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="my-5">
            <Col xs={12} md={4}>
                <Card className="cardHighlight">
                <img className="card4"/>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1>Implants</h1>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="cardHighlight">
                <img className="card5"/>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1>Cosmetic Dentistry</h1>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="cardHighlight">
                <img className="card6"/>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1>Orthodontics</h1>
                        </Card.Title>
                        {/* <Card.Text className="procedure">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iure 
                        deserunt fugit molestiae explicabo ad nostrum non sed tempore et adipisci 
                        quis enim dolorum, quas voluptates itaque laboriosam accusantium. Accusantium.
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
</>
    )
}

export default index
