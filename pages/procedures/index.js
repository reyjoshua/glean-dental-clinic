import React from 'react'
import {Row, Col, Card} from 'react-bootstrap';

function index() {
    return (
    <>
        <h1 className="text-center my-5 procedures" style={{fontFamily: "'Oswald', sans-serif;"}}>
            Procedures we offer
        </h1>
        <Row>
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card className="card"  bg="warning" text="white">
                    <img
                    className="card1"
                    src={require('../../images/prostho1.png')}
                    alt="Picture of the prosthodontics"
                    />
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1 style={{textShadow: "2px 2px 4px #000000", fontFamily: "'Oswald', sans-serif;"}}>Porcelain Crown</h1>
                        </Card.Title>
                        <Card.Text style={{textShadow: "2px 2px 4px #000000", fontSize: "20px"}}>
                        Gain confidence and ensure long-term health with New biocompatible porcelain crown. New fixed Jacket crowns are an excellent choice if you’re looking to restore your smile. We can show you the different types of dental crowns so you can select the ones that are right for you.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card className="card"  bg="warning" text="white">
                    <img
                    className="card2"
                    src={require('../../images/prostho2.png')}
                    alt="Picture of the author"
                    />
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1 style={{textShadow: "2px 2px 4px #000000", fontFamily: "'Oswald', sans-serif;"}}>Porcelain Fused to Metal Crowns</h1>
                        </Card.Title>
                        <Card.Text style={{textShadow: "2px 2px 4px #000000", fontSize: "20px"}}>
                        Porcelain fused to metal crowns (PFM crowns) are metal crowns with a layer of porcelain fused on the metal. PFM crowns are more affordable than all-ceramic crowns. They have a very high rate of success in the long run. They look like your natural teeth. These are best for patients looking for a natural look and durability.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card className="card"  bg="warning" text="white">
                    <img
                    className="card3"
                    src={require('../../images/prostho3.png')}
                    alt="Picture of the author"
                    />
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1 style={{textShadow: "2px 2px 4px #000000", fontFamily: "'Oswald', sans-serif;"}}>Dentures</h1>
                        </Card.Title>
                        <Card.Text style={{textShadow: "2px 2px 4px #000000", fontSize: "20px"}}>
                        Dentures are made to closely resemble your natural teeth so there should be only a small noticeable change in appearance. In fact, dentures may even improve your smile and fill out your facial appearance.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="my-5">
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card className="card"  bg="warning" text="white">
                    <img
                    className="card4"
                    src={require('../../images/cosmetic1.jpg')}
                    alt="Picture of the author"
                    />
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1 style={{textShadow: "2px 2px 4px #000000", fontFamily: "'Oswald', sans-serif;"}}>Dental Bridge</h1>
                        </Card.Title>
                        <Card.Text style={{textShadow: "2px 2px 4px #000000", fontSize: "20px"}}>
                        A dental bridge is one way of replacing a missing tooth or teeth. Unlike dentures, a dental bridge is permanent and is fixed to the adjacent teeth or implants.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card className="card"   bg="warning" text="white">
                    <img
                    className="card5"
                    src={require('../../images/cosmetic2.jpg')}
                    alt="Picture of the author"
                    />
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1 style={{textShadow: "2px 2px 4px #000000", fontFamily: "'Oswald', sans-serif;"}}>Teeth Whitening</h1>
                        </Card.Title>
                        <Card.Text style={{textShadow: "2px 2px 4px #000000", fontSize: "20px"}}>
                        Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.<br/>
                        Is teeth whitening permanent?<br/>
                        Teeth whitening isn't permanent. It can last from a few months to up to 3 years – it varies from person to person.<br/>
                        The whitening effect won't last as long if you smoke or drink red wine, tea or coffee, which can all stain your teeth  
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={12} lg={4} className="my-5">
                <Card className="card"  bg="warning" text="white">
                        <img
                        className="card6"
                        src={require('../../images/braces.png')}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        />
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1 style={{textShadow: "2px 2px 4px #000000", fontFamily: "'Oswald', sans-serif;"}}>Dental braces </h1>
                        </Card.Title>
                        <Card.Text style={{textShadow: "2px 2px 4px #000000", fontSize: "20px"}}>
                        (also known as braces, orthodontic cases, or cases) are devices used in orthodontics:
                        <ul>
                            <li>Align and straighten teeth and help position them with regard to a person's bite, while also aiming to improve dental health. </li>
                            <li>Braces also fix gaps.</li>
                            <li>They are often used to correct underbites, as well as malocclusions, overbites, open bites, deep bites, cross bites, crooked teeth, and various other flaws of the teeth and jaw.</li>
                            <li>Braces can be either cosmetic or structural.</li>
                            <li>Dental braces are often used in conjunction with other orthodontic appliances to help widen the palate or jaws and to otherwise assist in shaping the teeth and jaws. </li>
                        </ul>
                        </Card.Text> 
                    </Card.Body>
                </Card>
            </Col>
        </Row>
</>
    )
}

export default index
