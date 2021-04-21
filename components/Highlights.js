import {Row, Col, Card} from 'react-bootstrap';

export default function Highlights(){
    return(
    <>
        <Row>
            <Col xs={12} md={4}>
                <Card className="cardHighlight">
                    <Card.Body>
                        <Card.Title>
                            <h2>Learn From Home</h2>
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
                    <Card.Body>
                        <Card.Title>
                            <h2>Study Now, Pay Later</h2>
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
                    <Card.Body>
                        <Card.Title>
                            <h2>Be Part of Our Community</h2>
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

        <Row className="my-5">
        <Col xs={12} md={4}>
            <Card className="cardHighlight">
                <Card.Body>
                    <Card.Title>
                        <h2>Learn From Home</h2>
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
                <Card.Body>
                    <Card.Title>
                        <h2>Study Now, Pay Later</h2>
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
                <Card.Body>
                    <Card.Title>
                        <h2>Be Part of Our Community</h2>
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