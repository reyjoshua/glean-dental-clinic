import {Row, Col, Card} from 'react-bootstrap';

export default function Highlights(){
    return(
    <>
        <Row>
            <Col xs={12} md={4}>
                <Card className="cardHighlight">
                <img className="card-image1"/>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h2>Accessible</h2>
                        </Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iure 
                        deserunt fugit  molestiae explicabo ad nostrum non sed tempore et adipisci 
                        quis enim dolorum, quas voluptates itaque laboriosam accusantium. Accusantium.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="cardHighlight">
                <img className="card-image2"/>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h2>Authentic Service</h2>
                        </Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iure 
                        deserunt fugit molestiae explicabo ad nostrum non sed tempore et adipisci 
                        quis enim dolorum, quas voluptates itaque laboriosam accusantium. Accusantium.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="cardHighlight">
                <img className="card-image3"/>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h2>Patient Priority</h2>
                        </Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iure 
                        deserunt fugit molestiae explicabo ad nostrum non sed tempore et adipisci 
                        quis enim dolorum, quas voluptates itaque laboriosam accusantium. Accusantium.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
</>
    )
}